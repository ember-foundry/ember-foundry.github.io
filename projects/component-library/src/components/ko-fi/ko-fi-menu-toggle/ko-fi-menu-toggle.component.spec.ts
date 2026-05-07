import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, Mock, vi} from 'vitest';
import {KoFiMenuToggleComponent} from './ko-fi-menu-toggle.component';
import {pause} from '../../../helpers/pause';

describe('KoFiMenuToggleComponent', () => {
  let component: KoFiMenuToggleComponent;
  let fixture: ComponentFixture<KoFiMenuToggleComponent>;
  let host: HTMLElement;
  let event_spy: Mock<(value: boolean) => void>;

  const tests_for_active_state = async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.active()).toBe(true);
    expect(event_spy).toHaveBeenCalledWith(true);

    expect(host).toHaveClass('active');
    await pause(0.5);
    await expect(host).toMatchScreenshot('ko-fi-menu-toggle-active');
  }

  const tests_for_inactive_state = async () => {
    await fixture.whenStable();
    expect(component.active()).toBe(false);
    expect(host).not.toHaveClass('active');
    await pause(0.5);
    await expect(host).toMatchScreenshot('ko-fi-menu-toggle');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoFiMenuToggleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KoFiMenuToggleComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    event_spy = vi.spyOn(component.state_change, 'emit');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually when inactive', async () => {
    await tests_for_inactive_state();
  });

  it('should match visually when active', async () => {
    await pause(1);
    host.click();
    await tests_for_active_state();
  });
});
