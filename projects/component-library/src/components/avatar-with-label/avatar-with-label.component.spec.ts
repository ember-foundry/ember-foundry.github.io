import {beforeEach, describe, expect, it} from "vitest";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AvatarWithLabelComponent} from './avatar-with-label.component';
import {pause} from '../../helpers/pause';

describe('AvatarWithLabelComponent', () => {

  let component: AvatarWithLabelComponent;
  let fixture: ComponentFixture<AvatarWithLabelComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarWithLabelComponent]
    }).compileComponents();


  });

  it('should create and display the required name', async () => {
    fixture = TestBed.createComponent(AvatarWithLabelComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    fixture.componentRef.setInput('name', 'John Doe');
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('John Doe');
    await pause(1.5)
    await expect(host).toMatchScreenshot('avatar-with-label');
  });

});
