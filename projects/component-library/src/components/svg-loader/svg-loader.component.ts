import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ComponentWithVariants} from '../_component_with_variants/component-with-variants.component';
import {SVGLoaderThreeDotsComponent} from './svg-loader-three-dots/svg-loader-three-dots.component';
import {SVGLoaderKFCComponent} from './svg-loader-kfc/svg-loader-kfc.component';
import {SVGLoaderRingResizeComponent} from './svg-loader-ring-resize/svg-loader-ring-resize.component';

@Component({
  selector: 'mbr-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrl: './svg-loader.component.scss',
  imports: [
    SVGLoaderThreeDotsComponent,
    SVGLoaderKFCComponent,
    SVGLoaderRingResizeComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGLoaderComponent extends ComponentWithVariants {
  public variant = input<string>();
}
