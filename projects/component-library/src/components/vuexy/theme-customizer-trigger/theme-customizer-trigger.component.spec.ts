import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {ThemeCustomizerTriggerComponent} from './theme-customizer-trigger.component';

describe('ThemeCustomizerTrigger', () => {
  let component: ThemeCustomizerTriggerComponent;
  let fixture: ComponentFixture<ThemeCustomizerTriggerComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCustomizerTriggerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThemeCustomizerTriggerComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async() => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await expect(host).toMatchScreenshot('vuexy-theme-customizer-trigger');
  });
});
