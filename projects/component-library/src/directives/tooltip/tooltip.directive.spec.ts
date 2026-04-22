import {beforeEach, describe, expect, it} from 'vitest';
import {ChangeDetectionStrategy, Component, DebugElement, signal} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TooltipDirective} from './tooltip.directive';

@Component({
  standalone: true,
  imports: [TooltipDirective],
  template: `
    <button
      [mbrTooltip]="tooltipContent()"
      [mbrTooltipTitle]="tooltipTitle()"
      [mbrTooltipOffsetX]="offsetX()"
      [mbrTooltipOffsetY]="offsetY()"
    >
      Hover me
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestHostComponent {
  tooltipContent = signal('Tooltip content');
  tooltipTitle = signal('Tooltip title');
  offsetX = signal(16);
  offsetY = signal(16);
}

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

  it('should not show tooltip when disabled on focusin', async () => {
    const disabledFixture = TestBed.createComponent(DisabledHostComponent);
    disabledFixture.detectChanges();

    const disabledHost = disabledFixture.debugElement.query(By.css('button')).nativeElement as HTMLElement;
    disabledHost.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    disabledFixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });

  it('should not update position on mousemove if not visible', () => {
    // Dispatch mousemove without mouseenter
    hostElement.dispatchEvent(new MouseEvent('mousemove', {
      clientX: 150,
      clientY: 150,
      bubbles: true
    }));
    fixture.detectChanges();

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

  it('should update position on mousemove', () => {
    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 100,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement;
    const initialLeft = tooltip.style.left;

    hostElement.dispatchEvent(new MouseEvent('mousemove', {
      clientX: 150,
      clientY: 150,
      bubbles: true
    }));
    fixture.detectChanges();

    expect(tooltip.style.left).not.toBe(initialLeft);
    expect(tooltip.style.left).toBe('166px'); // 150 + 16 (default offset)
  });

  it('should show tooltip on focusin and hide on focusout', () => {
    hostElement.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeTruthy();

    hostElement.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });

  it('should respect custom offsets', () => {
    fixture.componentInstance.offsetX.set(20);
    fixture.componentInstance.offsetY.set(30);
    fixture.detectChanges();

    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 100,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement;
    expect(tooltip.style.left).toBe('120px');
    expect(tooltip.style.top).toBe('130px');
  });

  it('should not show title if not provided', () => {
    fixture.componentInstance.tooltipTitle.set('');
    fixture.detectChanges();

    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 100,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement;
    // The title is in a div with font-weight 700. If it's missing, there should be only one div (the content)
    // Actually, looking at code, it creates a title_element ONLY if title is truthy.
    expect(tooltip.children.length).toBe(1);
    expect(tooltip.textContent).not.toContain('Tooltip title');
  });

  it('should not show tooltip if content is empty', () => {
    fixture.componentInstance.tooltipContent.set('');
    fixture.detectChanges();

    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: 100,
      bubbles: true
    }));
    fixture.detectChanges();

    expect(document.body.querySelector('.mbr-tooltip')).toBeFalsy();
  });

  it('should adjust position if tooltip goes out of viewport (right side)', () => {
    const viewportWidth = window.innerWidth;
    // Mock getBoundingClientRect for the tooltip
    // We can't easily mock it on the real element created by the directive
    // but we can try to trigger the logic.
    // Tooltip width is dynamic, let's assume it's around 100px for this test

    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: viewportWidth - 50,
      clientY: 100,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement;
    const rect = tooltip.getBoundingClientRect();
    const left = parseFloat(tooltip.style.left);

    // If it was simple: (viewportWidth - 50) + 16 = viewportWidth - 34.
    // If viewportWidth - 34 + rect.width > viewportWidth - 12 (padding), it should flip.

    // Since we are in a real browser (playwright), it might actually have a width.
    if (left + rect.width > viewportWidth - 12) {
       expect(left).toBeLessThan(viewportWidth - 50);
    }
  });

  it('should adjust position if tooltip goes out of viewport (bottom side)', () => {
    const viewportHeight = window.innerHeight;

    hostElement.dispatchEvent(new MouseEvent('mouseenter', {
      clientX: 100,
      clientY: viewportHeight - 50,
      bubbles: true
    }));
    fixture.detectChanges();

    const tooltip = document.body.querySelector('.mbr-tooltip') as HTMLDivElement;
    const rect = tooltip.getBoundingClientRect();
    const top = parseFloat(tooltip.style.top);

    if (top + rect.height > viewportHeight - 12) {
       expect(top).toBeLessThan(viewportHeight - 50);
    }
  });
});
