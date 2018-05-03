import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

import { FeedComponent } from "./feed/feed.component";
import { FeedDetailComponent } from "./feed/feed-detail/feed-detail.component";
import { FeedNavComponent } from "./feed/feed-nav/feed-nav.component";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { NavComponent } from "./nav/nav.component";
import { SvgComponent } from "./feed/svg/svg.component";
import { LogoComponent } from "./logo/logo.component";
import { GlobalService } from "./shared/variables.service";
import { EncodeURIPipe } from "./shared/encodeURI.pipe";
import { ResponsiveModule } from "ng2-responsive";

import { UrlPipe, VideoPipe } from "./shared/url.pipe";
import { FeaturedComponent } from "./featured/featured.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    SvgComponent,
    LogoComponent,
    FeedComponent,
    FeedNavComponent,
    FeedDetailComponent,
    EncodeURIPipe,
    UrlPipe,
    VideoPipe,
    FeaturedComponent
    // SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: "",
        component: FeedComponent,
        pathMatch: "full",
        data: { state: "home" }
      },
      {
        path: "portfolio",
        component: FeaturedComponent,
        pathMatch: "full",
        data: { state: "featured" }
      },
      {
        path: "portfolio/:id",
        component: FeedDetailComponent,
        pathMatch: "full",
        data: { state: "detail" }
      },
      {
        path: "about",
        component: AboutComponent,
        pathMatch: "full",
        data: { state: "about" }
      },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ])
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
