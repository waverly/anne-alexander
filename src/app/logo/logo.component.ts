import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/variables.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(
   private _globalService: GlobalService
  ) { }

  ngOnInit() {
  }

}
