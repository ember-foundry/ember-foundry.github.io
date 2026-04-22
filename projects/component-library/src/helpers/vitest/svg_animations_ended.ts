import {By} from '@angular/platform-browser';
import {ComponentFixture} from '@angular/core/testing';

/**
 * Provides a promise for all svg animations
 * @param fixture
 */
export function svg_animations_ended<TComponent>(fixture: ComponentFixture<TComponent>): Promise<void[]> {
  const promises: Promise<void>[] = []
  fixture.debugElement.queryAll(By.css('svg animate'))
    .forEach(animate_node => {
      const promise = new Promise<void>(resolve => {
        animate_node.nativeElement.addEventListener('endEvent', () => resolve());
      })
      promises.push(promise)
    })

  return Promise.all(promises)
}
