import {Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, inject, input} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mbrTooltip]'
})
export class TooltipDirective implements OnDestroy {
  private readonly element_ref = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  public tooltip_text = input.required<string>({alias: 'mbrTooltip'});
  public title = input<string>('', {alias: 'mbrTooltipTitle'});
  public disabled = input<boolean>(false, {alias: 'mbrTooltipDisabled'});
  public offset_x = input<number>(16, {alias: 'mbrTooltipOffsetX'});
  public offset_y = input<number>(16, {alias: 'mbrTooltipOffsetY'});

  private tooltip_el: HTMLDivElement | null = null;
  private is_visible = false;

  @HostListener('mouseenter', ['$event'])
  protected on_mouseenter(event: MouseEvent): void {
    if (this.disabled() || !this.tooltip_text()) {
      return;
    }

    this.show(event);
  }

  @HostListener('mousemove', ['$event'])
  protected on_mousemove(event: MouseEvent): void {
    if (!this.is_visible || !this.tooltip_el) {
      return;
    }

    this.position(event.clientX, event.clientY);
  }

  @HostListener('mouseleave')
  protected on_mouseleave(): void {
    this.hide();
  }

  @HostListener('focusin', ['$event'])
  protected on_focusin(event: FocusEvent): void {
    if (this.disabled() || !this.tooltip_text()) {
      return;
    }

    const target = event.target as HTMLElement | null;
    const rect = target?.getBoundingClientRect() ?? this.element_ref.nativeElement.getBoundingClientRect();
    this.showAt(rect.left + rect.width / 2, rect.top);
  }

  @HostListener('focusout')
  protected on_focusout(): void {
    this.hide();
  }

  private show(event: MouseEvent): void {
    this.showAt(event.clientX, event.clientY);
  }

  private showAt(x: number, y: number): void {
    this.destroyTooltip();
    this.createTooltip();

    if (!this.tooltip_el) {
      return;
    }

    this.is_visible = true;
    this.position(x, y);
    this.renderer.setStyle(this.tooltip_el, 'display', 'block');
  }

  private position(client_x: number, client_y: number): void {
    if (!this.tooltip_el) {
      return;
    }

    const padding = 12;
    const viewport_width = window.innerWidth;
    const viewport_height = window.innerHeight;

    const tooltip_offset_x = this.offset_x();
    const tooltip_offset_y = this.offset_y();
    this.renderer.setStyle(this.tooltip_el, 'left', `${client_x + tooltip_offset_x}px`);
    this.renderer.setStyle(this.tooltip_el, 'top', `${client_y + tooltip_offset_y}px`);

    const rect = this.tooltip_el.getBoundingClientRect();

    let left = client_x + tooltip_offset_x;
    let top = client_y + tooltip_offset_y;

    if (left + rect.width > viewport_width - padding) {
      left = client_x - rect.width - tooltip_offset_x;
    }

    if (top + rect.height > viewport_height - padding) {
      top = client_y - rect.height - tooltip_offset_y;
    }

    left = Math.max(padding, left);
    top = Math.max(padding, top);

    this.renderer.setStyle(this.tooltip_el, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltip_el, 'top', `${top}px`);
  }

  private createTooltip(): void {
    const tooltip = this.renderer.createElement('div') as HTMLDivElement;
    this.tooltip_el = tooltip;

    this.renderer.addClass(tooltip, 'mbr-tooltip');
    this.renderer.setStyle(tooltip, 'position', 'fixed');
    this.renderer.setStyle(tooltip, 'pointer-events', 'none');
    this.renderer.setStyle(tooltip, 'z-index', '10000');
    this.renderer.setStyle(tooltip, 'display', 'none');
    this.renderer.setStyle(tooltip, 'max-width', '320px');
    this.renderer.setStyle(tooltip, 'padding', '12px 14px');
    this.renderer.setStyle(tooltip, 'border-radius', '12px');
    this.renderer.setStyle(tooltip, 'background', 'rgba(15, 23, 42, 0.96)');
    this.renderer.setStyle(tooltip, 'color', '#fff');
    this.renderer.setStyle(tooltip, 'box-shadow', '0 10px 20px rgba(0, 0, 0, 0.25)');
    this.renderer.setStyle(tooltip, 'backdrop-filter', 'blur(4px)');
    this.renderer.setStyle(tooltip, 'border', '1px solid rgba(255, 255, 255, 0.08)');
    this.renderer.setStyle(tooltip, 'font-size', '0.875rem');
    this.renderer.setStyle(tooltip, 'line-height', '1.5');

    const title = this.title();
    if (title) {
      const title_element = this.renderer.createElement('div') as HTMLDivElement;
      this.renderer.setStyle(title_element, 'font-weight', '700');
      this.renderer.setStyle(title_element, 'margin-bottom', '4px');
      this.renderer.setStyle(title_element, 'color', '#c7d2fe');
      this.renderer.appendChild(title_element, this.renderer.createText(title));
      this.renderer.appendChild(tooltip, title_element);
    }

    const content = this.renderer.createElement('div') as HTMLDivElement;
    this.renderer.setStyle(content, 'white-space', 'pre-line');
    this.renderer.appendChild(content, this.renderer.createText(this.tooltip_text()));
    this.renderer.appendChild(tooltip, content);

    this.renderer.appendChild(document.body, tooltip);
  }

  private hide(): void {
    this.is_visible = false;
    this.destroyTooltip();
  }

  private destroyTooltip(): void {
    if (!this.tooltip_el) {
      return;
    }

    this.renderer.removeChild(document.body, this.tooltip_el);
    this.tooltip_el = null;
  }

  public ngOnDestroy(): void {
    this.destroyTooltip();
  }
}
