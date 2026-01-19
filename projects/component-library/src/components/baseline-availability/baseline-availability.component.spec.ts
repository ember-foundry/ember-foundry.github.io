import { BaselineAvailabilityComponent } from './baseline-availability.component';
import {expect, it, describe, beforeEach} from 'vitest';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('BaselineAvailabilityComponent', () => {
  let component: BaselineAvailabilityComponent;
  let fixture: ComponentFixture<BaselineAvailabilityComponent>;

  const component_base_checks = () => {
    expect(component).toBeTruthy();
    const image_tags = fixture.debugElement.queryAll(By.css('img'));
    expect(image_tags.length, 'Should be no image tags in the document').toBe(0);
    const svg_elements = fixture.debugElement.queryAll(By.css('svg'));
    expect(svg_elements.length, 'There should be svgs for each icon and browser').toBe(4 + 4);
  }

  const baseline_group_checks = (baseline_group: DebugElement) => {
    expect(baseline_group.nativeElement).toBeInTheDocument();
    expect(baseline_group.nativeElement).toBeTruthy();

    Array.from<HTMLElement>(baseline_group.nativeElement.children).forEach((avatar_group: HTMLElement) => {
      expect(avatar_group, 'Each Browser Group should have the relevant avatar group css class').toHaveClass('avatar-group');
      expect(avatar_group, 'Each Browser Group should have a loose density grouping').toHaveClass('loose');
      expect(avatar_group.children, 'Each browser group should only have 2 children').to.have.length(2);
      Array.from(avatar_group.children).forEach(avatar => {
        expect(avatar, 'Every child in the browser group should be an avatar').toHaveClass('avatar');
      })

      expect(avatar_group.children[0], 'The first avatar should be for the browser').toHaveClass('browser');
      expect(avatar_group.children[1], 'The second avatar should be the support status').toHaveClass('icon');
    })
  }

  const avatar_checks = () => {
    const all_avatars = fixture.debugElement.queryAll(By.css('.avatar'));
    all_avatars.forEach(avatar => {
      expect(avatar.nativeElement.style.getPropertyValue('--size')).toBe('var(--size-3xs)');
    })
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaselineAvailabilityComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(BaselineAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all browsers as unsupported when none are provided', async () => {
    component_base_checks();

    expect(fixture.debugElement.nativeElement.children, 'Component should only have 1 child').to.have.length(1);
    expect(fixture.debugElement.nativeElement.children[0], 'The only child should be the unsupported group').toHaveClass('availability-group', 'unsupported');

    const supported_group = fixture.debugElement.query(By.css('.availability-group.supported'));
    expect(supported_group).not.toBeInTheDocument();
    expect(supported_group).toBeFalsy();

    const unsupported_group = fixture.debugElement.query(By.css('.availability-group.unsupported'));
    baseline_group_checks(unsupported_group);
    expect(unsupported_group.nativeElement.children, 'Should have avatar groups for each browser').to.have.length(4);


    avatar_checks();
    // todo test contrast ratio
  });

  it('should split browsers correctly between supported and unsupported', async () => {
    fixture.componentRef.setInput('supported', ['chrome', 'firefox']);
    fixture.detectChanges();

    component_base_checks();

    expect(fixture.debugElement.nativeElement.children, 'Component should only 2 groups').to.have.length(2);
    expect(fixture.debugElement.nativeElement.children[0], 'First group should always be the supported group').toHaveClass('availability-group', 'supported');
    expect(fixture.debugElement.nativeElement.children[1], 'Second group should always be the unsupported group').toHaveClass('availability-group', 'unsupported');

    const supported_group = fixture.debugElement.query(By.css('.availability-group.supported'));
    baseline_group_checks(supported_group);

    expect(supported_group.nativeElement.children, 'Supported group should have 2 children').to.have.length(2);
    expect(supported_group.nativeElement.children[0], 'First child should be for the chrome browser').toHaveClass('chrome');
    expect(supported_group.nativeElement.children[1], 'Second child should be for the firefox browser').toHaveClass('firefox');

    const unsupported_group = fixture.debugElement.query(By.css('.availability-group.unsupported'));
    baseline_group_checks(unsupported_group);
    expect(unsupported_group.nativeElement.children, 'Unsupported group should have 2 children').to.have.length(2);
    expect(unsupported_group.nativeElement.children[0], 'First child should be for the edge browser').toHaveClass('edge');
    expect(unsupported_group.nativeElement.children[1], 'Second child should be for the safari browser').toHaveClass('safari');

    avatar_checks();
  });

  it('should apply the correct size class to all avatars', async () => {
    fixture.componentRef.setInput('size', 'xs');
    fixture.detectChanges();
    component_base_checks();

    const supported_group = fixture.debugElement.query(By.css('.availability-group.supported'));
    expect(supported_group).not.toBeInTheDocument();
    expect(supported_group).toBeFalsy();

    const unsupported_group = fixture.debugElement.query(By.css('.availability-group.unsupported'));
    baseline_group_checks(unsupported_group);
    expect(unsupported_group.nativeElement.children, 'Should have avatar groups for each browser').to.have.length(4);

    const all_avatars = fixture.debugElement.queryAll(By.css('.avatar'));
    all_avatars.forEach(avatar => {
      expect(avatar.nativeElement.style.getPropertyValue('--size')).toBe('var(--size-xs)');
    })
  });
});
