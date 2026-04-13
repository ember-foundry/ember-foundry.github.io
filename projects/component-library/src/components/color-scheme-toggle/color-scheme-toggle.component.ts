import {ChangeDetectionStrategy, Component, model, output} from '@angular/core';
import {BaseComponent} from '../_base/base.component';

// @Component({
//   selector: 'mbr-color-scheme-toggle-mask',
//   template: `
//     <svg aria-hidden="true" viewBox="0 0 0 0" style="position: fixed; z-index: -1">
//       <defs>
//         <mask id="moon-mask">
//           <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
//           <circle cx="24" cy="10" r="6" fill="black"></circle>
//         </mask>
//       </defs>
//     </svg>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// class ColorSchemeToggleMaskComponent {}

@Component({
  selector: 'mbr-color-scheme-toggle',
  templateUrl: './color-scheme-toggle.component.html',
  styleUrl: './color-scheme-toggle.component.scss',
  host: {
    '[class]': 'scheme()',
    '(click)': 'toggle()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  // imports: [
  //   ColorSchemeToggleMaskComponent
  // ]
})
export class ColorSchemeToggleComponent extends BaseComponent {
  public scheme = model<'light' | 'dark'>('light')
  public color_scheme_change = output<'light' | 'dark'>();

  protected toggle = () => {
    this.scheme.update(s => s === 'light' ? 'dark' : 'light')
    this.color_scheme_change.emit(this.scheme());
  }
}
