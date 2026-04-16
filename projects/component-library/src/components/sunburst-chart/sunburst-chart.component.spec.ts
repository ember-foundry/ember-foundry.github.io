import { ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import { SunburstChartComponent } from './sunburst-chart.component';

describe('SunburstChartComponent', () => {
  let component: SunburstChartComponent;
  let fixture: ComponentFixture<SunburstChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunburstChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunburstChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
