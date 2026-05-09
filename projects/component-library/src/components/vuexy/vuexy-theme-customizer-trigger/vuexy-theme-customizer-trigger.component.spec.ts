import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {VuexyThemeCustomizerTriggerComponent} from './vuexy-theme-customizer-trigger.component';
import {pause} from '../../../helpers/pause';

describe('ThemeCustomizerTrigger', () => {
  let component: VuexyThemeCustomizerTriggerComponent;
  let fixture: ComponentFixture<VuexyThemeCustomizerTriggerComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VuexyThemeCustomizerTriggerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VuexyThemeCustomizerTriggerComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async() => {
    await pause(1.5)
    await expect(host).toMatchScreenshot('vuexy-theme-customizer-trigger');
  });
});
