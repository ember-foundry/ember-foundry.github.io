import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {PostItComponent} from './post-it.component';

describe('PostItComponent', () => {
  let component: PostItComponent;
  let fixture: ComponentFixture<PostItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostItComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostItComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
