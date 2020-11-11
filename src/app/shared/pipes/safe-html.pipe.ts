import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer){}

  transform(value: unknown, ...args: unknown[]): unknown {
    // const sanitizedContent = DOMPurify.sanitize(value);
    // return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
    return null;
  }

}
