import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { FeedComponent } from './feed.component';
import {StylingComponent} from './styling/styling.component';
import {StylingDetailComponent} from './styling/styling-detail/styling-detail.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component';
// import { ProductFilterPipe } from './product-filter.pipe';
import { FeedGuard } from './feed-guard.service';
import { PrismicService } from '../shared/prismic.service';
// import {SafePipe} from './../shared/safeUrl.pipe';

import { UrlPipe } from './../shared/url.pipe';

import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgDraggableModule } from 'angular-draggable';
import { SvgComponent } from './svg/svg.component';
import { FeedNavComponent } from './feed-nav/feed-nav.component';

@NgModule({
    declarations: [
        FeedComponent,
        FeedDetailComponent,
        StylingComponent,
        StylingDetailComponent,
        SvgComponent,
        UrlPipe,
        FeedNavComponent


    ],
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        NgDraggableModule,
        RouterModule.forChild([
        ])
    ],
    providers: [
        FeedGuard
        // SafePipe
    ]
})
export class FeedModule {}
