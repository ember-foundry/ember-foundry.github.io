import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {AvatarGroupComponent} from './avatar-group.component';

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

  it('When empty, should display 2 dummy avatars', () => {
    expect(fixture.debugElement.nativeElement.children).to.have.length(2);
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have undefined surplus_text when limit is undefined', () => {
    fixture.componentRef.setInput('limit', undefined);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have undefined surplus_text when limit is = 0', () => {
    fixture.componentRef.setInput('limit', 0);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have undefined surplus_text when limit is > the number of avatars', () => {
    fixture.componentRef.setInput('limit', 2);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
    fixture.componentRef.setInput('limit', 3);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });

  it('should have a surplus_text = undefined when limit is < the number of avatars but no avatars are provided', () => {
    fixture.componentRef.setInput('limit', 1);
    expect(fixture.debugElement.nativeElement.children).to.have.length(2);
    fixture.detectChanges();
    expect(component['surplus_text']()).toBeUndefined();
  });
});
//
// @Component({
//   standalone: true,
//   imports: [AvatarGroupComponent, AvatarComponent],
//   template: `
//     <lib-avatar-group [limit]="limit">
//       <lib-avatar name="Avatar 1"></lib-avatar>
//       <lib-avatar name="Avatar 2"></lib-avatar>
//       <lib-avatar name="Avatar 3"></lib-avatar>
//     </lib-avatar-group>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// class TestHostComponent {
//   limit: number | undefined = undefined;
// }
//
// describe('AvatarGroupComponent with Projected Content', () => {
//   let hostFixture: ComponentFixture<TestHostComponent>;
//   let hostComponent: TestHostComponent;
//
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [TestHostComponent]
//     }).compileComponents();
//
//     hostFixture = TestBed.createComponent(TestHostComponent);
//     hostComponent = hostFixture.componentInstance;
//     hostFixture.detectChanges();
//   });
//
//   it('should calculate surplus_text correctly when limit is reached', () => {
//     const groupDebugElement = hostFixture.debugElement.query(el => el.componentInstance instanceof AvatarGroupComponent);
//     const groupComponent = groupDebugElement.componentInstance as AvatarGroupComponent;
//
//     hostFixture.componentRef.setInput('limit', 2);
//
//     hostFixture.detectChanges();
//
//     expect(groupComponent['surplus_text']()).toBe('+ 1');
//   });
// });
