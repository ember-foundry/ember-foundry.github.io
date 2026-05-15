import {ChangeDetectionStrategy, Component, ElementRef, viewChild} from '@angular/core';

@Component({
  selector: 'mbr-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss',
  host: {
    '(click)': 'input_element().nativeElement.click()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropComponent {
  protected input_element = viewChild.required<ElementRef<HTMLInputElement>>('file_input');
}
