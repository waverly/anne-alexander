webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_animation/fade-in.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
exports.fadeInAnimation = animations_1.trigger('fadeInAnimation', [
    // route 'enter' transition
    animations_1.transition(':enter', [
        // styles at start of transition
        animations_1.style({ opacity: 0 }),
        // animation and styles at end of transition
        animations_1.animate('.6s', animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition(':leave', [
        // styles at start of transition
        animations_1.style({ opacity: 1 }),
        // animation and styles at end of transition
        animations_1.animate('.6s', animations_1.style({ opacity: 0 }))
    ])
]);
// import { trigger, state, animate, transition, style } from '@angular/animations';
//
// export const fadeInAnimation =
//     trigger('fadeInAnimation', [
//         // route 'enter' transition
//         transition(':enter', [
//
//             // styles at start of transition
//             style({ opacity: 0 }),
//
//             // animation and styles at end of transition
//             animate('1s', style({ opacity: 1 }))
//         ]),
//     ]);
// transition('* => *', [
//
//   query(':enter', style({ opacity: 0 }), {optional: true}),
//
//   query(':enter', stagger('3000s', [
//     animate('1s ease-in', keyframes([
//       style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//       style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
//       style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
//     ]))]), {optional: true})
// ])
// export const fadeInAnimation =
//     trigger('fadeInAnimation', [
//         // route 'enter' transition
//         transition(':enter', [
//
//                     // styles at start of transition
//                     style({ opacity: 0 }),
//
//                     // animation and styles at end of transition
//
//                       animate('5s ease-in', keyframes([
//                         style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//                         style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
//                         style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
//                       ]))
//
//                     // end of animation
//           ]),
//           transition(':leave', [
//             // styles at start of transition
//             style({ opacity: 1 }),
//
//             // animation and styles at end of transition
//
//               animate('5s ease', keyframes([
//                 style({opacity: .75, transform: 'translateY(-75%)', offset: 0}),
//                 style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
//                 style({opacity: 0, transform: 'translateY(0)',     offset: 1.0}),
//               ]))
//           ])
// end of transition
// ]);


/***/ }),

/***/ "../../../../../src/app/_animation/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/_animation/fade-in.animation.ts"));
__export(__webpack_require__("../../../../../src/app/_animation/slide-in-out.animation.ts"));


/***/ }),

/***/ "../../../../../src/app/_animation/router.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
exports.routerTransition = animations_1.trigger('routerTransition', [
    animations_1.transition('* => *', [
        animations_1.query(':enter', [
            animations_1.style({ opacity: 0 })
        ], { optional: true }),
        animations_1.query(':leave', [
            animations_1.style({ opacity: 1 }),
            animations_1.animate('.6s', animations_1.style({ opacity: 0 }))
        ], { optional: true }),
        animations_1.query(':enter', [
            animations_1.style({ opacity: 0 }),
            animations_1.animate('.6s', animations_1.style({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/_animation/slide-in-out.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
exports.slideInOutAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
animations_1.trigger('slideInOutAnimation', [
    // end state styles for route container (host)
    animations_1.state('*', animations_1.style({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    animations_1.transition(':enter', [
        // styles at start of transition
        animations_1.style({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        animations_1.animate('.5s ease-in-out', animations_1.style({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    animations_1.transition(':leave', [
        // animation and styles at end of transition
        animations_1.animate('.5s ease-in-out', animations_1.style({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"about\" *ngIf=\"feed\">\n  <div class=\"text-wrap\">\n\n    <div class=\"about-block\">\n      <h3>background</h3>\n      <div class=\"about-text\">\n        <p>{{feed.results[\"0\"].data.information.background.value[\"0\"].text}}</p>\n      </div>\n    </div>\n\n    <div class=\"about-block\">\n      <h3>{{feed.results[\"0\"].data.information.body.value[\"0\"][\"non-repeat\"][\"section-title\"].value[\"0\"].text}}</h3>\n      <div class=\"about-list\">\n        <ul [ngClass]=\"columnWrap()\">\n          <li *ngFor=\"let item of feed.results['0'].data.information.body.value['0'].repeat\">\n            {{ item[\"client-name\"].value[\"0\"].text }}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"about-block\">\n      <h3>{{feed.results[\"0\"].data.information.body.value[1][\"non-repeat\"][\"section-title\"].value[\"0\"].text}}</h3>\n      <div class=\"about-list\">\n        <ul>\n          <li *ngFor=\"let item of feed.results['0'].data.information.body.value[1].repeat\">\n            <a [href]=\"item['contact-item'].value['0'].spans['0'].data.value.url\">\n              {{ item[\"contact-item\"].value[\"0\"].text }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: errata;\n  src: url(\"/assets/fonts/errata.otf\") format(\"opentype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.about {\n  position: relative;\n  width: 100vw;\n  height: auto; }\n\n.about h3 {\n    padding-bottom: 1rem; }\n\n.text-wrap {\n  position: relative;\n  width: 500px;\n  margin: auto; }\n\n.about-block {\n  margin: 5rem 0rem; }\n\n.about-text p {\n  font-size: 14px;\n  line-height: 19px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  margin-top: 20px; }\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .about-text p {\n      font-size: 12px;\n      line-height: 17px; } }\n\n.about-text p:nth-child(1) {\n    margin-top: 0; }\n\n.column-wrap {\n  -webkit-columns: 2;\n          columns: 2; }\n\n.normal {\n  background-color: blue; }\n\n.about-list li a {\n  font-size: inherit; }\n\n@media (max-width: 767px) {\n  .text-wrap {\n    width: 100vw !important;\n    padding: 25px; }\n  .about-block {\n    margin: 0rem 0rem;\n    margin-top: 3rem; }\n    .about-block:first-of-type {\n      margin-top: 7em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(_route, _router, _feedService, _globalService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
        this._globalService = _globalService;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        console.log('ng on init');
        if (!this.feed) {
            this.getPage(0);
        }
    };
    AboutComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getFeed('information', page)
            .subscribe(function (feed) {
            if (page == 0) {
                _this.feed = feed;
                console.log('in feed');
                console.log(_this.feed);
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    AboutComponent.prototype.columnWrap = function () {
        if (this.feed.results["0"].data.information.body.value["0"].repeat.length > 5) {
            return 'column-wrap';
        }
        else {
            return 'normal';
        }
    };
    AboutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            prismic_service_1.PrismicService,
            variables_service_1.GlobalService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-logo></app-logo>\n<app-nav></app-nav>\n\n<!-- <router-outlet></router-outlet> -->\n<main [@routerTransition]=\"getRouterOutletState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n\n<app-svg  *ngIf=\"this.currentRoute==='home'\"></app-svg>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: errata;\n  src: url(\"/assets/fonts/errata.otf\") format(\"opentype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\nhtml {\n  background-color: #000000; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh; }\n\n:host main {\n    position: relative; }\n\n:host /deep/ router-outlet ~ * {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_animation_1 = __webpack_require__("../../../../../src/app/_animation/router.animation.ts");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var index_1 = __webpack_require__("../../../../../src/app/_animation/index.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        var _this = this;
        router.events.subscribe(function (val) {
            if (location.path() != '') {
                _this.currentRoute = location.path();
            }
            else {
                _this.currentRoute = 'home';
            }
        });
    }
    AppComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation, router_animation_1.routerTransition],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var shared_module_1 = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var feed_component_1 = __webpack_require__("../../../../../src/app/feed/feed.component.ts");
var feed_detail_component_1 = __webpack_require__("../../../../../src/app/feed/feed-detail/feed-detail.component.ts");
var feed_nav_component_1 = __webpack_require__("../../../../../src/app/feed/feed-nav/feed-nav.component.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var svg_component_1 = __webpack_require__("../../../../../src/app/feed/svg/svg.component.ts");
var logo_component_1 = __webpack_require__("../../../../../src/app/logo/logo.component.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var encodeURI_pipe_1 = __webpack_require__("../../../../../src/app/shared/encodeURI.pipe.ts");
var ng2_responsive_1 = __webpack_require__("../../../../ng2-responsive/index.js");
var url_pipe_1 = __webpack_require__("../../../../../src/app/shared/url.pipe.ts");
var featured_component_1 = __webpack_require__("../../../../../src/app/featured/featured.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                nav_component_1.NavComponent,
                svg_component_1.SvgComponent,
                logo_component_1.LogoComponent,
                feed_component_1.FeedComponent,
                feed_nav_component_1.FeedNavComponent,
                feed_detail_component_1.FeedDetailComponent,
                encodeURI_pipe_1.EncodeURIPipe,
                url_pipe_1.UrlPipe,
                featured_component_1.FeaturedComponent
                // SafePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_responsive_1.ResponsiveModule,
                shared_module_1.SharedModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: feed_component_1.FeedComponent, pathMatch: 'full', data: { state: 'home' } },
                    { path: 'portfolio', component: featured_component_1.FeaturedComponent, pathMatch: 'full', data: { state: 'featured' } },
                    { path: 'portfolio/:id', component: feed_detail_component_1.FeedDetailComponent, pathMatch: 'full', data: { state: 'detail' } },
                    { path: 'about', component: about_component_1.AboutComponent, pathMatch: 'full', data: { state: 'about' } },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ]),
            ],
            providers: [variables_service_1.GlobalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/featured/featured.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"featured-wrap\" *ngIf=\"feed\">\n  <ul>\n    <li *ngFor=\"let f of feed.results; index as i\">\n      <a\n          [attr.id]=\"i\"\n          [routerLink]=\"['/','portfolio', f.uid]\">\n        <h3>\n        {{ i < 10 ? \"0\"+i+\".\" : i+\".\"  }} {{f.data[\"portfolio-video\"].video_title.value[\"0\"].text}}\n        </h3>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/featured/featured.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.featured-wrap {\n  width: 100vw;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: left; }\n@media (max-width: 767px) {\n  .featured-wrap {\n    width: 100vw;\n    height: auto;\n    margin: 100px 0;\n    min-height: auto; }\n    .featured-wrap ul {\n      padding: 25px; }\n      .featured-wrap ul li {\n        padding: .5em 0; }\n        .featured-wrap ul li h3 {\n          font-size: 22px;\n          line-height: 28px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/featured/featured.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(_feedService) {
        this._feedService = _feedService;
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        if (!this.feed) {
            this.getPage(0);
        }
    };
    FeaturedComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getFeed('portfolio-video', page)
            .subscribe(function (feed) {
            if (page == 0) {
                _this.feed = feed;
                console.log(_this.feed);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
        });
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: 'app-featured',
            template: __webpack_require__("../../../../../src/app/featured/featured.component.html"),
            styles: [__webpack_require__("../../../../../src/app/featured/featured.component.scss")]
        }),
        __metadata("design:paramtypes", [prismic_service_1.PrismicService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;


/***/ }),

/***/ "../../../../../src/app/feed/feed-detail/feed-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-wrap\">\n  <div class=\"detail\" *ngIf=\"detail\">\n    <div class=\"iframe-container\">\n      <iframe  class=\"video\" [src]=\"transformUrl(detail.data['portfolio-video'].video_link.value.url) | UrlPipe\" frameborder=\"0\" allowfullscreen>></iframe>\n    </div>\n\n    <div class=\"text-wrap\">\n      <div class=\"left-text\">\n        <p>{{detail.data[\"portfolio-video\"]?.video_title.value[\"0\"].text}}</p>\n        <p>{{detail.data[\"portfolio-video\"]?.video_year.value[\"0\"].text}}</p>\n      </div>\n\n      <div class=\"right-text\">\n        <p>{{detail.data[\"portfolio-video\"]?.director_credits.value[\"0\"].text}}</p>\n        <p>{{detail.data[\"portfolio-video\"]?.dp_credits.value[\"0\"].text}}</p>\n        <p>{{detail.data[\"portfolio-video\"]?.producer_credits.value[\"0\"].text}}</p>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed-detail/feed-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.detail-wrap {\n  width: 100vw;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center; }\n.detail {\n  width: 60%;\n  height: auto; }\n.iframe-container {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%; }\n.iframe-container .video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.text-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 1rem; }\n.text-wrap .left-text {\n    width: 50%;\n    text-align: left;\n    -ms-flex-item-align: left;\n        align-self: left; }\n.text-wrap .right-text {\n    width: 50%;\n    text-align: right;\n    -ms-flex-item-align: right;\n        align-self: right; }\n.detail-video {\n  width: 100vw; }\n.detail-video iframe {\n    width: 60vw;\n    height: 60vh;\n    display: block;\n    margin: auto; }\n@media (max-width: 767px) {\n  .detail {\n    width: 100%; }\n  .text-wrap {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 25px; }\n    .text-wrap p {\n      font-size: 14px;\n      line-height: 19px; }\n    .text-wrap .left-text {\n      width: 100%;\n      text-align: center; }\n    .text-wrap .right-text {\n      width: 100%;\n      text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed-detail/feed-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// import {IFeed}from '../feed';
var FeedDetailComponent = /** @class */ (function () {
    function FeedDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    FeedDetailComponent.prototype.transformUrl = function (url) {
        url = url.slice(17, url.length);
        var newUrl = "https://player.vimeo.com/video" + url;
        return newUrl;
    };
    FeedDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        var type = this._route.snapshot.url["0"].path;
        console.log(type, id);
        this._feedService.getSingle('portfolio-video', id)
            .subscribe(function (data) { return _this.detail = data; }, function (error) { return _this.error = error; });
        console.log(this.detail);
        console.log('how did we do?');
    };
    FeedDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-feed-detail',
            template: __webpack_require__("../../../../../src/app/feed/feed-detail/feed-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/feed-detail/feed-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            prismic_service_1.PrismicService])
    ], FeedDetailComponent);
    return FeedDetailComponent;
}());
exports.FeedDetailComponent = FeedDetailComponent;


/***/ }),

/***/ "../../../../../src/app/feed/feed-nav/feed-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <ul class=\"feed-nav\">\n  <li *ngFor='let f of data.results; let i = index' class=\"feed-nav-li\">\n        <a\n            [ngClass]=\"{'active': i===activeId}\"\n            [attr.id]=\"i\"\n            (mouseenter)=\"updateId(i)\"\n            *ngIf=\"f.type\"\n            [routerLink]=\"['/','portfolio', f.uid]\">\n          <h4>{{ i < 10 ? \"0\"+i+\".\" : i+\".\"  }} </h4>\n        </a>\n    </li>\n  </ul>\n  <h4 class=\"project-title active\">\n    {{data.results[activeId].data[\"portfolio-video\"].video_title?.value[\"0\"].text}}\n  </h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed-nav/feed-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n.loaded {\n  color: green; }\n.wrap {\n  z-index: 15;\n  position: fixed; }\n.wrap .project-title {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: right;\n            transform-origin: right;\n    top: 0;\n    height: 50px;\n    width: 50vh;\n    line-height: 50px;\n    text-align: right;\n    right: 30px;\n    padding: 0 1em;\n    position: fixed;\n    z-index: 10; }\n.wrap .feed-nav {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n    -webkit-transform-origin: 100% 100%;\n    transform-origin: 100% 100%;\n    top: -65px;\n    bottom: 0;\n    height: 50px;\n    line-height: 50px;\n    right: 0;\n    position: fixed;\n    width: 100vh;\n    text-align: left; }\n.wrap .feed-nav li {\n      display: inline-block;\n      margin: 0 1rem; }\n.wrap a {\n    transition: all 0.5s ease;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease; }\n.wrap a:hover h3 {\n      color: #00C8FF; }\n.wrap a:active {\n      color: #00C8FF; }\n.wrap .active {\n    color: #00C8FF; }\n.wrap .project-title {\n    -webkit-transition: all 1s ease;\n    transition: all 1s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed-nav/feed-nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var FeedNavComponent = /** @class */ (function () {
    function FeedNavComponent(_globalService, _feedService) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.indexChange = new core_1.EventEmitter();
        this.titleString = "";
        this.titleArray = [];
        this.activeId = 2;
    }
    FeedNavComponent.prototype.ngOnInit = function () {
        this.createTitleArray();
    };
    FeedNavComponent.prototype.updateId = function (i) {
        this.activeId = i;
        this.indexChange.emit(i);
    };
    FeedNavComponent.prototype.createTitleArray = function () {
        var title;
        for (var _i = 0, _a = this.data.results; _i < _a.length; _i++) {
            var d = _a[_i];
            title = d.data["portfolio-video"].video_title.value["0"].text;
            this.titleArray.push(title);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FeedNavComponent.prototype, "indexChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FeedNavComponent.prototype, "data", void 0);
    FeedNavComponent = __decorate([
        core_1.Component({
            selector: 'app-feed-nav',
            template: __webpack_require__("../../../../../src/app/feed/feed-nav/feed-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/feed-nav/feed-nav.component.scss")],
            animations: [
                animations_1.trigger('fadeNav', [
                    // route 'enter' transition
                    animations_1.transition(':enter', [
                        // styles at start of transition
                        animations_1.style({ opacity: 0 }),
                        // animation and styles at end of transition
                        animations_1.animate('5s', animations_1.keyframes([
                            animations_1.style({ opacity: .1, offset: 0 }),
                            animations_1.style({ opacity: .5, offset: 0.3 }),
                            animations_1.style({ opacity: 1, offset: 1.0 })
                        ]))
                    ]),
                    animations_1.transition(':leave', [
                        // styles at start of transition
                        animations_1.style({ opacity: 1 }),
                        // animation and styles at end of transition
                        animations_1.animate('5s', animations_1.style({ opacity: 0 }))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [variables_service_1.GlobalService,
            prismic_service_1.PrismicService])
    ], FeedNavComponent);
    return FeedNavComponent;
}());
exports.FeedNavComponent = FeedNavComponent;


/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedWrap\" *ngIf=\"feed\">\n  <div class=\"background-image\">\n    <!-- <h1>AA</h1> -->\n    <img\n      *ngIf=\"feed.results\"\n      alt=\"\"\n      [src]=\"feed.results[i]?.data['featured-img']['featured-img']?.value.main.url\"\n      >\n  </div>\n  <div class=\"feed\">\n    <!-- <app-feed-nav (indexChange)=\"onIndexChanged( $event )\" [data]=\"feed\"></app-feed-nav> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: errata;\n  src: url(\"/assets/fonts/errata.otf\") format(\"opentype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\nbutton {\n  position: fixed;\n  z-index: 1000; }\n\nsvg {\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.white {\n  background-color: red;\n  width: 100vw;\n  height: 100vh; }\n\n.background-image {\n  width: 100vw;\n  z-index: 7;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272626;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0; }\n\n.background-image h1 {\n    width: 100vw;\n    text-align: center;\n    position: fixed; }\n\n.background-image img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.feed {\n  width: 100vw;\n  height: auto;\n  color: #FF3700; }\n\n.feed p {\n    color: #FF3700; }\n\n.feed-content {\n  width: 100vw; }\n\n.feed-nav {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  top: -65px;\n  bottom: 0;\n  height: 50px;\n  line-height: 50px;\n  right: 0;\n  /* padding: 0 1em; */\n  position: fixed;\n  z-index: 7;\n  width: 100vh;\n  text-align: left; }\n\n.feed-nav li {\n    display: inline-block;\n    margin: 0 1rem; }\n\n.feed-nav li h3 {\n      font-size: 25px;\n      color: #FF3700; }\n\n.project-title {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  top: 0;\n  height: 50px;\n  width: 200px;\n  line-height: 50px;\n  text-align: right;\n  right: 30px;\n  padding: 0 1em;\n  position: fixed;\n  z-index: 10;\n  font-size: 25px; }\n\n.feed-ul {\n  width: 100vw; }\n\n.feed-ul .feed-li {\n    z-index: 7;\n    position: relative;\n    margin-top: 0; }\n\n.feed-ul .feed-li:first-child {\n      margin-top: 0; }\n\n.feed-ul .feed-li:last-child {\n      margin-bottom: 0; }\n\n.feed-ul .feed-li a {\n      width: auto;\n      display: block;\n      position: relative; }\n\n.feed-ul .feed-li a:hover .title_left {\n        left: -10%; }\n\n.feed-ul .feed-li a:hover .title_right {\n        right: -10%; }\n\n.feed-ul .feed-li img {\n      display: block;\n      width: 100vw; }\n\n.feed-ul .feed-li h1 {\n      transition: all 0.5s ease;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      -o-transition: all 0.5s ease; }\n\n.feed-title {\n  position: absolute;\n  top: 50%;\n  right: -1%; }\n\n.title_left {\n  right: auto;\n  left: -5%; }\n\n@media (max-width: 767px) {\n  .background-image {\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var FeedComponent = /** @class */ (function () {
    function FeedComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.activeId = "2";
        this.i = 0;
        // src: string = "feed.results["0"].data["featured-img"]["featured-img"].value.main.url";
        this.show = false;
    }
    Object.defineProperty(FeedComponent.prototype, "stateName", {
        get: function () {
            return this.show ? 'show' : 'hide';
        },
        enumerable: true,
        configurable: true
    });
    FeedComponent.prototype.toggle = function () {
        this.show = !this.show;
        alert('toggling');
    };
    FeedComponent.prototype.ngOnInit = function () {
        if (!this.feed) {
            this.getPage(0);
        }
    };
    FeedComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getFeed('featured-img', page)
            .subscribe(function (feed) {
            if (page == 0) {
                _this.feed = feed;
                setInterval(function () { _this.imgCycle(); }, 6000);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
        });
    };
    FeedComponent.prototype.imgCycle = function () {
        if (this.feed) {
            console.log(this.feed.results.length, this.i);
            if (this.i < this.feed.results.length - 1) {
                this.i++;
                // console.log('in if', this.i);
            }
            else {
                this.i = 0;
                // console.log('in else',  this.i);
            }
        }
    };
    FeedComponent.prototype.onIndexChanged = function (index) {
        this.activeId = index;
    };
    FeedComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/feed.component.scss")]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [variables_service_1.GlobalService,
            prismic_service_1.PrismicService,
            Document])
    ], FeedComponent);
    return FeedComponent;
}());
exports.FeedComponent = FeedComponent;


/***/ }),

/***/ "../../../../../src/app/feed/svg/svg.component.html":
/***/ (function(module, exports) {

module.exports = "<svg id=\"svg\"></svg>\n"

/***/ }),

/***/ "../../../../../src/app/feed/svg/svg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\nsvg {\n  z-index: 13;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feed/svg/svg.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// import { fadeInAnimation } from './../../_animation/index';
__webpack_require__("../../../../snapsvg-cjs/dist/snap.svg-cjs.js");
var index_1 = __webpack_require__("../../../../../src/app/_animation/index.ts");
var SvgComponent = /** @class */ (function () {
    function SvgComponent(_router) {
        this._router = _router;
        this.location = '';
        this.location = _router.url;
    }
    SvgComponent.prototype.ngOnInit = function () {
        // attempt to call a fx first, on load, and see if it can act as a loading
        this.createSvg();
    };
    SvgComponent.prototype.createSvg = function () {
        // let svgArray = [
        //   "M-0.5,0.5v1020h1440V0.5H-0.5z M682.628,452.872L682.628,452.872L682.628,452.872L682.628,452.872l-569.893-86.478l565.358,85.08l0,0l1.349,6.175l0,0l135.379-138.565L682.628,452.872L682.628,452.872z",
        //   // "M-0.5,0.5v1020h1440V0.5H-0.5z M1361.474,943.74c-41.465,54.697-395.51,18.393-440.434-7.812c-67.84-39.574-386.412-17.389-446.426-12.167c-110.823,9.643-269.814,50.507-354.993,17.908c-85.179-32.599-65.102-189.413-8.191-325.603s23.698-275.865,2.048-354.272s95.827-183.67,178.16-198.585s448.164,52.034,555.761,24.536s353.631-36.235,395.12-28.418c112.253,21.149,44.239,106.919,36.167,218.903c-8.072,111.983,86.008,401.319,86.008,401.319S1402.94,889.043,1361.474,943.74z",
        //   // "M-0.5,0.5v1020h1440V0.5H-0.5zM1293.703,943.348c-54.523,41.694-323.063,8.224-372.662-7.42c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-212.997,22.125-298.176-10.474S132.59,802.925,69.555,669.46c-55.235-116.952-36.377-311.358,0-384.112c40.081-80.162-50.602-227.242,31.731-242.157s351.1,58.544,453.253,14.979c115.569-49.287,643.523-28.143,690.732,18.422c68.105,67.176,168.675,225.457,113.563,325.66c-54.107,98.376,15.031,207.086,30.061,260.528C1403.181,713.572,1350.484,899.927,1293.703,943.348z",
        //   "M-0.5,0.5v1020h1440V0.5H-0.5z M1350.382,911.377c-54.523,41.694-237.966,71.228-390.135-1.619c-122.973-58.87-380.973,36.79-508.309,59.896c-118.783,21.555-84.178-97.129-239.585-67.99C122.711,918.472,24.57,793.203,70.055,668.96c44.465-121.456-67.079-338.103,0-384.112c87.258-59.85,59.519-189.014,135.823-223.35c97.129-43.708,393.205,45.184,495.358,1.619c115.569-49.287,348.601,22.657,412.969,6.731c129.51-32.044,299.445,68.027,244.333,168.23c-54.107,98.376,18.692,335.124-12.016,403.217C1311.556,718.827,1407.163,867.955,1350.382,911.377z",
        //   "M-0.5,0.5v1020h1440V0.5H-0.5zM1293.703,943.348c-54.523,41.694-323.063,8.224-372.662-7.42c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-212.997,22.125-298.176-10.474S132.59,802.925,69.555,669.46c-55.235-116.952-36.377-311.358,0-384.112c40.081-80.162-7.384-176.34,74.949-191.255S500.85,40.074,554.539,58.17c114.356,25.916,619.053,13.632,673.541,42.115c88.071,49.699,185.866,201.764,130.754,301.967c-54.107,98.376,15.031,207.086,30.061,260.528C1403.181,713.572,1350.484,899.927,1293.703,943.348z",
        //   "M0,0v1020h1440V0H0zM1114.558,947.81c-54.523,41.694-143.418,3.263-193.017-12.381c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-184.01-15.577-269.189-48.176s-70.905-109.004-88.896-256.106c-16.933-136.519-11.641-200.017-46.975-334.131C48.241,194.604,139.467,121.681,221.8,106.766s137.455,59.908,229.526,41.917c134.403-29.632,364.45-100.38,552.572-82.99c327.237,34.779,410.547,235.856,355.435,336.059c-54.107,98.376-2.905,155.586,30.061,260.528C1448.119,871.929,1171.339,904.388,1114.558,947.81z"
        //
        // ];
        // let svgArray = [
        //   "M0,0v768h1024V0H0z M539.716,604.419c-11.64,4.762-68.961,59.597-13.756,14.814c25.477-20.667,55.579-31.985,30.956-39.719c-84.954-26.682,67.894-135.168-54.964-184.815c-122.858-49.647,14.951,212.937-68.735,42.005c-83.686-170.932-2.546,113.285-2.546,113.285s-13.71,181.447,17.713,17.632c1.318-6.87-1.665-71.312,0.107-59.637c1.38,9.088,128.51-64.831,60.849-4.293s-61.474,103.086,29.735,80.283C556.916,579.515,553.739,598.683,539.716,604.419z",
        //   "M0,0v768h1024V0H0z M830.626,667.62c-81.905-56.977-83.686,48.075-186.957,62.319c-103.272,14.244-83.686-53.416-172.713-55.197c-89.027-1.781-226.129,85.258-348.987,35.611c-122.858-49.647,12.464-169.152-71.222-340.084S32.233,111.15,86.358,65.795s215.446,33.83,375.695-12.464s149.566,64.1,356.109-5.342s162.03,194.079,94.369,254.618c-67.661,60.539-24.928,167.371,49.855,224.349C1037.169,583.934,912.531,724.597,830.626,667.62z",
        //   "M0,0v768h1024V0H0z M820.092,718.566c-61.219,83.195-73.152-2.59-176.424,11.654s-83.686-53.416-172.713-55.197s-219.275,129.333-245.262-0.603C208.351,587.704,90.101,562.478,50.747,370.55c-38.229-186.44,133.954-218.003,231.706-189.623s71.519,66.791,231.768,20.497S660.143,22.828,818.162,48.272s66.573,241.445,142.252,295.051s-40.203,54.077,1.972,183.916S881.582,635.004,820.092,718.566z",
        //   "M0,0v768h1024V0H0z M880.079,586.755c-61.219,83.195-6.56,151.948-109.831,166.192c-103.272,14.244-344.518-84.928-433.545-86.709c-89.027-1.781-286.165,119.82-312.152-10.116c-17.343-86.716,88.489-217.05,49.135-408.977C35.456,60.705,158.022,10.664,255.774,39.043s121.555,118.552,281.804,72.257S778.421-3.742,936.44,21.702s-123.369,248.43-47.69,302.036s125.728-34.684,122.838,173.418C1009.692,633.659,941.569,503.193,880.079,586.755z",
        //   "M0,0v768h1024V0H0z M987.02,696.587c-45.649,92.658-205.99,13.213-309.262,27.458C574.486,738.289,501.45,677.8,358.38,725.49C273.904,753.648,8.654,693.696,23.105,553.517c9.069-87.967,104.051-234.114,46.245-416.203c-22.881-72.074,88.672-126.65,186.424-98.27S368.658,60.77,528.908,14.476s24.07,149.42,182.089,174.863S813.07,270.132,888.75,323.738s125.728-34.684,122.838,173.418C1009.692,633.659,1026.89,615.658,987.02,696.587z"
        // ]
        var svgArray = [
            "M0,0v768h1024V0H0z M539.716,604.419c-11.64,4.762-68.961,59.597-13.756,14.814c25.477-20.667,55.579-31.985,30.956-39.719c-84.954-26.682,67.894-135.168-54.964-184.815c-122.858-49.647,14.951,212.937-68.735,42.005c-83.686-170.932-2.546,113.285-2.546,113.285s-13.71,181.447,17.713,17.632c1.318-6.87-1.665-71.312,0.107-59.637c1.38,9.088,128.51-64.831,60.849-4.293s-61.474,103.086,29.735,80.283C556.916,579.515,553.739,598.683,539.716,604.419z",
            "M0,0v768h1024V0H0z M830.626,667.62c-81.905-56.977-83.686,48.075-186.957,62.319c-103.272,14.244-83.686-53.416-172.713-55.197c-89.027-1.781-226.129,85.258-348.987,35.611c-122.858-49.647,12.464-169.152-71.222-340.084S32.233,111.15,86.358,65.795s215.446,33.83,375.695-12.464s149.566,64.1,356.109-5.342s162.03,194.079,94.369,254.618c-67.661,60.539-24.928,167.371,49.855,224.349C1037.169,583.934,912.531,724.597,830.626,667.62z",
            "M0,0v768h1024V0H0z M820.092,718.566c-61.219,83.195-73.152-2.59-176.424,11.654s-83.686-53.416-172.713-55.197s-219.275,129.333-245.262-0.603C208.351,587.704,90.101,562.478,50.747,370.55c-38.229-186.44,133.954-218.003,231.706-189.623s71.519,66.791,231.768,20.497S660.143,22.828,818.162,48.272s66.573,241.445,142.252,295.051s-40.203,54.077,1.972,183.916S881.582,635.004,820.092,718.566z",
            "M0,0v768h1024V0H0z M880.079,586.755c-61.219,83.195-6.56,151.948-109.831,166.192c-103.272,14.244-344.518-84.928-433.545-86.709c-89.027-1.781-286.165,119.82-312.152-10.116c-17.343-86.716,88.489-217.05,49.135-408.977C35.456,60.705,158.022,10.664,255.774,39.043s121.555,118.552,281.804,72.257S778.421-3.742,936.44,21.702s-123.369,248.43-47.69,302.036s125.728-34.684,122.838,173.418C1009.692,633.659,941.569,503.193,880.079,586.755z",
            "M0,0v768h1024V0H0z M987.02,696.587c-45.649,92.658-205.99,13.213-309.262,27.458C574.486,738.289,501.45,677.8,358.38,725.49C273.904,753.648,8.654,693.696,23.105,553.517c9.069-87.967,104.051-234.114,46.245-416.203c-22.881-72.074,88.672-126.65,186.424-98.27S368.658,60.77,528.908,14.476s24.07,149.42,182.089,174.863S813.07,270.132,888.75,323.738s125.728-34.684,122.838,173.418C1009.692,633.659,1026.89,615.658,987.02,696.587z",
            "M0,0v768h1024V0H0z M642.984,580.018c-61.219,83.195,141.227,129.143,37.955,143.387c-103.272,14.244-255.427-55.386-344.454-57.167c-89.027-1.781-358.287-19.567-296.571-136.828c28.115-53.419,102.613-114.527,63.259-306.455c-38.229-186.44,61.853-91.374,152.383-183.913c71.182-72.761,121.555,118.552,281.804,72.257S778.204-3.742,936.223,21.702S588.391,349.287,664.07,402.893s350.19-113.838,347.3,94.263C1009.474,633.659,704.473,496.455,642.984,580.018z",
            "M0,0v768h1024V0H0z M918.512,698.102c-204.866,121.004-205.995,27.928-309.266,42.173C505.974,754.518,501.45,677.8,358.38,725.49c-84.476,28.159-285.293,46.306-326.513-88.453c-27.286-89.203,35.389-303.42,3.851-392.834C14.246,183.329,56.784,45.831,255.774,39.043c101.73-3.47,84.944,49.254,245.193,2.96s301.19-34.632,348.415-15.742s56.159,64.5,72.412,150.07c16.253,85.57,156.36,126.539,57.166,309.501C929.462,577.129,996.191,652.221,918.512,698.102z"
        ];
        var svgCanvas;
        svgCanvas = Snap("#svg");
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) + 5;
        svgCanvas.attr({
            width: '100%',
            height: '100%',
            viewBox: "0, 0, 1024, 768",
            preserveAspectRatio: 'none'
        });
        var path = svgCanvas.path(svgArray[0]);
        var step1 = function () {
            //console.log('step1');
            path.animate({ d: svgArray[0]
            }, 1000, mina.easein, step2);
        };
        var step2 = function () {
            //console.log('step2');
            path.animate({ d: svgArray[1]
            }, 4000, mina.easein, step3);
        };
        var step3 = function () {
            //console.log('step3');
            path.animate({ d: svgArray[2]
            }, 4000, mina.easein, step4);
        };
        var step4 = function () {
            //console.log('step4');
            path.animate({ d: svgArray[3]
            }, 4000, mina.easein, step5);
        };
        var step5 = function () {
            // console.log('step5');
            path.animate({ d: svgArray[4]
            }, 4000, mina.easein, step6);
        };
        var step6 = function () {
            // console.log('step6');
            path.animate({ d: svgArray[5]
            }, 4000, mina.easein, step7);
        };
        var step7 = function () {
            // console.log('step7');
            path.animate({ d: svgArray[6]
            }, 4000, mina.easein, step2);
        };
        setTimeout(step1, 2000);
        // step1();
    };
    SvgComponent = __decorate([
        core_1.Component({
            selector: 'app-svg',
            template: __webpack_require__("../../../../../src/app/feed/svg/svg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/svg/svg.component.scss")],
            animations: [index_1.fadeInAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SvgComponent);
    return SvgComponent;
}());
exports.SvgComponent = SvgComponent;


/***/ }),

/***/ "../../../../../src/app/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" [@fadeInAnimation]>\n  <a [routerLink]=\"['/']\" class=\"nav-a\" >\n    <h3 class=\"logo\">Anne Alexander</h3>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: errata;\n  src: url(\"/assets/fonts/errata.otf\") format(\"opentype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.logo {\n  position: fixed;\n  width: auto;\n  height: auto;\n  bottom: 25px;\n  left: 25px;\n  margin-left: 0;\n  margin-top: 0;\n  z-index: 15;\n  font-family: 'errata', sans-serif; }\n\n.logo h3 {\n    line-height: 20px; }\n\n@media (max-width: 767px) {\n  .logo {\n    top: 10px;\n    left: 0;\n    width: 100vw;\n    height: 50px;\n    text-align: center; }\n    .logo h3 {\n      font-size: 25px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animation/index.ts");
var LogoComponent = /** @class */ (function () {
    function LogoComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        core_1.Component({
            selector: 'app-logo',
            template: __webpack_require__("../../../../../src/app/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logo/logo.component.scss")],
            // make fade in animation available to this component
            animations: [index_1.fadeInAnimation]
        }),
        __metadata("design:paramtypes", [variables_service_1.GlobalService])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;


/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\"\n  [class.nav_black]=\"route === '/portfolio' || route === '/about'\"\n >\n   <!-- (mouseenter)='openNav()' (mouseout)='closeNav()' -->\n  <ul class=\"nav-ul\">\n    <li class=\"nav-li\" >\n      <a [routerLink]=\"['/portfolio']\" class=\"nav-a\" [class.nav_active]=\"route === '/portfolio'\" >featured work</a>\n    </li>\n    <li class=\"nav-li\" >\n      <a [routerLink]=\"['/about']\" class=\"nav-a\" [class.nav_active]=\"route === '/about'\" >?</a>\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.nav {\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  width: 300px;\n  text-align: right;\n  z-index: 15; }\n.nav_black {\n  background-color: black; }\n.nav-ul {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative; }\n.nav-ul .nav-li {\n    width: auto;\n    margin-left: 25px;\n    position: relative;\n    display: inline-block; }\n.nav-ul .nav-li a {\n      width: 100%;\n      display: block;\n      height: 100%;\n      line-height: auto;\n      vertical-align: middle;\n      transition: all 0.5s ease;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      -o-transition: all 0.5s ease;\n      font-size: 14px;\n      color: #FF3700;\n      line-height: 20px; }\n.nav-ul .nav-li a:hover {\n        color: #00C8FF; }\n.nav-ul .nav-li a.nav_active {\n        color: #00C8FF; }\n.nav-ul.open .nav-li {\n  position: relative; }\n@media (max-width: 767px) {\n  .nav {\n    position: fixed;\n    top: auto;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    width: 100vw;\n    z-index: 15;\n    height: 50px;\n    padding-top: 10px; }\n  .nav-ul {\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding-start: 0px;\n    -webkit-padding-start: 0px; }\n    .nav-ul .nav-li {\n      margin-left: 25px;\n      margin-right: 25px; }\n      .nav-ul .nav-li a {\n        font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var ng2_responsive_1 = __webpack_require__("../../../../ng2-responsive/index.js");
var match_media_service_1 = __webpack_require__("../../../../../src/app/shared/match-media.service.ts");
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var NavComponent = /** @class */ (function () {
    function NavComponent(location, router, _globalService, _responsiveModule, _matchMediaService) {
        var _this = this;
        this._globalService = _globalService;
        this._responsiveModule = _responsiveModule;
        this._matchMediaService = _matchMediaService;
        this.getSegment = function (url, index) {
            return url.replace(/^https?:\/\//, '').split('/')[index];
        };
        router.events.subscribe(function (val) {
            if (_this.getSegment(location.path(), 1) == 'styling') {
                _this.route = '/styling';
                _this._globalService.isStyling = true;
            }
            else if (location.path() != '') {
                _this.route = location.path();
                _this._globalService.isStyling = false;
            }
            else {
                _this.route = location.path();
                _this._globalService.isStyling = false;
            }
            if (location.path() == '/about') {
                _this._globalService.isAbout = true;
            }
            else {
                _this._globalService.isAbout = false;
            }
            //  else {
            //    this.route = 'Home'
            //  }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this._globalService.toggleNav();
        // if(RESPONSIVE_DIRECTIVE.IsMobile){
        //   this.isNav=true;
        // }
    };
    // openNav() {
    //   this.isNav=1;
    // }
    //
    // closeNav() {
    //   setTimeout(() => {
    //     this.isNav=0;
    //   }, 3000);
    // }
    NavComponent.prototype.onResize = function (event) {
        console.log(event);
        event.target.innerWidth;
        this._globalService.toggleNav();
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavComponent.prototype, "onResize", null);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")],
            animations: [
                animations_1.trigger('navState', [
                    animations_1.state('0', animations_1.style({
                        top: '-100vh'
                    })),
                    animations_1.state('1', animations_1.style({
                        top: '0'
                    })),
                    animations_1.state('3', animations_1.style({
                        top: 'auto'
                    })),
                    animations_1.transition('0 => 1', animations_1.animate('500ms ease-in')),
                    animations_1.transition('1 => 0', animations_1.animate('500ms ease-out'))
                ]),
                animations_1.trigger('navUlState', [
                    animations_1.state('0', animations_1.style({})),
                    animations_1.state('1', animations_1.style({})),
                    animations_1.transition('0 => 1', animations_1.animate('500ms ease-in')),
                    animations_1.transition('1 => 0', animations_1.animate('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router, variables_service_1.GlobalService,
            ng2_responsive_1.ResponsiveModule, match_media_service_1.MatchMediaService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "../../../../../src/app/shared/encodeURI.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var EncodeURIPipe = /** @class */ (function () {
    function EncodeURIPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EncodeURIPipe.prototype.transform = function (value) {
        console.log(value);
        var url = encodeURI(value);
        console.log(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    EncodeURIPipe = __decorate([
        core_1.Pipe({ name: 'encodeURI' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], EncodeURIPipe);
    return EncodeURIPipe;
}());
exports.EncodeURIPipe = EncodeURIPipe;


/***/ }),

/***/ "../../../../../src/app/shared/match-media.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MatchMediaService = /** @class */ (function () {
    function MatchMediaService() {
        this.rules = {
            print: "print",
            screen: "screen",
            phone: '(max-width: 767px)',
            tablet: '(min-width: 768px) and (max-width: 1024px)',
            desktop: '(min-width: 1025px)',
            portrait: '(orientation: portrait)',
            landscape: '(orientation: landscape)',
            retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
        };
        this.Check = function (mq) {
            if (!mq) {
                return;
            }
            return window.matchMedia(mq).matches;
        };
        this.IsTablet = function () {
            return window.matchMedia(this.rules.tablet).matches;
        };
        this.IsDesktop = function () {
            return window.matchMedia(this.rules.desktop).matches;
        };
        this.IsPortrait = function () {
            return window.matchMedia(this.rules.portrait).matches;
        };
        this.IsLandscape = function () {
            return window.matchMedia(this.rules.landscape).matches;
        };
        this.IsRetina = function () {
            return window.matchMedia(this.rules.retina).matches;
        };
    }
    /**********************************************
        METHODS FOR CHECKING TYPE
     **********************************************/
    MatchMediaService.prototype.IsPhone = function () {
        return window.matchMedia(this.rules.phone).matches;
    };
    ;
    /**********************************************
        EVENT LISTENERS BY TYPE
     **********************************************/
    MatchMediaService.prototype.OnPhone = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.phone);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnTablet = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.tablet);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnDesktop = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.desktop);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnPortrait = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.portrait);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnLandscape = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.landscape);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MatchMediaService);
    return MatchMediaService;
}());
exports.MatchMediaService = MatchMediaService;


/***/ }),

/***/ "../../../../../src/app/shared/prismic.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
// import {Feed} from './feed';
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var PrismicService = /** @class */ (function () {
    function PrismicService(_http) {
        this._http = _http;
        this._getUrl = 'api/prismic/get/';
    }
    PrismicService.prototype.getFeed = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + 'all?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getSingle = function (type, uid) {
        console.log('in prismic service');
        return this._http.get(this._getUrl + 'single?type=' + type + '&uid=' + uid)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.handleError = function (error) {
        console.log("error", error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    PrismicService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PrismicService);
    return PrismicService;
}());
exports.PrismicService = PrismicService;


/***/ }),

/***/ "../../../../../src/app/shared/safeUrl.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        core_1.Pipe({ name: 'safe' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], SafePipe);
    return SafePipe;
}());
exports.SafePipe = SafePipe;


/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var match_media_service_1 = __webpack_require__("../../../../../src/app/shared/match-media.service.ts");
var safeUrl_pipe_1 = __webpack_require__("../../../../../src/app/shared/safeUrl.pipe.ts");
var youtubeEmbed_pipe_1 = __webpack_require__("../../../../../src/app/shared/youtubeEmbed.pipe.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                safeUrl_pipe_1.SafePipe,
                youtubeEmbed_pipe_1.YoutubeEmbedPipe
            ],
            providers: [prismic_service_1.PrismicService, variables_service_1.GlobalService, match_media_service_1.MatchMediaService],
            imports: [common_1.CommonModule],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                safeUrl_pipe_1.SafePipe,
                youtubeEmbed_pipe_1.YoutubeEmbedPipe
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "../../../../../src/app/shared/url.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var UrlPipe = /** @class */ (function () {
    function UrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    UrlPipe.prototype.transform = function (url) {
        // url = url.replace("watch?v=", "embed/");
        // console.log('yo');
        // console.log(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    UrlPipe = __decorate([
        core_1.Pipe({ name: 'UrlPipe' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], UrlPipe);
    return UrlPipe;
}());
exports.UrlPipe = UrlPipe;


/***/ }),

/***/ "../../../../../src/app/shared/variables.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var match_media_service_1 = __webpack_require__("../../../../../src/app/shared/match-media.service.ts");
var GlobalService = /** @class */ (function () {
    function GlobalService(_matchMediaService) {
        this._matchMediaService = _matchMediaService;
        this.pageLoading = true;
        this.isStyling = false;
        this.isAbout = false;
        this.isNav = '0';
    }
    GlobalService.prototype.setLoading = function (val) {
        this.pageLoading = val;
    };
    GlobalService.prototype.getValue = function (val) {
        return this.pageLoading;
    };
    GlobalService.prototype.toggleNav = function () {
        if (this._matchMediaService.IsPhone()) {
            if (this.isNav == '0') {
                this.isNav = '1';
            }
            else {
                this.isNav = '0';
            }
        }
        else {
            this.isNav = '3';
        }
        console.log(this.isNav);
        // if(DEVICES_DIRECTIVES.devices_directives_1.isMobile){
        //
        // }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GlobalService.prototype, "isNav", void 0);
    GlobalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [match_media_service_1.MatchMediaService])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;


/***/ }),

/***/ "../../../../../src/app/shared/youtubeEmbed.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var YoutubeEmbedPipe = /** @class */ (function () {
    function YoutubeEmbedPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeEmbedPipe.prototype.transform = function (id) {
        var url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeEmbedPipe = __decorate([
        core_1.Pipe({ name: 'youtubeEmbed' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], YoutubeEmbedPipe);
    return YoutubeEmbedPipe;
}());
exports.YoutubeEmbedPipe = YoutubeEmbedPipe;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map