import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunburstChartLegendComponent } from './sunburst-chart-legend.component';

describe('SunburstChartLegendComponent', () => {
  let component: SunburstChartLegendComponent;
  let fixture: ComponentFixture<SunburstChartLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunburstChartLegendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunburstChartLegendComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
