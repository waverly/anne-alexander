import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrismicService} from './prismic.service';
import {GlobalService} from './variables.service';
import {MatchMediaService} from './match-media.service';
import {EncodeURIPipe} from './encodeURI.pipe';
import {SafePipe} from './safeUrl.pipe';
import {YoutubeEmbedPipe} from './youtubeEmbed.pipe';



@NgModule({
  declarations: [
    SafePipe,
    YoutubeEmbedPipe
  ],
  providers:[PrismicService, GlobalService, MatchMediaService],
  imports:[CommonModule],
  exports:[
    CommonModule,
    FormsModule,
    SafePipe,
    YoutubeEmbedPipe
  ]

})

export class SharedModule{

}
