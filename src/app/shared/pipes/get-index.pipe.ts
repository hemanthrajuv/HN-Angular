import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIndex'
})
export class GetIndexPipe implements PipeTransform {

  transform(value: number, index?: number): unknown {
    if (!isNaN(index)){
    return (value * 10) + index - 9;
    } else {
      return '';
    }
  }

}
