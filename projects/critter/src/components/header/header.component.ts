import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ButtonComponent} from 'critter/components/button/button.component';
import {BadgeDirective} from 'critter/components/badge/badge.directive';
import {RouterLink} from '@angular/router';
import {LucideBox} from '@lucide/angular';

@Component({
  selector: 'mbr-critter-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    class: 'flex items-center w-full top-0 p-4'
  },
  imports: [
    ButtonComponent,
    BadgeDirective,
    RouterLink,
    LucideBox
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
