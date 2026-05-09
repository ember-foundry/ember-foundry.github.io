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
  selector: 'ng-template[mbrMarqueeTemplate]'
})
export class MarqueeItemTemplateDirective {
  templateRef = inject(TemplateRef<unknown>);
}

@Component({
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
    '[style.--flex-direction]': 'flex_direction()',
    '[style.--marquee-animation-direction]': 'marquee_animation_direction()',
    '[style.--marquee-speed]': 'speed()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarqueeComponent extends BaseComponent {

  orientation = input<'horizontal' | 'vertical'>('horizontal')
  direction = input<'normal' | 'reverse'>('normal');
  fade = input<boolean>(true);
  pause_on_hover = input<boolean>(true);
  speed = input<number>(1);

  flex_direction = computed<'row' | 'row-reverse' | 'column' | 'column-reverse'>(() => {
    const orientation = this.orientation();
    const direction = this.direction();
    if (orientation === 'horizontal') {
      if (direction === 'reverse') {
        return 'row-reverse';
      } else {
        return 'row';
      }
    } else {
      if (direction === 'reverse') {
        return 'column-reverse';
      } else {
        return 'column';
      }
    }
  });

  host_css_classes = computed<string>(() => `direction-${this.direction()} orientation-${this.orientation()}`)

  marquee_animation_direction = computed<1 | -1>(() => this.direction() === 'normal' ? -1 : 1);
  template = contentChild.required(MarqueeItemTemplateDirective);

}
