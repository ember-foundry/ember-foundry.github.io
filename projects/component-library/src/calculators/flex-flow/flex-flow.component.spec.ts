import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFlowComponent } from './flex-flow.component';

describe('FlexFlowComponent', () => {
  let component: FlexFlowComponent;
  let fixture: ComponentFixture<FlexFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexFlowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
