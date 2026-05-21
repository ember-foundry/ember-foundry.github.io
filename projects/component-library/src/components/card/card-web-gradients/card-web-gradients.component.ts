import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'mbr-card-web-gradients',
  templateUrl: './card-web-gradients.component.html',
  styleUrl: './card-web-gradients.component.scss',
  imports: [
    ClipboardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWebGradientsComponent {
  public title = input.required<string>();
  public styles = input.required<string>();
  public description = input<string>();
}
