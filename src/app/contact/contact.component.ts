import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/variables.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _globalService: GlobalService,) {
  }

  ngOnInit() {
    this._globalService.setLoading(false);
  }

}
