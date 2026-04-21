import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {SVGCheckmarkOutlineComponent} from './svg-checkmark-outline.component';

describe('CheckmarkOutlineComponent', () => {
  let component: SVGCheckmarkOutlineComponent;
  let fixture: ComponentFixture<SVGCheckmarkOutlineComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGCheckmarkOutlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SVGCheckmarkOutlineComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async() => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await expect(host).toMatchScreenshot('vuexy-theme-customizer-trigger');
  });
});
