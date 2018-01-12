import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/variables.service';
import { fadeInAnimation } from './../_animation/index';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation]
})
export class LogoComponent implements OnInit {

  constructor(
   private _globalService: GlobalService
  ) { }

  ngOnInit() {
  }

}
