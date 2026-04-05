import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {MarqueeComponent, MarqueeItemTemplateDirective} from './marquee.component';
import {Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [MarqueeComponent, MarqueeItemTemplateDirective],
  template: `
    <mbr-marquee>
      <ng-template mbrMarqueeTemplate>
        <span>Item</span>
      </ng-template>
    </mbr-marquee>
  `
})
class TestMarqueeHostComponent {}

describe('MarqueeComponent', () => {
  let component: MarqueeComponent;
  let fixture: ComponentFixture<TestMarqueeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMarqueeHostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestMarqueeHostComponent);
    fixture.detectChanges();
    component = fixture.debugElement.children[0].componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
