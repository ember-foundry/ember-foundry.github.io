import {ChangeDetectionStrategy, Component, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';
import {ColorSchemeToggleComponent} from '../color-scheme-toggle.component';
import {user_prefers} from '../../../helpers/user_prefers';
import {browser_supports} from '../../../helpers/browser_supports';

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
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None
})
export class ColorSchemeToggleWithViewTransitionComponent {

  public active = input<boolean>(false);

  private element_ref = inject<ElementRef<HTMLElement>>(ElementRef);

  protected trigger_view_transition_when_state_changed(is_dark: boolean) {
    if (!browser_supports('startViewTransition') || user_prefers('reduced-motion')) {
      return;
    }

    const root = document.documentElement;

    const rect = this.element_ref.nativeElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const transition_class = is_dark ? 'transition-to-dark' : 'transition-to-light';

    const end_radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty('--color-scheme-circle-size', `${end_radius}px`);
    root.style.setProperty('--color-scheme-toggle-mask-x', `${x}px`);
    root.style.setProperty('--color-scheme-toggle-mask-y', `${y}px`);

    root.classList.add(transition_class);

    const transition = document.startViewTransition(() => {
      root.classList.toggle('dark', is_dark);
    });

    transition.finished.finally(() => {
      root.classList.remove(transition_class);
    });
  }
}
