import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from '../flexbox.types';
import {PixelsPipe} from '../../../pipes/pixels/pixels.pipe';
import {BaseComponent} from '../../_base/base.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-row',
  templateUrl: 'flexbox-row.component.html',
  styleUrl: 'flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PixelsPipe
  ],
  host: {
    '[style.--direction]': 'direction()',
    '[style.--gap]': 'gap()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--align-items]': 'align_items()',
    '[style.--justify-content]': 'justify_content()',
    '[style.--align-content]': 'align_content()'
  }
})
export class FlexboxRowComponent extends BaseComponent {
  px_pipe = inject(PixelsPipe);
  direction = input<SupportedDirections>()
  inline = input<boolean>()
  gap =  input<string|0|undefined,number|string|undefined>(undefined, {transform: this.px_pipe.transform})
  align_items = input<SupportedAlignItems | null>(null)
  justify_content = input<SupportedJustifyContent | null>(null)
  align_content = input<SupportedAlignContent>('stretch');
}
