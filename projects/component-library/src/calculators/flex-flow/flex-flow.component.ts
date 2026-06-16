import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgTemplateOutlet} from '@angular/common';
import {TooltipDirective} from '../../directives/tooltip/tooltip.directive';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';
import {LucideBan, LucideCircleQuestionMark} from '@lucide/angular';

@Component({
  selector: 'mbr-flex-flow',
  imports: [FormsModule, NgTemplateOutlet, TooltipDirective, CdkCopyToClipboard, LucideCircleQuestionMark, LucideBan],
  templateUrl: './flex-flow.component.html',
  styleUrl: './flex-flow.component.scss',
  host: {
    '[class]': 'result()'
  },
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
