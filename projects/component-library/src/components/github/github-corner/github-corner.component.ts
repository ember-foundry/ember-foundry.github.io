import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'mbr-github-corner',
  templateUrl: './github-corner.component.html',
  styleUrl: './github-corner.component.scss',
  host: {
    '[class]': 'position()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubCornerComponent {
  public username = input.required<string>();
  public position = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
}
