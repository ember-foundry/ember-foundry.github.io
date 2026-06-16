import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {LucideLightbulb} from '@lucide/angular';

@Component({
  selector: 'mbr-post-it',
  templateUrl: './post-it.component.html',
  styleUrl: './post-it.component.scss',
  host: {
    '[style.--color-chosen]': `!color() ? undefined : 'var(--color-' + color() + ')'`
  },
  imports: [
    LucideLightbulb
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItComponent {
  public color = input<string>('')
  public title = input<string>('It\'s all confidential');
  public description = input<string>('Your data is private and will only be used for profile creation and job matching.');
}
