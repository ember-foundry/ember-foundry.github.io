import '@angular/compiler';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
import '@vitest/browser/matchers';
import './src/styles/vitest.scss';

setupTestBed({
  browserMode: true,
  zoneless: true
});
