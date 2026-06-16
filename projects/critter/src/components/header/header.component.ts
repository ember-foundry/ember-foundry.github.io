import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ButtonComponent} from 'critter/components/button/button.component';
import {BadgeDirective} from 'critter/components/badge/badge.directive';
import {RouterLink} from '@angular/router';
import {LucideBell, LucideBox} from '@lucide/angular';

@Component({
  selector: 'mbr-critter-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    class: 'top-0 px-4 pt-4 w-full'
  },
  imports: [
    ButtonComponent,
    BadgeDirective,
    RouterLink,
    LucideBox,
    LucideBell
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
