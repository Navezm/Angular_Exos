import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matPagination'
})
export class MatPaginationPipe implements PipeTransform {

  transform(value: any[], page: number, size: number = 10): any[] {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    return value.slice(startIndex, endIndex);
  }

}
