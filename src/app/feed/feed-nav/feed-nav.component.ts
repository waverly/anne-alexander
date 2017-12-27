import { Component, OnInit, AfterViewInit, HostListener, Inject, Input, Output, EventEmitter } from '@angular/core';
import {PrismicService} from './../../shared/prismic.service';
import {GlobalService} from './../../shared/variables.service';
import { DOCUMENT } from '@angular/platform-browser';
import {IFeed}from './../feed';
// import fade in animation
import { fadeInAnimation } from './../../_animation/index';
import * as $ from 'jquery';

@Component({
  selector: 'app-feed-nav',
  templateUrl: './feed-nav.component.html',
  styleUrls: ['./feed-nav.component.scss']
})
export class FeedNavComponent implements OnInit {

  @Output() indexChange = new EventEmitter<string>();
  @Input() data: any;
  titleString: string = "Mary Jane Joseph";
  titleArray: any[]=[];
  id: string;

  constructor(
    private _globalService: GlobalService,
    private _feedService: PrismicService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void{
    console.log('in feed-nav ng on init');
    console.log(this.data);
    this.createTitleArray();
  }

  createTitleArray(){
    let title;
    for (let d of this.data.results) {
      title = d.data["portfolio-video"].video_title.value["0"].text;
      this.titleArray.push(title);
    }
  }

  aMouseEnter(event){
    this.titleString = this.titleArray[event.srcElement.id];
    this.id = event.srcElement.id;
    this.indexChange.emit(this.id);
  }



}
