import {ChangeDetectionStrategy, Component, computed, input, output, signal} from '@angular/core';
import {SVGCheckmarkCircleFilledComponent} from '../svg-checkmark-circle-filled/svg-checkmark-circle-filled.component';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'mbr-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss',
  host: {
    '[class.dragging]': 'dragging()',
    '[class.invalid]': 'dragging() && !valid()',
    '[class.valid]': 'dragging() && valid()',
    '[class.submitted]': 'submitted()'
  },
  imports: [
    SVGCheckmarkCircleFilledComponent,
    NgTemplateOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropComponent {

  public accept = input<string|undefined>();

  public files_requested = output<File[]>();

  protected dragging = signal<boolean>(false);
  protected valid = signal<boolean>(false);
  protected file_count = signal<number>(0);
  protected submitted = signal<boolean>(false);

  protected acceptable_types_text = computed<string>(() => {
    const pattern = this.accept();
    if (!pattern) return 'Any file format';

    return pattern
      .split(',')
      .map(rule => {
        const clean_rule = rule.trim();
        if (clean_rule === 'image/*') return 'Images';
        if (clean_rule === 'video/*') return 'Videos';
        if (clean_rule === 'audio/*') return 'Audio tracks';
        if (clean_rule.startsWith('.')) return clean_rule.toUpperCase();
        return clean_rule;
      })
      .join(', ');
  });

  protected on_drag_start(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer!.effectAllowed = 'move';
  }

  protected on_drag_enter(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.submitted.set(false);

    const items = event.dataTransfer?.items;
    let has_files = false;
    let all_files_valid = true;
    let count = 0;

    if (items) {
      const itemList = Array.from(items);
      has_files = itemList.some(item => item.kind === 'file');

      if (has_files) {
        for (const item of itemList) {
          if (item.kind === 'file') {
            count++;
            // Validate MIME types exposed during live hover tracking
            if (item.type && !this.is_mime_accepted(item.type)) {
              all_files_valid = false;
            }
          }
        }
      }
    }

    this.dragging.set(true);
    this.valid.set(has_files && all_files_valid);
    this.file_count.set(has_files ? count : 0);
  }

  protected on_drag_over(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  protected on_drag_leave(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.reset();
  }

  protected on_drop(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();

    const raw_files = event.dataTransfer?.files;
    if (raw_files && raw_files.length > 0) {
      const file_list = Array.from(raw_files);
      const all_files_valid = file_list.every(file => this.is_file_accepted(file));

      if (all_files_valid) {
        this.handle_files(file_list);
      } else {
        this.dragging.set(true);
        this.valid.set(false);
      }
    } else {
      this.reset();
    }
  }

  protected on_file_selected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return
    }

    this.dragging.set(true);

    const file_list = Array.from(input.files);
    const all_files_valid = file_list.every(file => this.is_file_accepted(file));

    if (all_files_valid) {
      this.valid.set(true);
      this.file_count.set(file_list.length);
      this.handle_files(file_list);
    } else {
      this.file_count.set(0);
      this.valid.set(false);
    }
  }

  protected reset(): void {
    this.dragging.set(false);
    this.valid.set(false);
    this.file_count.set(0);
    this.submitted.set(false);
  }

  /**
   * Evaluates exposed item MIME patterns while a drag event is actively over target
   */
  private is_mime_accepted(mimeType: string): boolean {
    const acceptAttr = this.accept();
    if (!acceptAttr) return true;

    const rules = acceptAttr.split(',').map(r => r.trim().toLowerCase());
    return rules.some(rule => {
      if (rule.endsWith('/*')) {
        return mimeType.startsWith(rule.slice(0, -1));
      } else if (rule.startsWith('.')) {
        // Backup map for common extensions since file names are hidden on hover
        const ext = rule.substring(1);
        const commonMimeMap: Record<string, string[]> = {
          'pdf': ['application/pdf'],
          'jpg': ['image/jpeg', 'image/jpg'],
          'jpeg': ['image/jpeg', 'image/jpg'],
          'png': ['image/png'],
          'gif': ['image/gif'],
          'svg': ['image/svg+xml'],
          'json': ['application/json'],
          'csv': ['text/csv', 'application/csv']
        };
        return commonMimeMap[ext]?.includes(mimeType) || false;
      }
      return mimeType === rule;
    });
  }

  /**
   * Comprehensive validation combining properties accessible once chosen/dropped
   */
  private is_file_accepted(file: File): boolean {
    const acceptAttr = this.accept();
    if (!acceptAttr) return true;

    const rules = acceptAttr.split(',').map(r => r.trim().toLowerCase());
    const fileName = file.name.toLowerCase();
    const mimeType = file.type.toLowerCase();

    return rules.some(rule => {
      if (rule.endsWith('/*')) {
        return mimeType.startsWith(rule.slice(0, -1));
      } else if (rule.startsWith('.')) {
        return fileName.endsWith(rule);
      }
      return mimeType === rule;
    });
  }

  private handle_files(files: File[]): void {
    this.files_requested.emit(files);
    this.submitted.set(true);
    setTimeout(() => this.reset(), 3000);
  }
}
