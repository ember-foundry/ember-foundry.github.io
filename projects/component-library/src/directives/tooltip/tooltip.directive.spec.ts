import {beforeEach, describe, expect, it} from 'vitest';
import {ChangeDetectionStrategy, Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TooltipDirective} from './tooltip.directive';

@Component({
  standalone: true,
  imports: [TooltipDirective],
  template: `
    <button
      mbrTooltip="Tooltip content"
      mbrTooltipTitle="Tooltip title"
    >
      Hover me
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [TooltipDirective],
  template: `
    <button
      mbrTooltip="Tooltip content"
      [mbrTooltipDisabled]="true"
    >
      Hover me
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class DisabledHostComponent {}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostElement: HTMLElement;
  let directiveDebugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, DisabledHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    directiveDebugElement = fixture.debugElement.query(By.directive(TooltipDirective));
    hostElement = directiveDebugElement.nativeElement as HTMLElement;
  });

  it('should create the host component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should create and append a tooltip on mouseenter', () => {
    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 150,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement | null;

    expect(tooltip).toBeTruthy();
    expect(tooltip?.textContent).toContain('Tooltip title');
    expect(tooltip?.textContent).toContain('Tooltip content');
    expect(tooltip?.style.display).toBe('block');
  });

  it('should remove the tooltip on mouseleave', () => {
    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 150,
      bubbles: true
    }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeTruthy();

    hostElement.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });

  it('should not show tooltip when disabled', async () => {
    const disabledFixture = TestBed.createComponent(DisabledHostComponent);
    disabledFixture.detectChanges();

    const disabledHost = disabledFixture.debugElement.query(By.css('button')).nativeElement as HTMLElement;
    disabledHost.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 150,
      bubbles: true
    }));
    disabledFixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });

  it('should clean up the tooltip on destroy', () => {
    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 150,
      bubbles: true
    }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeTruthy();

    fixture.destroy();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });
});
