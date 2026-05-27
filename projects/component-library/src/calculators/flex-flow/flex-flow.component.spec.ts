import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {FlexFlowComponent} from './flex-flow.component';

describe('FlexFlowComponent', () => {
  let component: FlexFlowComponent;
  let fixture: ComponentFixture<FlexFlowComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexFlowComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FlexFlowComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
    await expect(host).toMatchScreenshot('flex-flow-shorthand')
  });
});
