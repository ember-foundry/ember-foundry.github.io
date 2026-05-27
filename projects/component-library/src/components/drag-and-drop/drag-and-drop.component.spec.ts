import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, beforeEach, it, expect, vi} from 'vitest';
import {DragAndDropComponent} from './drag-and-drop.component';
import {ComponentRef} from '@angular/core';
import {pause} from '../../helpers/pause';

interface MockDragEvent {
  stopPropagation: () => void,
  preventDefault: () => void,
  dataTransfer?: {
    effectAllowed: string,
    items: {
      kind: string,
      type: string
    }[],
    files: unknown[]
  }
}

interface MockFileSelectionEvent {
  target: {
    files: File[]
  }
}

describe('DragAndDropComponent', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;
  let component_ref: ComponentRef<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    component_ref = fixture.componentRef;
    await fixture.whenStable();
  });

  // afterEach(() => {
  //   vi.restoreAllMocks();
  //   vi.useRealTimers();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Any file format" when accept is undefined', () => {
    component_ref.setInput('accept', undefined);
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('Any file format');
  });

  it('should format the image MIME type correctly', () => {
    component_ref.setInput('accept', 'image/*');
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('Images');
  });

  it('should format the video MIME type correctly', () => {
    component_ref.setInput('accept', 'video/*');
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('Videos');
  });

  it('should format the audio MIME type correctly', () => {
    component_ref.setInput('accept', 'audio/*');
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('Audio tracks');
  });

  it('should format common MIME types correctly', () => {
    component_ref.setInput('accept', 'image/*,video/*,audio/*');
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('Images, Videos, Audio tracks');
  });

  it('should format extensions and unknown types correctly', () => {
    component_ref.setInput('accept', '.pdf, application/json, .txt');
    fixture.detectChanges();
    expect(component['acceptable_types_text']()).toBe('.PDF, application/json, .TXT');
  });
});

describe('drag events', () => {
  let mock_event: MockDragEvent;
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;
  let component_ref: ComponentRef<DragAndDropComponent>;

  beforeEach(async () => {
    mock_event = {
      stopPropagation: vi.fn(),
      preventDefault: vi.fn(),
      dataTransfer: {
        effectAllowed: '',
        items: [],
        files: []
      }
    };

    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    component_ref = fixture.componentRef;
    await fixture.whenStable();
  });

  it('on_drag_start should set effectAllowed', () => {
    component['on_drag_start'](mock_event as unknown as DragEvent);
    expect(mock_event.stopPropagation).toHaveBeenCalled();
    expect(mock_event.preventDefault).toHaveBeenCalled();
    expect(mock_event.dataTransfer!.effectAllowed).toBe('move');
  });

  it('on_drag_enter should handle valid files', () => {
    mock_event.dataTransfer!.items = [
      {kind: 'file', type: 'image/png'}
    ];

    component['on_drag_enter'](mock_event as unknown as DragEvent);

    expect(component['dragging']()).toBe(true);
    expect(component['valid']()).toBe(true);
    expect(component['file_count']()).toBe(1);
  });

  it('on_drag_enter should handle invalid files', () => {
    component_ref.setInput('accept', 'image/*');
    fixture.detectChanges();

    mock_event.dataTransfer!.items = [
      {kind: 'file', type: 'text/plain'}
    ];

    component['on_drag_enter'](mock_event as unknown as DragEvent);

    expect(component['valid']()).toBe(false);
  });

  it('on_drag_enter should handle non-file items', () => {
    mock_event.dataTransfer!.items = [
      {kind: 'string', type: 'text/plain'}
    ];

    component['on_drag_enter'](mock_event as unknown as DragEvent);

    expect(component['valid']()).toBe(false);
    expect(component['file_count']()).toBe(0);
  });

  it('on_drag_enter should handle missing dataTransfer', () => {
    const empty_event = {
      stopPropagation: vi.fn(),
      preventDefault: vi.fn(),
      dataTransfer: null
    };
    component['on_drag_enter'](empty_event as unknown as DragEvent);
    expect(component['dragging']()).toBe(true);
    expect(component['valid']()).toBe(false);
  });

  it('on_drag_over should prevent default', () => {
    component['on_drag_over'](mock_event as unknown as DragEvent);
    expect(mock_event.stopPropagation).toHaveBeenCalled();
    expect(mock_event.preventDefault).toHaveBeenCalled();
  });

  it('on_drag_leave should reset', () => {
    component['dragging'].set(true);
    component['on_drag_leave'](mock_event as unknown as DragEvent);
    expect(mock_event.stopPropagation).toHaveBeenCalled();
    expect(mock_event.preventDefault).toHaveBeenCalled();
    expect(component['dragging']()).toBe(false);
  });
})

describe('on_drop', () => {
  let mock_event: MockDragEvent;
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;

  beforeEach(async () => {
    mock_event = {
      stopPropagation: vi.fn(),
      preventDefault: vi.fn(),
      dataTransfer: {
        effectAllowed: '',
        items: [],
        files: []
      }
    };

    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should handle valid files drop', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    mock_event.dataTransfer!.files = [file];

    const spy = vi.spyOn(component.files_requested, 'emit');

    component['on_drop'](mock_event as unknown as DragEvent);

    expect(spy).toHaveBeenCalledWith([file]);
    expect(component['submitted']()).toBe(true);
  });

  it('should handle invalid files drop', () => {
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    mock_event.dataTransfer!.files = [file];

    component['on_drag_enter'](mock_event as unknown as DragEvent);
    component['on_drop'](mock_event as unknown as DragEvent);

    expect(component['dragging']()).toBe(true);
    expect(component['valid']()).toBe(false);
  });

  it('should reset if no files in drop', () => {
    mock_event.dataTransfer!.files = [];
    component['dragging'].set(true);

    component['on_drop'](mock_event as unknown as DragEvent);

    expect(component['dragging']()).toBe(false);
  });

  it('should handle missing dataTransfer in drop', () => {
    mock_event.dataTransfer = undefined;
    component['dragging'].set(true);
    component['on_drop'](mock_event as unknown as DragEvent);
    expect(component['dragging']()).toBe(false);
  });
});

describe('on_file_selected', () => {
  let mock_event: MockFileSelectionEvent;
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;
  let component_ref: ComponentRef<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    component_ref = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should handle valid files from input', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    mock_event = {
      target: {
        files: [file]
      }
    };

    const spy = vi.spyOn(component.files_requested, 'emit');
    component['on_file_selected'](mock_event as unknown as Event);
    expect(spy).toHaveBeenCalledWith([file]);
    expect(component['valid']()).toBe(true);
    expect(component['file_count']()).toBe(1);
  });

  it('should handle invalid files from input', () => {
    component_ref.setInput('accept', 'image/*');
    fixture.detectChanges();
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    const mock_event = {
      target: {
        files: [file]
      }
    }

    component['on_file_selected'](mock_event as unknown as Event);

    expect(component['valid']()).toBe(false);
    expect(component['file_count']()).toBe(0);
  });

  it('should return early if no files selected', () => {
    const mock_event = {
      target: {
        files: null
      }
    };

    component['on_file_selected'](mock_event as unknown as Event);
    expect(component['dragging']()).toBe(false);
  });

  it('should return early if empty files list', () => {
    const mock_event = {
      target: {
        files: []
      }
    };

    component['on_file_selected'](mock_event as unknown as Event);
    expect(component['dragging']()).toBe(false);
  });
});

describe('is_mime_accepted', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;
  let component_ref: ComponentRef<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    component_ref = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should return true if no accept attribute', () => {
    component_ref.setInput('accept', undefined);
    expect(component['is_mime_accepted']('image/png')).toBe(true);
  });

  it('should handle extension rules from commonMimeMap', () => {
    component_ref.setInput('accept', '.pdf, .jpg, .json');
    expect(component['is_mime_accepted']('application/pdf')).toBe(true);
    expect(component['is_mime_accepted']('image/jpeg')).toBe(true);
    expect(component['is_mime_accepted']('application/json')).toBe(true);
    expect(component['is_mime_accepted']('text/plain')).toBe(false);
  });

  it('should handle unknown extensions in rules', () => {
    component_ref.setInput('accept', '.unknown');
    expect(component['is_mime_accepted']('application/pdf')).toBe(false);
  });

  it('should handle wildcard rules', () => {
    component_ref.setInput('accept', 'image/*');
    expect(component['is_mime_accepted']('image/png')).toBe(true);
    expect(component['is_mime_accepted']('video/mp4')).toBe(false);
  });

  it('should handle exact MIME rules', () => {
    component_ref.setInput('accept', 'application/pdf');
    expect(component['is_mime_accepted']('application/pdf')).toBe(true);
    expect(component['is_mime_accepted']('application/json')).toBe(false);
  });
});

describe('is_file_accepted', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;
  let component_ref: ComponentRef<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    component_ref = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should return true if no accept attribute', () => {
    component_ref.setInput('accept', undefined);
    const file = new File([''], 'test.png', { type: 'image/png' });
    expect(component['is_file_accepted'](file)).toBe(true);
  });

  it('should handle wildcard rules', () => {
    component_ref.setInput('accept', 'image/*');
    const file = new File([''], 'test.png', { type: 'image/png' });
    expect(component['is_file_accepted'](file)).toBe(true);
  });

  it('should handle extension rules', () => {
    component_ref.setInput('accept', '.pdf');
    const file = new File([''], 'test.pdf', { type: 'application/pdf' });
    expect(component['is_file_accepted'](file)).toBe(true);
  });

  it('should handle exact MIME rules', () => {
    component_ref.setInput('accept', 'application/pdf');
    const file = new File([''], 'test.pdf', { type: 'application/pdf' });
    expect(component['is_file_accepted'](file)).toBe(true);
  });
});

describe('handle_files timeout', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });


  it('should reset after 3 seconds', async () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    component['handle_files']([file]);

    expect(component['submitted']()).toBe(true);

    await pause(3);

    expect(component['submitted']()).toBe(false);
    expect(component['dragging']()).toBe(false);
  });
});

describe('reset method', () => {
  let component: DragAndDropComponent;
  let fixture: ComponentFixture<DragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragAndDropComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should reset all signals', () => {
    component['dragging'].set(true);
    component['valid'].set(true);
    component['file_count'].set(5);
    component['submitted'].set(true);

    component['reset']();

    expect(component['dragging']()).toBe(false);
    expect(component['valid']()).toBe(false);
    expect(component['file_count']()).toBe(0);
    expect(component['submitted']()).toBe(false);
  });
});
