import {Pipe, PipeTransform} from '@angular/core';

export type NumericStringPipeOutputs = string | undefined;

@Pipe({
  name: 'numeric-string'
})
export class NumericStringPipe implements PipeTransform {
  transform(value: number | string | undefined | null): NumericStringPipeOutputs  {
    if (value === undefined || value === null || value.toString().trim() === '') {
      return undefined;
    }
    if (isNaN(Number(value))) {
      return undefined
    }
    return value.toString().replace(/[^0-9]/g, '');
  }
}
