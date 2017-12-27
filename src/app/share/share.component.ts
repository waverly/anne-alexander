import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {GlobalService} from '../shared/variables.service';

// import { EncodeURIPipe } from './../shared/encodeURI.pipe';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  animations: [
    trigger('shareState', [
      state('0', style({
        left:'-200px'
      })),
      state('1',   style({
        left:'0px'
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})
export class ShareComponent implements OnInit {
isShare: boolean;
encodedRoute: string;

 constructor(location: Location, router: Router, public _globalService: GlobalService) {
   router.events.subscribe((val) => {

     this.encodedRoute = encodeURI('http://alealimay.com'+location.path());

   });
 }


  ngOnInit() {
    this.isShare=false;
  }

  openShare(){
    this.isShare=!this.isShare;
  }




}
