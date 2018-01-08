import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { FeedComponent } from './feed/feed.component';
import { FeedDetailComponent } from './feed/feed-detail/feed-detail.component';
import { FeedNavComponent } from './feed/feed-nav/feed-nav.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { SvgComponent } from './feed/svg/svg.component';
import { ShareComponent } from './share/share.component';
import { LogoComponent } from './logo/logo.component';
import { LogotypeComponent } from './logo/logotype.component';
import { GlobalService } from './shared/variables.service';
import { EncodeURIPipe } from './shared/encodeURI.pipe';
import { ResponsiveModule } from 'ng2-responsive';

import { UrlPipe } from './shared/url.pipe';

import { PrismicService } from './shared/prismic.service';

// import { SafePipe } from './shared/safeUrl.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    SvgComponent,
    ShareComponent,
    LogoComponent,
    LogotypeComponent,
    FeedComponent,
    FeedNavComponent,
    FeedDetailComponent,
    EncodeURIPipe,
    UrlPipe
    // SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    SharedModule,
    RouterModule.forRoot([
      {path:'', component: FeedComponent, pathMatch: 'full'},
      {path: 'portfolio/:id', component: FeedDetailComponent },
      {path: 'about', component: AboutComponent},
      {path: '**', redirectTo: '', pathMatch: 'full'}
      // ,
      // { path: 'editorial', component: FeedDetailComponent },
      // { path: 'styling/:styling', component: StylingDetailComponent },
      // { path: 'styling', component: StylingComponent },

    ]),
  ],
  providers: [GlobalService, PrismicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
