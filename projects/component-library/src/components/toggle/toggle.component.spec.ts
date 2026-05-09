import { ComponentFixture, TestBed } from '@angular/core/testing';
import {beforeEach, describe, expect, it, Mock, vi} from 'vitest';
import { ToggleComponent } from './toggle.component';
import {pause} from '../../helpers/pause';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  let host: HTMLElement;
  let event_spy: Mock<(value: boolean) => void>;

  const tests_for_active_state = async () => {
    await fixture.whenStable();
    expect(component.active()).toBe(true);
    expect(event_spy).toHaveBeenCalledWith(true);
    expect(host).toHaveClass('active');
  }

  const tests_for_inactive_state = async () => {
    await fixture.whenStable();
    expect(component.active()).toBe(false);
    expect(host).not.toHaveClass('active');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    event_spy = vi.spyOn(component.state_change, 'emit');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start out as inactive', async () => {
    await tests_for_inactive_state();
  });

  it('should be active when clicked', async () => {
    await pause(1);
    host.click();
    await tests_for_active_state();
  });
});
