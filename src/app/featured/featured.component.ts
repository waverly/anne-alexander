import { Component, OnInit } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
    feed: any;
    errorMessage: string;

  constructor(
    private _feedService: PrismicService,
  ) { }

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
          console.log(this.feed);
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

}
