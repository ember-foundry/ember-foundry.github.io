import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from '../flexbox.types';
import {PixelsPipe} from '../../../pipes/pixels/pixels.pipe';

@Component({
  selector: 'lib-row',
  template: '<ng-content></ng-content>',
  styleUrl: 'flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PixelsPipe
  ],
  host: {
    class: 'row',
    '[class]': 'direction_css_class()',
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'gap()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()'
  }
})
export class FlexboxRowComponent {
  px_pipe = inject(PixelsPipe);
  direction = input<SupportedDirections>()
  inline = input<boolean>()
  gap =  input<string|0|undefined,number|string|undefined>(undefined, {transform: this.px_pipe.transform})
  align_items = input<SupportedAlignItems | null>(null)
  justify_content = input<SupportedJustifyContent | null>(null)
  align_content = input<SupportedAlignContent>('stretch')

  direction_css_class = computed<string>(() => `flex-direction-${this.direction()}`);
}
