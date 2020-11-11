import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlShortten'
})
export class UrlShorttenPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const url = value.split('/', 3)[2];
    return url.startsWith('www') ? url.split('www.')[1] : url;
  }

}
