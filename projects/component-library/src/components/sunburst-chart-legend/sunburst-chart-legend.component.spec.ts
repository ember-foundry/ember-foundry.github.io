import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SunburstChartLegendComponent} from './sunburst-chart-legend.component';
import {SunburstItem} from '../sunburst-chart/sunburst-chart.component';

describe('SunburstChartLegendComponent', () => {
  let component: SunburstChartLegendComponent;
  let fixture: ComponentFixture<SunburstChartLegendComponent>;

  const hierarchy: SunburstItem[] = [
    {
      label: 'Root',
      tooltip: 'Root tooltip',
      value: 100,
      color: '#f8eb74',
      children: [
        {
          label: 'Child 1',
          tooltip: 'Child 1 tooltip',
          value: 60,
          color: '#60a5fa'
        },
        {
          label: 'Child 2',
          tooltip: 'Child 2 tooltip',
          value: 40,
          color: '#34d399'
        }
      ]
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunburstChartLegendComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SunburstChartLegendComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('hierarchy', hierarchy);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
