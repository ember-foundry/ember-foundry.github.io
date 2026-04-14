import {ChangeDetectionStrategy, Component, computed, DEFAULT_CURRENCY_CODE, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SunburstChartComponent, SunburstItem} from '../sunburst-chart/sunburst-chart.component';
import {CurrencyPipe} from '@angular/common';

const PERSONAL_ALLOWANCE = 17000;
const NATIONAL_INSURANCE_PER_WEEK = 176;
const NATIONAL_INSURANCE_THRESHOLD = NATIONAL_INSURANCE_PER_WEEK * 52;
const NATIONAL_INSURANCE_RATE = 0.11;
const TAX_BAND_LOWER_THRESHOLD = 6500;
const TAX_BAND_LOWER_RATE = 0.10;
const TAX_BAND_HIGHER_RATE = 0.21;

@Component({
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

  public gross_income = signal<number>(40000.00);

  private taxable_income = computed<number>(() => {
    return Math.max(this.gross_income() - PERSONAL_ALLOWANCE, 0);
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

  private taxable_income_for_national_insurance = computed<number>(() => {
    return Math.max(this.gross_income() - NATIONAL_INSURANCE_THRESHOLD, 0);
  })

  private national_insurance = computed<number>(() => {
    return this.taxable_income_for_national_insurance() * NATIONAL_INSURANCE_RATE
  })

  private net_income = computed<number>(() => {
    return this.gross_income() - this.national_insurance() - this.income_tax();
  });

  private post_tax_income = computed<number>(() => {
    return Math.max(0, this.net_income() - PERSONAL_ALLOWANCE);
  });

  protected monthly_net_income = computed(() => {
    return this.net_income() / 12;
  });

  /**
   * Palette https://coolors.co/palette/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1
   */
  protected sunburst_hierarchy = computed<SunburstItem[]>(() => {
    return [
      {
        label: 'Gross Income',
        tooltip: `Total gross annual income = ${this.currency_pipe.transform(this.gross_income())}`,
        value: this.gross_income(),
        color: '#f8eb74',
        children: [
          {
            label: 'National Insurance',
            tooltip: `(${this.currency_pipe.transform(this.gross_income())} - ${this.currency_pipe.transform(NATIONAL_INSURANCE_THRESHOLD)}) × ${NATIONAL_INSURANCE_RATE * 100}% Class 1 NI = ${this.currency_pipe.transform(this.national_insurance())}`,
            value: this.national_insurance(),
            color: '#60a5fa'
          },
          {
            label: 'Income Tax',
            tooltip: `Lower Band (${TAX_BAND_LOWER_RATE * 100}%) + Higher Band (${TAX_BAND_HIGHER_RATE * 100}%) = ${this.currency_pipe.transform(this.income_tax())}`,
            value: this.income_tax(),
            color: 'rgb(249,65,68)',
            children: [
              {
                label: 'Higher Band Tax',
                tooltip: `(Taxable Income above ${this.currency_pipe.transform(TAX_BAND_LOWER_THRESHOLD)}) × ${TAX_BAND_HIGHER_RATE * 100}% = ${this.currency_pipe.transform(this.higher_tax_band_amount())}`,
                value: this.higher_tax_band_amount(),
                color: 'rgba(249,66,68,0.7)'
              },
              {
                label: 'Lower Band Tax',
                tooltip: `(Taxable Income up to ${this.currency_pipe.transform(TAX_BAND_LOWER_THRESHOLD)}) × ${TAX_BAND_LOWER_RATE * 100}% = ${this.currency_pipe.transform(this.lower_tax_band_amount())}`,
                value: this.lower_tax_band_amount(),
                color: 'rgba(249,66,68,0.4)'
              }
            ]
          },
          {
            label: 'Net Income',
            tooltip: `Gross Income - Total Tax - NI = ${this.currency_pipe.transform(this.net_income())}`,
            value: this.net_income(),
            color: 'rgb(16,185,129)',
            children: [
              {
                label: 'Post Tax Income',
                tooltip: `Net Income excluding the Personal Allowance segment = ${this.currency_pipe.transform(this.post_tax_income())}`,
                value: this.post_tax_income(),
                color: 'rgba(16,185,129,0.8)'
              },
              {
                label: 'Personal Allowance',
                tooltip: `Fixed Personal Allowance: ${this.currency_pipe.transform(PERSONAL_ALLOWANCE)} (Untaxed)`,
                value: Math.min(this.net_income(), PERSONAL_ALLOWANCE),
                color: 'rgba(16,185,129,0.6)'
              }
            ]
          }
        ]
      }
    ]
  })
}
