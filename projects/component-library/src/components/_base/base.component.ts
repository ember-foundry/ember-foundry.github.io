import {ChangeDetectionStrategy, Component, computed, Signal} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-base',
  template: '',
  host: {
    '[class]': 'component_to_css_class()'
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

  protected computed_host_css_classes_from<K extends keyof this>(...keys: K[]) {
    return computed<string>(() => {
      return keys
        .map(key => {
          const css_prefix = String(key);
          const source = this[key] as unknown as Signal<string>;
          return `${css_prefix}-${source()}`;
        })
        .join(' ');
    });
  }
}
