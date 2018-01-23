import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import {IFeed}from './feed';
import { DOCUMENT } from '@angular/platform-browser';
import { FeedNavComponent } from './feed-nav/feed-nav.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as $ from 'jquery';
import { fadeInAnimation } from './../_animation/index';

@Component({
  // selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})


export class FeedComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: IFeed;
  results: any;
  activeId: string = "2";
  i: number = 0;
  // src: string = "feed.results["0"].data["featured-img"]["featured-img"].value.main.url";

  show = false;


   constructor(
     private _globalService: GlobalService,
     private _feedService: PrismicService,
     @Inject(DOCUMENT) private document: Document
   ){}


    get stateName() {
      return this.show ? 'show' : 'hide'
    }
    toggle() {
      this.show = !this.show;
      alert('toggling');
    }

   message:string;

     ngOnInit(): void{
       if(!this.feed){
         this.getPage(0);
       }
     }

     getPage(page): void{
       this._feedService.getFeed('featured-img', page)
       .subscribe(
         feed=>{
           if(page==0){
             this.feed=feed;
             setInterval( ()=>{this.imgCycle();}, 4000)

           }else{
             console.log('in else block');
          }
         },
         error=>{
           console.log('there was an error');
           this.errorMessage=error;
         }
       );
     }

     imgCycle(){
       if(this.feed){
         console.log(this.feed.results.length, this.i);
         if ( this.i < 1){
           this.i++;
           console.log('in if', this.i);
         }
         else{
           this.i = 0;
           console.log('in else',  this.i);
         }

       }

     }

     onIndexChanged( index: string ){
       this.activeId = index;
     }


}
