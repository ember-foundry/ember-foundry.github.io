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
import {
  BadgePlayfulEarthyComponent
} from '../../../components/badge/badge-playful-earthy/badge-playful-earthy.component';

@Directive({
  selector: '[mbrBadgePlayfulEarthy]'
})
export class BadgePlayfulEarthyDirective implements OnInit, OnDestroy {
  public mbrBadgePlayfulEarthy = input.required<string>();
  public mbrBadgePlayfulEarthyOffset = input.required<string>();
  public mbrBadgePlayfulEarthySize = input.required<string>();

  private readonly element_ref = inject(ElementRef<HTMLElement>);
  private readonly view_container = inject(ViewContainerRef);

  private component_ref!: ComponentRef<BadgePlayfulEarthyComponent>;

  constructor() {
    effect(() => {
      const content = this.mbrBadgePlayfulEarthy();
      if (this.component_ref) {
        this.component_ref.setInput('content', content);
        this.component_ref.setInput('offset', this.mbrBadgePlayfulEarthyOffset())
        this.component_ref.setInput('size', this.mbrBadgePlayfulEarthySize())
        console.log('this.element_ref.nativeElement;', this.element_ref.nativeElement)
      } else {
        console.warn('BadgePlayfulEarthyDirective: component_ref is undefined, cannot set input');
      }
    });
  }

  ngOnInit(): void {
    const host = this.element_ref.nativeElement;

    if (window.getComputedStyle(host).position === 'static') {
      host.style.position = 'relative';
    }

    this.component_ref = this.view_container.createComponent(BadgePlayfulEarthyComponent);

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
