import {Directive, input} from '@angular/core';

@Directive({
  selector: '[mbrGridBackground]',
  host: {
    '[style.--grid-color-x]': 'mbrGridBackgroundColorX()',
    '[style.--grid-color-y]': 'mbrGridBackgroundColorY()',
    '[style.--grid-line-thickness]': 'mbrGridBackgroundLineThickness()',
    '[style.--grid-size]': 'mbrGridBackgroundSize()',
    '[style.background-repeat]': 'mbrGridBackgroundRepeat()',
    '[style.background-image]': 'background_image()',
    'style.background-size': 'var(--grid-size) 100%, 100% var(--grid-size)'
  }
})
export class GridBackgroundDirective {
  public mbrGridBackgroundSize = input<string>('30px');
  public mbrGridBackgroundLineThickness = input<string>('1px');
  public mbrGridBackgroundColorX = input<string>('currentColor');
  public mbrGridBackgroundColorY = input<string>('currentColor');
  public mbrGridBackgroundRepeat = input<'repeat' | 'repeat-x' | 'repeat-y'>('repeat');

  protected background_image(): string {
    return 'linear-gradient(90deg,transparent 0,transparent calc(var(--grid-size) - var(--grid-line-thickness)),var(--grid-color-y) calc(var(--grid-size) - var(--grid-line-thickness)),var(--grid-color-y) var(--grid-size)),linear-gradient(180deg,transparent 0,transparent calc(var(--grid-size) - var(--grid-line-thickness)),var(--grid-color-x) calc(var(--grid-size) - var(--grid-line-thickness)),var(--grid-color-x) var(--grid-size))';
  }
}
