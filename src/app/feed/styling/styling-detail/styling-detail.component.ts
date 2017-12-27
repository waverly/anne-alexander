import { Component, OnInit } from '@angular/core';
import {PrismicService} from '../../../shared/prismic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './styling-detail.component.html',
  styleUrls: ['../../feed-detail/feed-detail.component.scss', './styling-detail.component.scss']
})
export class StylingDetailComponent implements OnInit {

  styling_detail: Object;
  error: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _stylingService: PrismicService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params['styling'];
    let type = this._route.snapshot.url["0"].path;
    console.log(type);

     this._stylingService.getSingle(type,id)
     .subscribe(
       data=>this.styling_detail=data,
       error=>this.error=<any>error
     );
  }

}
