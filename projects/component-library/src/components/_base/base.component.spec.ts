import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach, vi} from 'vitest';
import {BaseComponent} from './base.component';

type ExposedBaseComponent = BaseComponent & { component_to_css_class: () => string, computed_host_css_classes_from: () => string };

@Component({
  template: 'TestBaseHostComponent',
  host: {
    '[class]': 'host_css_classes()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestBaseHostComponent extends BaseComponent {
  readonly size = input('sm');
  readonly status = input('success');
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'status');
}

describe('BaseComponent', () => {
  let fixture: ComponentFixture<TestBaseHostComponent>;
  let component: TestBaseHostComponent;
  let spy_component_to_css_class: ReturnType<typeof vi.spyOn>;
  let spy_computed_host_css_classes_from: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBaseHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestBaseHostComponent);
    component = fixture.componentInstance;
    let _component = component as unknown as ExposedBaseComponent
    spy_component_to_css_class = vi.spyOn(_component, 'component_to_css_class');
    spy_computed_host_css_classes_from = vi.spyOn(_component, 'computed_host_css_classes_from');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto create css class from component name', () => {
    expect(spy_component_to_css_class).toHaveBeenCalled();
  });

  it('should convert the class name to a kebab-case css class', () => {
    let _component = component as unknown as ExposedBaseComponent
    expect(_component.component_to_css_class()).toBe('test-base-host');
  });

  it('should apply the kebab-case class to the host element', () => {
    expect(fixture.nativeElement).toHaveClass('test-base-host');
  });

  it('Should auto create css classes from component inputs', () => {
    expect(spy_computed_host_css_classes_from).toHaveBeenCalled();
  });

  it('should have the correct host css classes based on the inputs', () => {
    expect(fixture.nativeElement).toHaveClass('size-sm', 'status-success');
  });

  it('should update host css classes when inputs change', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.componentRef.setInput('status', 'busy');
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('size-lg', 'status-busy');
  });

});
