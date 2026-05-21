import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'mbr-flex-flow',
  imports: [FormsModule],
  templateUrl: './flex-flow.component.html',
  styleUrl: './flex-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexFlowComponent {
  protected flex_direction = signal<string>('row');
  protected flex_wrap = signal<string>('wrap');

  protected result = computed<string>(() => {
    const dir = this.flex_direction();
    const wrap = this.flex_wrap();

    return [dir, wrap].filter(i => !!i).join(' ') || 'none';
  });
}
