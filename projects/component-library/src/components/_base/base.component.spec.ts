import {ChangeDetectionStrategy, Component, input} from '@angular/core';
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
  size = input('sm');
  status = input('success');
  protected readonly host_css_classes = this.computed_host_css_classes_from('size', 'status');
}
describe('BaseComponent', () => {
  let fixture: ComponentFixture<TestBaseHostComponent>;
  let component: TestBaseHostComponent;
  let spy_component_to_css_class: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBaseHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestBaseHostComponent);
    component = fixture.componentInstance;

    const exposed_component = component as unknown as ExposedBaseComponent;

    spy_component_to_css_class = vi.spyOn(exposed_component, 'component_to_css_class');

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
    const exposed_component = component as unknown as ExposedBaseComponent
    expect(exposed_component.component_to_css_class()).toBe('test-base-host');
  });

  it('should apply the kebab-case class to the host element', () => {
    expect(fixture.nativeElement).toHaveClass('test-base-host');
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
