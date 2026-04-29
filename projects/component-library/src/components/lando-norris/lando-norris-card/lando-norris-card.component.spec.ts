import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {LandoNorrisCardComponent} from './lando-norris-card.component';

describe('LandoNorrisCardComponent', () => {
  let component: LandoNorrisCardComponent;
  let fixture: ComponentFixture<LandoNorrisCardComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandoNorrisCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandoNorrisCardComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match visually', async () => {
    await expect(host).toMatchScreenshot('lando-norris-card');
  });

});
