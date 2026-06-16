import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[mbrIcon="GoogleSuperG"]',
  templateUrl: './icon-google-super-g.component.html',
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'inline-flex'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconGoogleSuperGComponent {
}
