import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'UrlPipe' })
export class UrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
  // url = url.replace("watch?v=", "embed/");
  // console.log('yo');
  // console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl( url );
  }
}
