import {GridBackgroundDirective} from './grid-background.directive';
import {describe, it, expect, beforeEach} from 'vitest';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  standalone: true,
  imports: [GridBackgroundDirective],
  template: `
    <div mbrGridBackground>Test Element</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TestHostComponent {
}

describe('GridBackgroundDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, GridBackgroundDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
