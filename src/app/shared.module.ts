import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrismicService} from './shared/prismic.service';
import {GlobalService} from './shared/variables.service';

@NgModule({
  declarations: [

  ],
  providers:[PrismicService, GlobalService],
  imports:[CommonModule],
  exports:[
    CommonModule,
    FormsModule
  ]

})

export class SharedModule{

}
