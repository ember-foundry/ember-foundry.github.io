import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {DribbbleAuthorDetailsBarComponent} from './dribbble-author-details-bar.component';

describe('DribbbleAuthorDetailsBarComponent', () => {
  let component: DribbbleAuthorDetailsBarComponent;
  let fixture: ComponentFixture<DribbbleAuthorDetailsBarComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DribbbleAuthorDetailsBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DribbbleAuthorDetailsBarComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async () => {
    await expect(host).toMatchScreenshot('dribbble-author-details-bar');
  });
});
