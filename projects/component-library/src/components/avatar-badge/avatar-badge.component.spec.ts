import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {AvatarBadgeComponent} from './avatar-badge.component';
import {By} from '@angular/platform-browser';
import {pause} from '../../helpers/pause';

describe('AvatarBadgeComponent', () => {
  let component: AvatarBadgeComponent;
  let fixture: ComponentFixture<AvatarBadgeComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarBadgeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvatarBadgeComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('Should display a dummy avatar with an offline badge when no inputs are given', async () => {
    expect(component).toBeTruthy();
    const host = fixture.debugElement
    await expect.element(host.nativeElement).toHaveClass('avatar-badge', 'notch', 'offline');

    const avatar = fixture.debugElement.query(By.css('.avatar'));
    expect(avatar).toBeTruthy();
    await expect.element(avatar.nativeElement).toBeInTheDocument();
    await expect.element(avatar.nativeElement).toHaveTextContent('UU')

    const badge = fixture.debugElement.query(By.css('.badge'));
    expect(badge).toBeTruthy();
    await expect.element(badge.nativeElement).toBeEmptyDOMElement();
    await expect.element(badge.nativeElement).toHaveStyle('background-color: rgb(227, 227, 227)');
  });

  it('should visually match', async () => {
    await pause(1.5)
    await expect(host).toMatchScreenshot('avatar-badge');
  })
});
