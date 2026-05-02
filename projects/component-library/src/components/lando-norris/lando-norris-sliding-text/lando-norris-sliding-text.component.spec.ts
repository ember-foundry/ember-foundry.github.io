import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {LandoNorrisSlidingTextComponent} from './lando-norris-sliding-text.component';

describe('LandoNorrisSlidingTextComponent', () => {
  let component: LandoNorrisSlidingTextComponent;
  let fixture: ComponentFixture<LandoNorrisSlidingTextComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandoNorrisSlidingTextComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LandoNorrisSlidingTextComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;

    fixture.componentRef.setInput('text', 'LANDO');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one letter element per grapheme', () => {
    const letters = Array.from(host.querySelectorAll<HTMLElement>('.letter'));

    expect(letters).toHaveLength(5);
    expect(letters.map(letter => letter.textContent)).toEqual([
      'L',
      'A',
      'N',
      'D',
      'O'
    ]);
  });

  it('should expose the text as an aria-label', () => {
    expect(host.getAttribute('aria-label')).toBe('LANDO');
  });

  it('should keep a simple emoji as a single rendered grapheme', () => {
    fixture.componentRef.setInput('text', 'EMOJI😍');
    fixture.detectChanges();

    const letters = Array.from(host.querySelectorAll<HTMLElement>('.letter'));

    expect(letters).toHaveLength(6);
    expect(letters.map(letter => letter.textContent)).toEqual([
      'E',
      'M',
      'O',
      'J',
      'I',
      '😍'
    ]);
  });

  it('should keep a complex emoji sequence as a single rendered grapheme', () => {
    fixture.componentRef.setInput('text', '🏎️👨‍👩‍👧‍👦');
    fixture.detectChanges();

    const letters = Array.from(host.querySelectorAll<HTMLElement>('.letter'));

    expect(letters).toHaveLength(2);
    expect(letters.map(letter => letter.textContent)).toEqual([
      '🏎️',
      '👨‍👩‍👧‍👦'
    ]);
  });

  it('should update rendered letters when the text input changes', () => {
    fixture.componentRef.setInput('text', 'LN4');
    fixture.detectChanges();

    const letters = Array.from(host.querySelectorAll<HTMLElement>('.letter'));

    expect(letters).toHaveLength(3);
    expect(letters.map(letter => letter.textContent)).toEqual([
      'L',
      'N',
      '4'
    ]);
    expect(host.getAttribute('aria-label')).toBe('LN4');
  });
});
