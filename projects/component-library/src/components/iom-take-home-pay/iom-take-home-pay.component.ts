import {ChangeDetectionStrategy, Component, computed, DEFAULT_CURRENCY_CODE, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SunburstChartComponent, SunburstItem} from '../sunburst-chart/sunburst-chart.component';
import {CurrencyPipe} from '@angular/common';
import {TooltipDirective} from '../../directives/tooltip/tooltip.directive';
import {form, FormField, min, required} from '@angular/forms/signals';

const PERSONAL_ALLOWANCE_SINGLE = 17000;
const PERSONAL_ALLOWANCE_JOINT = PERSONAL_ALLOWANCE_SINGLE * 2;
const PERSONAL_ALLOWANCE_SINGLE_HIGH_EARNER_THRESHOLD = 100000;
const PERSONAL_ALLOWANCE_JOINT_HIGH_EARNER_THRESHOLD = PERSONAL_ALLOWANCE_SINGLE_HIGH_EARNER_THRESHOLD * 2;

const NATIONAL_INSURANCE_WEEKLY_PRIMARY_THRESHOLD = 176;
const NATIONAL_INSURANCE_WEEKLY_UPPER_THRESHOLD = 1082;
const NATIONAL_INSURANCE_THRESHOLD_STANDARD = NATIONAL_INSURANCE_WEEKLY_PRIMARY_THRESHOLD * 52;
const NATIONAL_INSURANCE_THRESHOLD_UPPER = NATIONAL_INSURANCE_WEEKLY_UPPER_THRESHOLD * 52;
const NATIONAL_INSURANCE_RATE_STANDARD = 0.11;
const NATIONAL_INSURANCE_RATE_HIGHER = 0.01;

const TAX_BAND_LOWER_THRESHOLD_SINGLE = 6500;
const TAX_BAND_LOWER_THRESHOLD_JOINT = TAX_BAND_LOWER_THRESHOLD_SINGLE * 2;
const TAX_BAND_LOWER_RATE = 0.10;
const TAX_BAND_HIGHER_RATE = 0.21;

const PENSION_ANNUAL_ALLOWANCE_CAP = 50000;

export interface TaxForm {
  gross_income: number;
  pension_contribution_percent: number;
  is_couple_tax: boolean;
}

@Component({
  selector: 'mbr-iom-take-home-pay',
  templateUrl: './iom-take-home-pay.component.html',
  styleUrl: './iom-take-home-pay.component.scss',
  imports: [
    FormsModule,
    SunburstChartComponent,
    CurrencyPipe,
    TooltipDirective,
    FormField
  ],
  host: {
    'class': 'block rounded-2xl mx-auto bg-white overflow-hidden max-w-6xl'
  },
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'},
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IOMTakeHomePayComponent {
  private currency_pipe = inject(CurrencyPipe);

  protected form_model = signal<TaxForm>({
    gross_income: 40000,
    pension_contribution_percent: 0,
    is_couple_tax: false
  })

  protected tax_form = form<TaxForm>(this.form_model, (schema_path) => {
    required(schema_path.gross_income);
    required(schema_path.pension_contribution_percent);
    required(schema_path.is_couple_tax);

    min(schema_path.gross_income, 0);
    min(schema_path.pension_contribution_percent, 0);
  })

  protected max_pension_percent = computed<number>(() => {
    const gross = this.tax_form.gross_income().value();
    return Math.min((PENSION_ANNUAL_ALLOWANCE_CAP / gross) * 100, 100);
  });

  private pension_contributions = computed<number>(() => {
    return this.tax_form.gross_income().value() * this.tax_form.pension_contribution_percent().value() / 100;
  })

  protected readonly personal_allowance = computed<number>(() => {
    const gross_income = this.tax_form.gross_income().value();
    const pension_contributions = this.pension_contributions();
    const total_income = gross_income - pension_contributions;
    const is_couple_tax = this.tax_form.is_couple_tax().value();
    const allowance = is_couple_tax ? PERSONAL_ALLOWANCE_JOINT : PERSONAL_ALLOWANCE_SINGLE;
    const threshold = is_couple_tax ? PERSONAL_ALLOWANCE_JOINT_HIGH_EARNER_THRESHOLD : PERSONAL_ALLOWANCE_SINGLE_HIGH_EARNER_THRESHOLD;

    if (total_income <= threshold) {
      return allowance;
    }

    const excess = total_income - threshold;
    return Math.max(0, allowance - Math.floor(excess / 2));
  })

  protected taxable_income = computed<number>(() => {
    return Math.max(this.tax_form.gross_income().value() - this.personal_allowance() - this.pension_contributions(), 0);
  })

  private lower_tax_band_amount = computed<number>(() => {
    const is_couple_tax = this.tax_form.is_couple_tax().value();
    const threshold = is_couple_tax ? TAX_BAND_LOWER_THRESHOLD_JOINT : TAX_BAND_LOWER_THRESHOLD_SINGLE;
    return Math.min(this.taxable_income(), threshold) * TAX_BAND_LOWER_RATE;
  })

  private higher_tax_band_amount = computed<number>(() => {
    const is_couple_tax = this.tax_form.is_couple_tax().value();
    const threshold = is_couple_tax ? TAX_BAND_LOWER_THRESHOLD_JOINT : TAX_BAND_LOWER_THRESHOLD_SINGLE;
    const excess = this.taxable_income() - threshold;
    return excess > 0 ? excess * TAX_BAND_HIGHER_RATE : 0;
  })

  protected income_tax = computed<number>(() => {
    return this.lower_tax_band_amount() + this.higher_tax_band_amount();
  })

  private calculate_standard_ni(amount: number): number {
    const taxable_at_standard = Math.max(
      0,
      Math.min(amount, NATIONAL_INSURANCE_THRESHOLD_UPPER) - NATIONAL_INSURANCE_THRESHOLD_STANDARD
    );
    return taxable_at_standard * NATIONAL_INSURANCE_RATE_STANDARD;
  }

  private calculate_upper_ni(amount: number): number {
    const taxable_at_upper = Math.max(0, amount - NATIONAL_INSURANCE_THRESHOLD_UPPER);
    return taxable_at_upper * NATIONAL_INSURANCE_RATE_HIGHER;
  }

  private national_insurance_standard_band = computed<number>(() => {
    const gross_income = this.tax_form.gross_income().value();
    return this.calculate_standard_ni(gross_income);
  })

  private national_insurance_upper_band = computed<number>(() => {
    const gross_income = this.tax_form.gross_income().value();
    return this.calculate_upper_ni(gross_income);
  })

  protected national_insurance = computed<number>(() => {
    return this.national_insurance_standard_band() + this.national_insurance_upper_band();
  })

  protected take_home_pay = computed<number>(() => {
    return this.tax_form.gross_income().value() - this.pension_contributions() - this.national_insurance() - this.income_tax();
  });

  protected monthly_take_home_pay = computed<number>(() => {
    return this.take_home_pay() / 12;
  });

  protected sunburst_hierarchy = computed<SunburstItem[]>(() => {
    const gross_income = this.tax_form.gross_income().value();
    const personal_allowance = this.personal_allowance();
    const pension_contributions = this.pension_contributions();
    const national_insurance = this.national_insurance();
    const national_insurance_standard_band = this.national_insurance_standard_band();
    const national_insurance_upper_band = this.national_insurance_upper_band();
    const income_tax = this.income_tax();
    const higher_tax_band_amount = this.higher_tax_band_amount();
    const lower_tax_band_amount = this.lower_tax_band_amount();
    const taxable_income = this.taxable_income();

    const national_insurance_node: SunburstItem = {
      label: 'National Insurance',
      tooltip: `National Insurance = ${this.currency_pipe.transform(national_insurance)}`,
      value: national_insurance,
      color: '#60a5fa'
    };

    if (national_insurance_upper_band > 0) {
      national_insurance_node.children = [
        {
          label: 'National Insurance Standard Band',
          tooltip: `Standard NI = ${this.currency_pipe.transform(national_insurance_standard_band)}`,
          value: national_insurance_standard_band,
          color: 'rgb(96 165 250 / 0.6)'
        },
        {
          label: 'National Insurance Upper Band',
          tooltip: `Upper NI = ${this.currency_pipe.transform(national_insurance_upper_band)}`,
          value: national_insurance_upper_band,
          color: 'rgb(96 165 250 / 0.8)'
        }
      ];
    }

    const income_tax_node: SunburstItem = {
      label: 'Income Tax',
      tooltip: `Income Tax = ${this.currency_pipe.transform(income_tax)}`,
      value: income_tax,
      color: 'rgb(249,65,68)'
    };

    if (higher_tax_band_amount > 0) {
      income_tax_node.children = [
        {
          label: 'Higher Band Tax',
          tooltip: `Higher band tax = ${this.currency_pipe.transform(higher_tax_band_amount)}`,
          value: higher_tax_band_amount,
          color: 'rgba(249,66,68,0.7)'
        },
        {
          label: 'Lower Band Tax',
          tooltip: `Lower band tax = ${this.currency_pipe.transform(lower_tax_band_amount)}`,
          value: lower_tax_band_amount,
          color: 'rgba(249,66,68,0.4)'
        }
      ];
    }

    return [
      {
        label: 'Gross Income',
        tooltip: `Total gross annual income = ${this.currency_pipe.transform(gross_income)}`,
        value: gross_income,
        color: '#f8eb74',
        children: [
          {
            label: 'Pension Contributions',
            tooltip: `Voluntary Pension Contributions = ${this.currency_pipe.transform(pension_contributions)}`,
            value: pension_contributions,
            color: '#818cf8'
          },
          national_insurance_node,
          income_tax_node,
          {
            label: 'Take Home Pay',
            tooltip: `Gross Income - Pension - Tax - NI = ${this.currency_pipe.transform(this.take_home_pay())}`,
            value: this.take_home_pay(),
            color: 'rgb(16,185,129)',
            children: [
              {
                label: 'Taxable Income',
                tooltip: `Income after pension and personal allowance = ${this.currency_pipe.transform(taxable_income)}`,
                value: taxable_income,
                color: 'rgba(16,185,129,0.8)'
              },
              {
                label: 'Personal Allowance',
                tooltip: this.tax_form.is_couple_tax().value()
                  ? `Joint personal allowance: ${this.currency_pipe.transform(personal_allowance)}`
                  : `Personal allowance: ${this.currency_pipe.transform(personal_allowance)}`,
                value: personal_allowance,
                color: 'rgba(16,185,129,0.6)'
              }
            ]
          }
        ]
      }
    ];
  })
}
