import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'lib-base',
  template: '',
  host: {
    '[class]' : 'component_to_css_class()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {

  protected readonly component_to_css_class = () => {

    return this.constructor.name
      .replace(/\d+$/, '') // Strip trailing digits (e.g., Component2 -> Component)
      .replace(/Component$/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }
}
