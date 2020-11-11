import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const diff = Math.floor(Date.now() / 1000 - +value);
    if (diff < 60){
      return 'just now';
    }
    else if (diff < 3600){
      return `${Math.floor(diff / 60)} minutes ago`;
    }
    else if (diff < 86400){
      return `${Math.floor(diff / 3600)} hours ago`;
    }
    else if (diff < 604800){
      return `${Math.floor(diff / 86400)} days ago`;
    }
    else if (diff < 2592000){
      return `${Math.floor(diff / 604800)} weeks ago`;
    }
    else if (diff < 31104000){
      return `${Math.floor(diff / 2592000)} months ago`;
    }
    else{
      return `${Math.floor(diff / 31104000)} years ago`;
    }
  }

}
