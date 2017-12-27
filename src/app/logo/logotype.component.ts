import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/variables.service';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-logotype',
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.scss'],
  animations: [
    trigger('navLiState', [
      state('0', style({
        height:'0px',
        position: 'absolute'
      })),
      state('1',   style({
        height:'50px',
        position: 'relative'
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
export class LogotypeComponent implements OnInit {

  constructor(
    private _globalService: GlobalService
  ) { }

  ngOnInit() {
  }

}
