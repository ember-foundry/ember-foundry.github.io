import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  Directive,
  inject,
  input,
  TemplateRef
} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {BaseComponent} from '../_base/base.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[mbrMarqueeTemplate]'
})
export class MarqueeItemTemplateDirective {
  templateRef = inject(TemplateRef<unknown>);
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-marquee',
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss',
  imports: [
    NgTemplateOutlet
  ],
  host: {
    '[class]': 'host_css_classes()',
    '[class.pause-on-hover]': 'pause_on_hover()',
    '[class.fade]': 'fade()',
    '[style.--marquee-speed]': 'speed()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarqueeComponent extends BaseComponent {

  direction = input<'left'|'right'>('left');
  fade = input<boolean>(true);
  pause_on_hover = input<boolean>(true);
  speed = input<number>(1);

  host_css_classes = computed<string>(() => `direction-${this.direction()}`)

  template = contentChild(MarqueeItemTemplateDirective);

}
