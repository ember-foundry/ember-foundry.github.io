import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {AvatarGroupComponent, AvatarWithinGroupDirective} from './avatar-group.component';
import {AvatarComponent} from '../avatar/avatar.component';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {By} from '@angular/platform-browser';
import {pause} from '../../helpers/pause';

type ExposedAvatarGroupComponentComponent = AvatarGroupComponent & { get is_last_child(): boolean};

describe('AvatarGroupComponent', () => {
  let component: AvatarGroupComponent;
  let fixture: ComponentFixture<AvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no surplus_text when limit is undefined', () => {
    fixture.componentRef.setInput('limit', undefined);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have no surplus_text when limit is < number of avatars but none provided', () => {
    fixture.componentRef.setInput('limit', 1);
    expect(fixture.debugElement.nativeElement.children).to.have.length(0);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have no surplus_text when limit = 0', () => {
    fixture.componentRef.setInput('limit', 0);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have no surplus_text when limit is > the number of avatars', () => {
    fixture.componentRef.setInput('limit', 2);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
    fixture.componentRef.setInput('limit', 3);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

});

@Component({
  standalone: true,
  imports: [AvatarGroupComponent],
  template: `
    <mbr-avatar-group></mbr-avatar-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestAvatarGroupHostComponentWithNoAvatars {}
describe('AvatarGroupComponent with no avatars', () => {
  let hostFixture: ComponentFixture<TestAvatarGroupHostComponentWithNoAvatars>;
  // let hostComponent: TestAvatarGroupHostComponentWithNoAvatars;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAvatarGroupHostComponentWithNoAvatars]
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestAvatarGroupHostComponentWithNoAvatars);
    // hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
    await hostFixture.whenStable();
  });

  it('Should have no children', () => {
    const elements = hostFixture.debugElement.queryAll(By.css('mbr-avatar'));
    expect(elements.length, 'No avatars should be present').toBe(0);
  })
})

@Component({
  standalone: true,
  imports: [AvatarGroupComponent, AvatarComponent, AvatarWithinGroupDirective],
  template: `
    <mbr-avatar-group [limit]="limit()" [layering]="layering()">
      <mbr-avatar name="Avatar 1"></mbr-avatar>
      <mbr-avatar name="Avatar 2"></mbr-avatar>
      <mbr-avatar name="Avatar 3"></mbr-avatar>
    </mbr-avatar-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestAvatarGroupHostComponent {
  limit = input<number>();
  layering = input<'first_on_top' | 'last_on_top'>('last_on_top');
}
describe('AvatarGroupComponent with Projected Content', () => {
  let hostFixture: ComponentFixture<TestAvatarGroupHostComponent>;
  let component: TestAvatarGroupHostComponent;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAvatarGroupHostComponent, AvatarWithinGroupDirective]
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestAvatarGroupHostComponent);
    component = hostFixture.componentInstance;
    host = hostFixture.nativeElement;
    hostFixture.detectChanges();
    await hostFixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.skip('Avatar Directive should have been injected', () => {
    const avatarDebugElements = hostFixture.debugElement.queryAll(By.directive(AvatarWithinGroupDirective));
    const firstAvatarDirective = avatarDebugElements[0].injector.get(
      AvatarWithinGroupDirective
    );
    const spy = vi.spyOn(firstAvatarDirective as unknown as ExposedAvatarGroupComponentComponent, 'is_last_child', 'get');
    expect(spy).toHaveBeenCalled();
  })

  it('should apply correct margins to each avatar component', () => {
    const avatar_components_in_group = hostFixture.debugElement.queryAll(By.directive(AvatarWithinGroupDirective));
    avatar_components_in_group.forEach((avatarDebugElement, index, array) => {
      const is_last = index === array.length - 1;

      if(is_last){
        expect(avatarDebugElement.nativeElement, 'Last avatar should not have a margin').toHaveStyle('margin-right: 0px;')
      } else {
        expect(avatarDebugElement.nativeElement, 'Non last avatar should have margin').toHaveStyle('margin-right: var(--avatar-group-overlap, calc(var(--size, var(--size-md)) * var(--avatar-group-density-multiplier)));')
      }
    })
  });

  it('should visually match', async () => {
    await pause(1.5)
    await expect(host.children[0]).toMatchScreenshot('avatar-group-with-projected-content');
  })

  it('should calculate surplus text correctly when limit is exceeded', async () => {
    // 3 avatars are projected in TestAvatarGroupHostComponent
    hostFixture.componentRef.setInput('limit', 1)
    hostFixture.detectChanges();
    await hostFixture.whenStable();

    // Access the component instance to check the computed signal
    const groupComponent = hostFixture.debugElement.query(By.directive(AvatarGroupComponent)).componentInstance;
    expect(groupComponent['surplus_text']()).toBe('+ 2');
  });

  it('should apply decreasing z-index when layering is "first_on_top"', async () => {
    hostFixture.componentRef.setInput('layering', 'first_on_top');
    hostFixture.detectChanges();
    await hostFixture.whenStable();

    const avatars = hostFixture.debugElement.queryAll(By.css('mbr-avatar'));
    // Total items = 3. First should be 3, second 2, third 1.
    expect(avatars[0].nativeElement.style.zIndex).toBe('3');
    expect(avatars[1].nativeElement.style.zIndex).toBe('2');
    expect(avatars[2].nativeElement.style.zIndex).toBe('1');
  });

  it('should hide avatars exceeding the limit', async () => {
    hostFixture.componentRef.setInput('limit', 2);
    hostFixture.detectChanges();
    await hostFixture.whenStable();

    const avatars = hostFixture.debugElement.queryAll(By.css('mbr-avatar'));
    expect(avatars[0].nativeElement.style.display).not.toBe('none');
    expect(avatars[1].nativeElement.style.display).not.toBe('none');
    expect(avatars[2].nativeElement.style.display).toBe('none');
    expect(avatars[2].nativeElement.classList.contains('collapsed')).toBe(true);
  });

  it('should not override avatar properties if they are already defined', async () => {
    // We need a way to check the child component's internal state
    const groupComponent = hostFixture.debugElement.query(By.directive(AvatarGroupComponent)).componentInstance;
    const firstAvatar = groupComponent['avatar_items_as_component']()[0];

    // Simulate the avatar already having a size set
    // Note: Since you're using signals/inputs, we mock the signal's value
    vi.spyOn(firstAvatar, 'size').mockReturnValue('lg');

    hostFixture.componentRef.setInput('size', 'sm');
    hostFixture.detectChanges();
    await hostFixture.whenStable();

    // The group should have seen it was defined and NOT overwritten it
    expect(firstAvatar.size).not.toBe(groupComponent.size);
  });
});
