import {
  ComponentRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {BadgeComponent} from './badge.component';

@Directive({
  selector: '[mbrCritterBadge]'
})
export class BadgeDirective implements OnInit, OnDestroy {
  public mbrCritterBadge = input.required<string|number>();
  public mbrCritterBadgeOffset = input<string>();
  public mbrCritterBadgeSize = input<string>();

  private readonly element_ref = inject(ElementRef<HTMLElement>);
  private readonly view_container = inject(ViewContainerRef);

  private component_ref!: ComponentRef<BadgeComponent>;

  constructor() {
    effect(() => {
      const content = this.mbrCritterBadge();
      if (this.component_ref) {
        this.component_ref.setInput('content', content);
        this.component_ref.setInput('offset', this.mbrCritterBadgeOffset())
        this.component_ref.setInput('size', this.mbrCritterBadgeSize())
        console.log('this.element_ref.nativeElement;', this.element_ref.nativeElement)
      } else {
        console.warn('BadgeComponent: component_ref is undefined, cannot set input');
      }
    });
  }

  ngOnInit(): void {
    const host = this.element_ref.nativeElement;

    if (window.getComputedStyle(host).position === 'static') {
      host.style.position = 'relative';
    }

    this.component_ref = this.view_container.createComponent(BadgeComponent);

    /**
     * Removing this will insert the badge as a sibling of the directive host element.
     */
    host.appendChild(this.component_ref.location.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.component_ref) {
      this.component_ref.destroy();
    }
  }
}
