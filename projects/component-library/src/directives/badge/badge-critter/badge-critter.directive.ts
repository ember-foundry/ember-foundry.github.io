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
import {BadgeCritterComponent} from '../../../components/badge/badge-critter/badge-critter.component';

@Directive({
  selector: '[mbrBadgeCritter]'
})
export class BadgeCritterDirective implements OnInit, OnDestroy {
  public mbrBadgeCritter = input.required<string>();
  public mbrBadgeCritterOffset = input.required<string>();
  public mbrBadgeCritterSize = input.required<string>();

  private readonly element_ref = inject(ElementRef<HTMLElement>);
  private readonly view_container = inject(ViewContainerRef);

  private component_ref!: ComponentRef<BadgeCritterComponent>;

  constructor() {
    effect(() => {
      const content = this.mbrBadgeCritter();
      if (this.component_ref) {
        this.component_ref.setInput('content', content);
        this.component_ref.setInput('offset', this.mbrBadgeCritterOffset())
        this.component_ref.setInput('size', this.mbrBadgeCritterSize())
        console.log('this.element_ref.nativeElement;', this.element_ref.nativeElement)
      } else {
        console.warn('BadgeCritterDirective: component_ref is undefined, cannot set input');
      }
    });
  }

  ngOnInit(): void {
    const host = this.element_ref.nativeElement;

    if (window.getComputedStyle(host).position === 'static') {
      host.style.position = 'relative';
    }

    this.component_ref = this.view_container.createComponent(BadgeCritterComponent);

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
