import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charToUpper'
})
export class CharToUpperPipe implements PipeTransform {

  transform(value: string, index: number): string {
    let a = value.split('');
    a[index % value.length] = a[index % value.length].toUpperCase();

    return a.join('');
  }

}
