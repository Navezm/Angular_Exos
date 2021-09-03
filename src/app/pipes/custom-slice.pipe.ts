import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice'
})
export class CustomSlicePipe implements PipeTransform {


  transform(list: any[], numeroPage: number, nombreElements : number): any[] {
    // let nombrePages = Math.ceil(list.length/nombreElements);
    // let indexFin = numeroPage*nombreElements - 1;
    // let indexDebut = 0;
    // if(numeroPage > 1){
    //   indexDebut = indexFin - nombreElements;
    // }
    return list.slice((numeroPage -1) * nombreElements, (numeroPage -1) * nombreElements + nombreElements);
  }
}
