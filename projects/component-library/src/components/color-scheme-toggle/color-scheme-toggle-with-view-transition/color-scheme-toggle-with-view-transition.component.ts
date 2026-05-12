import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewEncapsulation } from '@angular/core';
import { ColorSchemeToggleComponent } from '../color-scheme-toggle.component';

@Component({
  selector: 'mbr-color-scheme-toggle-with-view-transition',
  imports: [
    ColorSchemeToggleComponent
  ],
  templateUrl: 'color-scheme-toggle-with-view-transition.component.html',
  styleUrl: 'color-scheme-toggle-with-view-transition.component.scss',
  host: {
    'style': 'display: inline-flex'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ColorSchemeToggleWithViewTransitionComponent {

  private element_ref = inject<ElementRef<HTMLElement>>(ElementRef);

  protected trigger_view_transition_when_state_changed(active: boolean) {
    const body = document.body;

    const rect = this.element_ref.nativeElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const transition = document.startViewTransition(() => {
      body.classList.toggle('dark', active);
    });

    transition.ready.then(() => {
      body.style.setProperty('--color-scheme-toggle-mask-x', `${x}px`);
      body.style.setProperty('--color-scheme-toggle-mask-y', `${y}px`);
    })
  }
}
