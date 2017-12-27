import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PrismicService } from '../../shared/prismic.service';

import {GlobalService} from '../../shared/variables.service';
import {IStyling}from './styling';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  // selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  styling: IStyling;
  isBackgroundStyling: boolean=false;


     constructor(
       private _globalService: GlobalService,
       private _prismicService: PrismicService,
       @Inject(DOCUMENT) private document: Document
     ){}

    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }



     ngOnInit(): void{
      this._globalService.setLoading(true);
       console.log('ng on init');
       console.log(this.styling);
       if(!this.styling){
         this.getPage(0);
       }
     }



     concatResults(obj): void{
      this.styling.results= this.styling.results.concat(obj.results);
      this.styling.next_page=obj.next_page;
      this.styling.page=obj.page;
      this.styling.total_pages=obj.total_pages;
      this.styling.prev_page=obj.prev_page;
     }

     getPage(page): void{
       this._prismicService.getFeed('styling', page)
       .subscribe(
         styling=>{
           if(page==0){
             this.styling=styling;
             this._globalService.setLoading(false);
           }else{this.concatResults(styling)}
         },
         error=>{
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
            if(this.styling){
              if((this.styling.page+1)<this.styling.total_pages){
                this.getPage(this.styling.next_page);
              }
            }
        }
      }



      showBackgroundStyling(value: boolean){
        this.isBackgroundStyling=value;
      }

}
