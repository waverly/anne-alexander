import { Component, OnInit } from '@angular/core';
import {PrismicService} from './../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: any;
  bgImgStem: Object;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _feedService: PrismicService,
      private _globalService: GlobalService
    ) { }

    ngOnInit(): void{
     this._globalService.setLoading(true);
      console.log('ng on init');
      if(!this.feed){
        this.getPage(0);
      }
    }

    getPage(page): void{
      this._feedService.getFeed('information', page)
      .subscribe(
        feed=>{
          if(page==0){
            this.feed=feed;
            console.log('in feed');
            console.log(this.feed);
            this._globalService.setLoading(false);
          }else{
            console.log('in else block');
         }
        },
        error=>{
          console.log('there was an error');
          this.errorMessage=error;
          this._globalService.setLoading(false);
        }
      );
    }

}
