import { ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SunburstChartComponent, SunburstItem} from './sunburst-chart.component';

describe('SunburstChartComponent', () => {
  let component: SunburstChartComponent;
  let fixture: ComponentFixture<SunburstChartComponent>;

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
      imports: [SunburstChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunburstChartComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('hierarchy', hierarchy);
    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the root label and legend entries', () => {
    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Root');
    expect(text).toContain('Child 1');
    expect(text).toContain('Child 2');
  });
});
