import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mbr-google-ticket',
  templateUrl: 'google-ticket.component.html',
  styleUrl: 'google-ticket.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleTicketComponent {}
