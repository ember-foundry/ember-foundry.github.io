import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import type {
  SupportedAlignContent,
  SupportedAlignItems,
  SupportedDirections,
  SupportedJustifyContent
} from '../flexbox.types';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-row',
  templateUrl: './flexbox-row.component.html',
  styleUrl: './flexbox-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--align-content]': 'align_content()',
    '[style.--align-items]': 'align_items()',
    '[style.--direction]': 'direction()',
    '[style.--flex-style]': `inline() ? 'inline-flex' : null`,
    '[style.--gap]': 'gap()',
    '[style.--justify-content]': 'justify_content()'
  }
})
export class FlexboxRowComponent {
  align_content = input<SupportedAlignContent|undefined>(undefined);
  align_items = input<SupportedAlignItems | undefined>(undefined);
  direction = input<SupportedDirections>();
  gap =  input<string|number|undefined>(undefined);
  inline = input<boolean>();
  justify_content = input<SupportedJustifyContent | undefined>(undefined);
}
