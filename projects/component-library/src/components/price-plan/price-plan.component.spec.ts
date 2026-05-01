import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {PricePlanComponent} from './price-plan.component';

describe('PricePlanComponent', () => {
  let component: PricePlanComponent;
  let fixture: ComponentFixture<PricePlanComponent>;
  let host: HTMLElement;

  const defaultInputs = {
    title: 'Starter',
    price: 19,
    description: 'Perfect for trying things out',
    features: [
      'Access to core features',
      'Community support',
      'Cancel anytime'
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePlanComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PricePlanComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;

    fixture.componentRef.setInput('title', defaultInputs.title);
    fixture.componentRef.setInput('price', defaultInputs.price);
    fixture.componentRef.setInput('description', defaultInputs.description);
    fixture.componentRef.setInput('features', defaultInputs.features);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the plan title, price, and description', () => {
    expect(host.querySelector('.title')?.textContent?.trim()).toBe(defaultInputs.title);
    expect(host.querySelector('.subtitle')?.textContent?.trim()).toBe('From $19.00');
    expect(host.querySelector('.description')?.textContent?.trim()).toBe(defaultInputs.description);
  });

  it('should render the default CTA text', () => {
    expect(host.querySelector('button')?.textContent?.trim()).toBe('Select Package');
  });

  it('should render custom CTA text', () => {
    fixture.componentRef.setInput('cta_text', 'Choose Starter');

    fixture.detectChanges();

    expect(host.querySelector('button')?.textContent?.trim()).toBe('Choose Starter');
  });

  it('should render all features', () => {
    const features = Array.from(host.querySelectorAll('.feature span'))
      .map((feature) => feature.textContent?.trim());

    expect(features).toEqual(defaultInputs.features);
  });

  it('should not show the popular badge by default', () => {
    expect(host.classList.contains('popular')).toBe(false);
    expect(host.querySelector('.badge')).toBeNull();
  });

  it('should show the popular badge and host class when popular', () => {
    fixture.componentRef.setInput('popular', true);

    fixture.detectChanges();

    expect(host.classList.contains('popular')).toBe(true);
    expect(host.querySelector('.badge')?.textContent?.trim()).toBe('Most Popular');
  });

  it('should apply the selected host class when selected', () => {
    expect(host.classList.contains('selected')).toBe(false);

    fixture.componentRef.setInput('selected', true);

    fixture.detectChanges();

    expect(host.classList.contains('selected')).toBe(true);
  });
});
