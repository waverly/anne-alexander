import { Component, Input, OnInit, OnChanges, HostListener} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {GlobalService} from '../shared/variables.service';
import { ResponsiveModule } from 'ng2-responsive';
import { RESPONSIVE_DIRECTIVE } from 'ng2-responsive/responsive';
import {MatchMediaService} from '../shared/match-media.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navState', [
      state('0', style({
        top:'-100vh'
      })),
      state('1',   style({
        top:'0'
      })),
      state('3',   style({
        top:'auto'
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ]),
    trigger('navUlState', [
      state('0', style({
      })),
      state('1',   style({
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})
export class NavComponent implements OnInit {



     route: string;
     getSegment: Function= (url, index) =>{
       return url.replace(/^https?:\/\//, '').split('/')[index];
    };






     constructor(location: Location, router: Router, public _globalService: GlobalService,
       public _responsiveModule: ResponsiveModule, public _matchMediaService: MatchMediaService) {


       router.events.subscribe((val) => {
        if(this.getSegment(location.path(), 1) == 'styling'){
          this.route='/styling';
          this._globalService.isStyling=true;
        }else if(location.path() != ''){
           this.route = location.path();
           this._globalService.isStyling=false;
        }else{
          this.route = location.path();
          this._globalService.isStyling=false;
        }


        if(location.path() == '/about'){
          this._globalService.isAbout=true;
        }else{
          this._globalService.isAbout=false;
        }
        //  else {
        //    this.route = 'Home'
        //  }
       });
     }


      ngOnInit() {
        this._globalService.toggleNav();
        // if(RESPONSIVE_DIRECTIVE.IsMobile){
        //   this.isNav=true;
        // }


      }

      // openNav() {
      //   this.isNav=1;
      // }
      //
      // closeNav() {
      //   setTimeout(() => {
      //     this.isNav=0;
      //   }, 3000);
      // }


      @HostListener('window:resize', ['$event'])
      onResize(event) {
        console.log(event);
        event.target.innerWidth;
        this._globalService.toggleNav();
      }












}
