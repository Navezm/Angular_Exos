import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charToUpper'
})
export class CharToUpperPipe implements PipeTransform {

  transform(value: string, index: number): string {
    if (index > value.length - 1) {
      index = 0;
    }
    let a = value.split('');
    a[index] = a[index].toUpperCase();

    return a.join('');
  }

}
