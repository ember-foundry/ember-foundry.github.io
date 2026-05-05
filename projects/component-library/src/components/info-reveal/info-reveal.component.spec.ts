import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {InfoRevealComponent} from './info-reveal.component';
import {pause} from '../../helpers/pause';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('InfoRevealComponent', () => {
  let component: InfoRevealComponent;
  let fixture: ComponentFixture<InfoRevealComponent>;
  let host: HTMLElement;

  const tests_for_revealed_state = async () => {
    await fixture.whenStable();
    await expect(component.reveal()).toBe(true);
    await expect(host).toHaveClass('reveal');
    await pause(0.5);
    await expect(host).toMatchScreenshot('info-reveal-reveal');
  }

  const tests_for_hidden_state = async () => {
    await fixture.whenStable();
    await expect(component.reveal()).toBe(false);
    await expect(host).not.toHaveClass('reveal');
    await pause(0.5);
    await expect(host).toMatchScreenshot('info-reveal-hidden');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRevealComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InfoRevealComponent);
    host = fixture.nativeElement;
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', async () => {
    await fixture.whenStable();
    await expect(component).toBeTruthy();
  });

  it('should match visually', async () => {
    await tests_for_hidden_state();
  });

  it('should reveal on mouse over', async () => {
    const hover_event = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true
    });

    host.dispatchEvent(hover_event);
    await tests_for_revealed_state();
  });

  it('should hide on mouse leave', async () => {
    const hover_event = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true
    });

    host.dispatchEvent(hover_event);

    await tests_for_revealed_state()
    await pause(2);

    const mouse_leave = new MouseEvent('mouseleave', {
      bubbles: true,
      cancelable: true
    });
    host.dispatchEvent(mouse_leave);

    await tests_for_hidden_state();
  });

  it('should reveal when the reveal is set via the input', async () => {
    fixture.componentRef.setInput('reveal', true);
    await tests_for_revealed_state();
    await pause(2);
    fixture.componentRef.setInput('reveal', false);
    await tests_for_hidden_state();
    await pause(2);
    component.reveal.set(true);
    await tests_for_revealed_state();
    await pause(2);
    component.reveal.set(false);
    await tests_for_hidden_state();
  });
});

@Component({
  standalone: true,
  imports: [InfoRevealComponent],
  template: `
    <mbr-info-reveal [reveal]="true">
      <h2 style="margin: 0">Hello World!</h2>
      <p>This is some example content to be projected</p>
    </mbr-info-reveal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestContentProjectionComponent {}

describe('InfoRevealComponent with Content Projection', () => {
  let fixture: ComponentFixture<TestContentProjectionComponent>;
  let parent: TestContentProjectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestContentProjectionComponent, InfoRevealComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestContentProjectionComponent);
    parent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have projected content', async () => {
    expect(parent).toBeTruthy();

    const projected_h2 = fixture.debugElement.query(By.css('mbr-info-reveal h2'));
    const projected_p = fixture.debugElement.query(By.css('mbr-info-reveal p'));

    const expected_text_h2 = 'Hello World!';
    const expected_text_p = 'This is some example content to be projected';

    expect(projected_h2.nativeElement).toBeInTheDocument();
    expect(projected_h2.nativeElement.textContent).to.equal(expected_text_h2);
    expect(projected_h2.nativeElement.textContent).toBe(expected_text_h2);
    expect(projected_h2.nativeElement).toHaveTextContent(expected_text_h2);

    expect(projected_p.nativeElement).toBeInTheDocument();
    expect(projected_p.nativeElement.textContent).to.equal(expected_text_p);
    expect(projected_p.nativeElement.textContent).toBe(expected_text_p);
    expect(projected_p.nativeElement).toHaveTextContent(expected_text_p);
  })
});
