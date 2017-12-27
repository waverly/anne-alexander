import { Component, OnInit, AfterViewInit, HostListener, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import {IFeed}from './feed';
import { DOCUMENT } from '@angular/platform-browser';
// import fade in animation
import { fadeInAnimation } from './../_animation/index';
import * as $ from 'jquery';

@Component({
  // selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  // ,
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})


export class FeedComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: IFeed;
  bgImgStem: Object;


     constructor(
       private _globalService: GlobalService,
       private _feedService: PrismicService,
       @Inject(DOCUMENT) private document: Document
     ){}

    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }

    onIndexChanged( index: string ){
      console.log('in feed component, on index changed fx');
      this.bgImgStem = this.feed.results[index].data["portfolio-video"].thumbnail.value.main.url;
    }

     ngOnInit(): void{
      this._globalService.setLoading(true);
       console.log('ng on init');
       if(!this.feed){
         this.getPage(0);
       }
     }

     getPage(page): void{
       this._feedService.getFeed('portfolio-video', page)
       .subscribe(
         feed=>{
           if(page==0){
             this.feed=feed;
             console.log('in feed');
             console.log(this.feed);
             this._globalService.setLoading(false);
           }else{
             console.log('in else block');
             this.concatResults(feed);
          }
         },
         error=>{
           console.log('there was an error');
           this.errorMessage=error;
           this._globalService.setLoading(false);
         }
       );
     }



     @HostListener("window:scroll", [])
      onWindowScroll() {
        let number = this.document.body.scrollTop;
        console.log(window.innerHeight);
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        var windowBottom = window.innerHeight + window.pageYOffset;
        if ((windowBottom >= docHeight) &&(this.paginationInProcess==false)) {
            // alert('bottom reached');
            if(this.feed){
              if((this.feed.page+1)<this.feed.total_pages){
                this.getPage(this.feed.page+1);
              }
            }
        }
      }

      concatResults(obj): void{
        console.log("concat results")
       this.feed.results= this.feed.results.concat(obj.results);
       this.feed.page=obj.page;
       this.feed.total_pages=obj.total_pages;
       this.feed.prev_page=obj.prev_page;

       console.log(this.feed);
      }


}
