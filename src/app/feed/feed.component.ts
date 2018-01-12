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
  styleUrls: ['./feed.component.scss'],
  animations: [
    trigger('test', [
      transition('void => *', [
        style({ opacity: 0 }),
        // animation and styles at end of transition
        animate('5s', style({ opacity: 1 }))
      ])
    ])

  ]
})


export class FeedComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: IFeed;
  activeId: string = "2";

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
       this._feedService.getFeed('portfolio-video', page)
       .subscribe(
         feed=>{
           if(page==0){
             this.feed=feed;
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

     onIndexChanged( index: string ){
       this.activeId = index;
     }


}
