import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {
  ButtonPlayfulEarthyComponent
} from 'component-library/components/button/button-playful-earthy/button-playful-earthy.component';

@Component({
  selector: 'mbr-panel-playful-earthy',
  templateUrl: './panel-playful-earthy.component.html',
  styleUrl: './panel-playful-earthy.component.scss',
  imports: [
    ButtonPlayfulEarthyComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelPlayfulEarthyComponent {
  public title = input.required<string>();
}
