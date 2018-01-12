import { Component, OnInit, AfterViewInit, HostListener, Inject, Input, Output, EventEmitter } from '@angular/core';
import {PrismicService} from './../../shared/prismic.service';
import {GlobalService} from './../../shared/variables.service';
import { DOCUMENT } from '@angular/platform-browser';
import {IFeed}from './../feed';
// import fade in animation
import { fadeInAnimation } from './../../_animation/index';
import * as $ from 'jquery';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query

} from '@angular/animations';

@Component({
  selector: 'app-feed-nav',
  templateUrl: './feed-nav.component.html',
  styleUrls: ['./feed-nav.component.scss'],
  animations: [
    trigger('fadeNav', [
      // route 'enter' transition
      transition(':enter', [

          // styles at start of transition
          style({opacity: 0}),

          // animation and styles at end of transition
          animate('5s', keyframes([
           style({opacity: .1, offset: 0}),
           style({opacity: .5,  offset: 0.3}),
           style({opacity: 1,     offset: 1.0})
         ]))
      ]),
      transition(':leave', [

          // styles at start of transition
          style({ opacity: 1 }),
          // animation and styles at end of transition
          animate('5s', style({ opacity: 0 }))
      ]),
    ])
  ]
})


export class FeedNavComponent implements OnInit {

  @Output() indexChange = new EventEmitter<string>();
  @Input() data: any;
  titleString: string = "";
  titleArray: any[]=[];
  id: string;
  activeId: number = 2;

  constructor(
    private _globalService: GlobalService,
    private _feedService: PrismicService
  ) { }

  ngOnInit(): void{
    this.createTitleArray();
  }

  updateId(i){
    this.activeId = i;
    this.indexChange.emit(i);
  }

  createTitleArray(){
    let title;
    for (let d of this.data.results) {
      title = d.data["portfolio-video"].video_title.value["0"].text;
      this.titleArray.push(title);
    }
  }

}
