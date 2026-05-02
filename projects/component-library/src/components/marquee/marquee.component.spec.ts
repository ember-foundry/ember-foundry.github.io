import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, it, expect, beforeEach} from 'vitest';
import {MarqueeComponent, MarqueeItemTemplateDirective} from './marquee.component';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  standalone: true,
  imports: [MarqueeComponent, MarqueeItemTemplateDirective],
  template: `
    <mbr-marquee>
      <ng-template mbrMarqueeTemplate>
        <span>Item</span>
      </ng-template>
    </mbr-marquee>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestDefaultMarqueeHostComponent {}

@Component({
  standalone: true,
  imports: [MarqueeComponent, MarqueeItemTemplateDirective],
  template: `
    <mbr-marquee orientation="vertical">
      <ng-template mbrMarqueeTemplate>
        <span>Item</span>
      </ng-template>
    </mbr-marquee>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestColumnMarqueeHostComponent {}

@Component({
  standalone: true,
  imports: [MarqueeComponent, MarqueeItemTemplateDirective],
  template: `
    <mbr-marquee direction="reverse">
      <ng-template mbrMarqueeTemplate>
        <span>Item</span>
      </ng-template>
    </mbr-marquee>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestRowReverseMarqueeHostComponent {}

@Component({
  standalone: true,
  imports: [MarqueeComponent, MarqueeItemTemplateDirective],
  template: `
    <mbr-marquee
      orientation="vertical"
      direction="reverse"
      [fade]="false"
      [pause_on_hover]="false"
      [speed]="2"
    >
      <ng-template mbrMarqueeTemplate>
        <span>Item</span>
      </ng-template>
    </mbr-marquee>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestVerticalReverseMarqueeHostComponent {}

describe('MarqueeComponent', () => {
  let component: MarqueeComponent;
  let fixture: ComponentFixture<TestDefaultMarqueeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDefaultMarqueeHostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestDefaultMarqueeHostComponent);
    fixture.detectChanges();
    component = fixture.debugElement.children[0].componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the default horizontal normal host classes and styles', () => {
    const hostElement = fixture.nativeElement.querySelector('mbr-marquee');
    expect(hostElement).toHaveClass('direction-normal');
    expect(hostElement).toHaveClass('orientation-horizontal');
    expect(hostElement).toHaveClass('fade');
    expect(hostElement).toHaveClass('pause-on-hover');
    expect(hostElement.style.getPropertyValue('--flex-direction')).toBe('row');
    expect(hostElement.style.getPropertyValue('--marquee-animation-direction')).toBe('-1');
    expect(hostElement.style.getPropertyValue('--marquee-speed')).toBe('1');
  });

  it('should support different input values', async () => {
    const verticalFixture = TestBed.createComponent(TestVerticalReverseMarqueeHostComponent);
    verticalFixture.detectChanges();
    await verticalFixture.whenStable();
    const verticalComponent = verticalFixture.debugElement.children[0].componentInstance as MarqueeComponent;
    const hostElement = verticalFixture.nativeElement.querySelector('mbr-marquee');
    expect(verticalComponent).toBeTruthy();
    expect(hostElement).toHaveClass('direction-reverse');
    expect(hostElement).toHaveClass('orientation-vertical');
    expect(hostElement).not.toHaveClass('fade');
    expect(hostElement).not.toHaveClass('pause-on-hover');
    expect(hostElement.style.getPropertyValue('--flex-direction')).toBe('column-reverse');
    expect(hostElement.style.getPropertyValue('--marquee-animation-direction')).toBe('1');
    expect(hostElement.style.getPropertyValue('--marquee-speed')).toBe('2');
  });

  it('The flex direction should be row reverse for when the direction is in reverse', async () => {
    const rowReverseFixture = TestBed.createComponent(TestRowReverseMarqueeHostComponent);
    rowReverseFixture.detectChanges();
    await rowReverseFixture.whenStable();
    const verticalComponent = rowReverseFixture.debugElement.children[0].componentInstance as MarqueeComponent;
    const hostElement = rowReverseFixture.nativeElement.querySelector('mbr-marquee');
    expect(verticalComponent).toBeTruthy();
    expect(hostElement.style.getPropertyValue('--flex-direction')).toBe('row-reverse');
  });

  it('The flex direction should be column for when only the orientation is vertical', async () => {
    const verticalFixture = TestBed.createComponent(TestColumnMarqueeHostComponent);
    verticalFixture.detectChanges();
    await verticalFixture.whenStable();
    const verticalComponent = verticalFixture.debugElement.children[0].componentInstance as MarqueeComponent;
    const hostElement = verticalFixture.nativeElement.querySelector('mbr-marquee');
    expect(verticalComponent).toBeTruthy();
    expect(hostElement.style.getPropertyValue('--flex-direction')).toBe('column');
  });
});
