import {beforeEach, describe, expect, it} from 'vitest';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RandomMilkyBackgroundDirective} from './random-milky-background.directive';

@Component({
  standalone: true,
  imports: [RandomMilkyBackgroundDirective],
  template: `
    <div mbrRandomMilkyBackground>Test Element</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestHostComponent {
}

describe('RandomMilkyBackgroundDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, RandomMilkyBackgroundDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the host component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should apply an HSL background color to the host element', () => {
    const debugElement = fixture.debugElement.query(By.directive(RandomMilkyBackgroundDirective));
    const htmlElement = debugElement.nativeElement as HTMLElement;

    // Check if background-color style is set
    // Note: Browsers often convert HSL to RGB when reading from style.backgroundColor
    const bgColor = htmlElement.style.backgroundColor;

    expect(bgColor).not.toBe('');
    // We check for 'rgb' because most test environments (jsdom) normalize the HSL output
    expect(bgColor).toMatch(/rgb|hsl/);
  });
});
