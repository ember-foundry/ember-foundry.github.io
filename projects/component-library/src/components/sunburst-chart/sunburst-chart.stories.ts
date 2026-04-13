import {Meta} from '@storybook/angular';
import {SunburstChartComponent} from 'component-library';

const meta: Meta<SunburstChartComponent> = {
  component: SunburstChartComponent,
  tags: ['autodocs', 'sunburst', 'chart', 'svg'],
  argTypes: {
    show_legend: {
      type: 'boolean'
    }
  },
  args: {
    show_legend: true
  }
}

export default meta;

type Story = Meta<SunburstChartComponent>;

export const IOMTakeHomePay: Story = {
  args: {
    total_amount: 40000,
    hierarchy: [
      {
        label: 'Net Income',
        tooltip: `Gross Income - Total Tax - NI = £${32491.72}`,
        value: 32491.72,
        color: 'rgb(16,185,129)',
        children: [
          {
            label: 'Post Tax Income',
            tooltip: `Net Income excluding the Personal Allowance segment = £${15491.72}`,
            value: 15491.72,
            color: 'rgba(16,185,129,0.8)'
          },
          {
            label: 'Personal Allowance',
            tooltip: `Fixed Personal Allowance: £${17000.00} (Untaxed)`,
            value: Math.min(32491.72, 17000.00),
            color: 'rgba(16,185,129,0.6)'
          }
        ]
      },
      {
        label: 'National Insurance',
        tooltip: `(£${40000} - £${3393.28}) × ${11}% Class 1 NI = £${3393.28}`,
        value: 3393.28,
        color: '#60a5fa'
      },
      {
        label: 'Income Tax',
        tooltip: `Lower Band (${10}%) + Higher Band (${21}%) = £${4115.00}`,
        value: 4115.00,
        color: 'rgb(249,65,68)',
        children: [
          {
            label: 'Higher Band Tax',
            tooltip: `(Taxable Income above £${6500}) × ${21}% = £${3465.00.toLocaleString()}`,
            value: 3465.00,
            color: 'rgba(249,66,68,0.7)'
          },
          {
            label: 'Lower Band Tax',
            tooltip: `(Taxable Income up to £${6500}) × ${10}% = £${650.00.toLocaleString()}`,
            value: 650.00,
            color: 'rgba(249,66,68,0.4)'
          }
        ]
      }
    ]
  }
}

export const WithoutLegend: Story = {
  args: {
    ...IOMTakeHomePay.args,
    show_legend: false
  }
}
