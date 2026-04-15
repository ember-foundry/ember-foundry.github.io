import {ChangeDetectionStrategy, Component, computed, DEFAULT_CURRENCY_CODE, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SunburstChartComponent, SunburstItem} from '../sunburst-chart/sunburst-chart.component';
import {CurrencyPipe} from '@angular/common';

const PERSONAL_ALLOWANCE_STANDARD = 17000;
const PERSONAL_ALLOWANCE_HIGH_EARNER_THRESHOLD = 100000;

const NATIONAL_INSURANCE_PER_WEEK = 176;
const NATIONAL_INSURANCE_THRESHOLD_STANDARD = NATIONAL_INSURANCE_PER_WEEK * 52;
const NATIONAL_INSURANCE_RATE_STANDARD = 0.11;
/**
 * Anyone who earns over 56.264 - 1082 * 52
 * gets charged an additional 1%
 */
const NATIONAL_INSURANCE_THRESHOLD_UPPER = 1082 * 52;
const NATIONAL_INSURANCE_RATE_HIGHER = 0.01;
const TAX_BAND_LOWER_THRESHOLD = 6500;
const TAX_BAND_LOWER_RATE = 0.10;
const TAX_BAND_HIGHER_RATE = 0.21;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-iom-take-home-pay',
  templateUrl: './iom-take-home-pay.component.html',
  styleUrl: './iom-take-home-pay.component.scss',
  imports: [
    FormsModule,
    SunburstChartComponent,
    CurrencyPipe
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP' },
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IOMTakeHomePayComponent {
  private currency_pipe = inject(CurrencyPipe);

  protected gross_income = signal<number>(40000.00);
  protected pension_contributions_percent = signal<number>(0);

  protected pension_contributions = computed<number>(() => {
    return this.gross_income() * this.pension_contributions_percent() / 100;
  })

  private personal_allowance = computed<number>(() => {
      const total_income = this.gross_income() - this.pension_contributions();

      if (total_income <= PERSONAL_ALLOWANCE_HIGH_EARNER_THRESHOLD) {
        return PERSONAL_ALLOWANCE_STANDARD;
      }

      const reduction = (total_income - PERSONAL_ALLOWANCE_HIGH_EARNER_THRESHOLD) / 2;
      const taperedAllowance = PERSONAL_ALLOWANCE_STANDARD - reduction;

      return Math.max(0, taperedAllowance);
  })

  private effective_personal_allowance = computed<number>(() => {
    return Math.min(this.take_home_pay(), this.personal_allowance());
  });

  private taxable_income = computed<number>(() => {
    return Math.max(this.gross_income() - this.personal_allowance() - this.pension_contributions(), 0);
  })

  private lower_tax_band_amount = computed<number>(() => {
    return Math.min(this.taxable_income(), TAX_BAND_LOWER_THRESHOLD) * TAX_BAND_LOWER_RATE;
  })

  private higher_tax_band_amount = computed<number>(() => {
    return Math.max(0, this.taxable_income() - TAX_BAND_LOWER_THRESHOLD) * TAX_BAND_HIGHER_RATE;
  })

  private income_tax = computed<number>(() => {
    return this.lower_tax_band_amount() + this.higher_tax_band_amount();
  })

  private national_insurance_standard_band = computed<number>(() => {
    const gross_income = this.gross_income();
    if (gross_income <= NATIONAL_INSURANCE_THRESHOLD_STANDARD){
      return 0;
    }
    const lower_band = Math.min(gross_income, NATIONAL_INSURANCE_THRESHOLD_UPPER) - NATIONAL_INSURANCE_THRESHOLD_STANDARD;
    return lower_band * NATIONAL_INSURANCE_RATE_STANDARD;
  })

  private national_insurance_upper_band = computed<number>(() => {
    const gross_income = this.gross_income();
    const higher_band = Math.max(0, gross_income - NATIONAL_INSURANCE_THRESHOLD_UPPER);
    return higher_band * NATIONAL_INSURANCE_RATE_HIGHER;
  })

  private national_insurance = computed<number>(() => {
    return this.national_insurance_standard_band() + this.national_insurance_upper_band();
  })

  private take_home_pay = computed<number>(() => {
    return this.gross_income() - this.pension_contributions() - this.national_insurance() - this.income_tax();
  });

  private post_tax_income = computed<number>(() => {
    return Math.max(0, this.take_home_pay() - this.personal_allowance());
  });

  protected monthly_take_home_pay = computed<number>(() => {
    return this.take_home_pay() / 12;
  });

  /**
   * Palette https://coolors.co/palette/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1
   */
  protected sunburst_hierarchy = computed<SunburstItem[]>(() => {
    const gross_income = this.gross_income();
    const effective_personal_allowance = this.effective_personal_allowance();
    const pension_contributions = this.pension_contributions();
    const national_insurance = this.national_insurance();
    const national_insurance_standard_band = this.national_insurance_standard_band();
    const national_insurance_upper_band = this.national_insurance_upper_band();
    const income_tax = this.income_tax()
    const higher_tax_band_amount = this.higher_tax_band_amount();
    const lower_tax_band_amount = this.lower_tax_band_amount();

    const national_insurance_node: SunburstItem = {
      label: 'National Insurance',
      tooltip: `National Insurance  = National Insurance Lower Band + National Insurance Higher Band = ${this.currency_pipe.transform(national_insurance)}`,
      value: national_insurance,
      color: '#60a5fa'
    };

    if(national_insurance_upper_band > 0){
      national_insurance_node.children = [
        {
          label: 'National Insurance Standard Band',
          tooltip: `(${this.currency_pipe.transform(gross_income)} - ${this.currency_pipe.transform(NATIONAL_INSURANCE_THRESHOLD_STANDARD)}) × ${NATIONAL_INSURANCE_RATE_STANDARD * 100}% Class 1 NI = ${this.currency_pipe.transform(national_insurance)}`,
          value: national_insurance_standard_band,
          color: 'rgb(96 165 250 / 0.6)'
        },
        {
          label: 'National Insurance Upper Band',
          tooltip: `Income over ${this.currency_pipe.transform(NATIONAL_INSURANCE_THRESHOLD_UPPER)}) × ${NATIONAL_INSURANCE_RATE_HIGHER * 100}% Class 1 NI = ${this.currency_pipe.transform(national_insurance_upper_band)}`,
          value: national_insurance_upper_band,
          color: 'rgb(96 165 250 / 0.8)'
        }
      ];
    }

    const income_tax_node: SunburstItem = {
      label: 'Income Tax',
      tooltip: `Lower Band (${TAX_BAND_LOWER_RATE * 100}%) + Higher Band (${TAX_BAND_HIGHER_RATE * 100}%) = ${this.currency_pipe.transform(income_tax)}`,
      value: income_tax,
      color: 'rgb(249,65,68)'
    }

    if(higher_tax_band_amount > 0){
      income_tax_node.children = [
        {
          label: 'Higher Band Tax',
          tooltip: `(Taxable Income above ${this.currency_pipe.transform(TAX_BAND_LOWER_THRESHOLD)}) × ${TAX_BAND_HIGHER_RATE * 100}% = ${this.currency_pipe.transform(higher_tax_band_amount)}`,
          value: higher_tax_band_amount,
          color: 'rgba(249,66,68,0.7)'
        },
        {
          label: 'Lower Band Tax',
          tooltip: `(Taxable Income up to ${this.currency_pipe.transform(TAX_BAND_LOWER_THRESHOLD)}) × ${TAX_BAND_LOWER_RATE * 100}% = ${this.currency_pipe.transform(lower_tax_band_amount)}`,
          value: lower_tax_band_amount,
          color: 'rgba(249,66,68,0.4)'
        }
      ]
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
            tooltip: `Gross Income - Total Tax - NI = ${this.currency_pipe.transform(this.take_home_pay())}`,
            value: this.take_home_pay(),
            color: 'rgb(16,185,129)',
            children: [
              {
                label: 'Post Tax Income',
                tooltip: `Take Home Pay excluding the Personal Allowance segment = ${this.currency_pipe.transform(this.post_tax_income())}`,
                value: this.post_tax_income(),
                color: 'rgba(16,185,129,0.8)'
              },
              {
                label: 'Personal Allowance',
                tooltip: (this.gross_income() - this.pension_contributions()) > PERSONAL_ALLOWANCE_HIGH_EARNER_THRESHOLD
                  ? `Personal Allowance Tapered: ${this.currency_pipe.transform(effective_personal_allowance)}`
                  : `Personal Allowance Standard: ${this.currency_pipe.transform(effective_personal_allowance)}`,
                value: effective_personal_allowance,
                color: 'rgba(16,185,129,0.6)'
              }
            ]
          }
        ]
      }
    ]
  })
}
