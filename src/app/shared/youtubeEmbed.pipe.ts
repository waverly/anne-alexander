import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'youtubeEmbed' })
export class YoutubeEmbedPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(id) {
    var url = 'https://www.youtube.com/embed/'+id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
