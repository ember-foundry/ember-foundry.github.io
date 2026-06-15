import {ComponentFixture, TestBed} from '@angular/core/testing';
import {describe, expect, beforeEach, it} from 'vitest';
import {PanelComponent} from './panel.component';
import {pause} from '../../../../component-library/src/helpers/pause';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let host: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    fixture.componentRef.setInput('title', 'Test Panel');
    component = fixture.componentInstance;
    host = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should visually match', async () => {
    await pause(1.5)
    await expect(host).toMatchScreenshot('avatar-badge');
  });
});
