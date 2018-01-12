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
        animations_1.animate('5s', animations_1.style({ opacity: 1 }))
    ]),
    animations_1.transition(':leave', [
        // styles at start of transition
        animations_1.style({ opacity: 1 }),
        // animation and styles at end of transition
        animations_1.animate('5s', animations_1.style({ opacity: 0 }))
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
            animations_1.animate('5s', animations_1.style({ opacity: 0 }))
        ], { optional: true }),
        animations_1.query(':enter', [
            animations_1.style({ opacity: 0 }),
            animations_1.animate('5s', animations_1.style({ opacity: 1 }))
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
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.about {\n  position: relative;\n  width: 100vw;\n  height: auto; }\n\n.about h3 {\n    padding-bottom: 1rem; }\n\n.text-wrap {\n  position: relative;\n  width: 500px;\n  margin: auto; }\n\n.about-block {\n  margin: 5rem 0rem; }\n\n.about-text p {\n  font-size: 14px;\n  line-height: 19px;\n  font-family: helvetica;\n  letter-spacing: 1px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  margin-top: 20px; }\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .about-text p {\n      font-size: 12px;\n      line-height: 17px; } }\n\n.about-text p:nth-child(1) {\n    margin-top: 0; }\n\n.column-wrap {\n  -webkit-columns: 2;\n          columns: 2; }\n\n.normal {\n  background-color: blue; }\n\n.about-list li a {\n  font-size: inherit; }\n", ""]);

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
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\nhtml {\n  background-color: #000000; }\n\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  height: 100vh; }\n\n:host main {\n    position: relative; }\n\n:host /deep/ router-outlet ~ * {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

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
var contact_component_1 = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var svg_component_1 = __webpack_require__("../../../../../src/app/feed/svg/svg.component.ts");
var notFound_component_1 = __webpack_require__("../../../../../src/app/notFound/notFound.component.ts");
var share_component_1 = __webpack_require__("../../../../../src/app/share/share.component.ts");
var logo_component_1 = __webpack_require__("../../../../../src/app/logo/logo.component.ts");
var logotype_component_1 = __webpack_require__("../../../../../src/app/logo/logotype.component.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var encodeURI_pipe_1 = __webpack_require__("../../../../../src/app/shared/encodeURI.pipe.ts");
var ng2_responsive_1 = __webpack_require__("../../../../ng2-responsive/index.js");
var url_pipe_1 = __webpack_require__("../../../../../src/app/shared/url.pipe.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                nav_component_1.NavComponent,
                svg_component_1.SvgComponent,
                share_component_1.ShareComponent,
                logo_component_1.LogoComponent,
                logotype_component_1.LogotypeComponent,
                feed_component_1.FeedComponent,
                feed_nav_component_1.FeedNavComponent,
                feed_detail_component_1.FeedDetailComponent,
                notFound_component_1.notFoundComponent,
                encodeURI_pipe_1.EncodeURIPipe,
                url_pipe_1.UrlPipe
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

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <table>\n    <tr>\n      <td>\n        <div class=\"contact-content\">\n          <a class=\"a-hover\" href=\"mailto:info@alealimay.com\">info@alealimay.com</a>\n          <a class=\"a-hover\" href=\"https://www.instagram.com/alealimay/\" target=\"_blank\">instagram</a>\n          <a class=\"a-hover\" href=\"https://twitter.com/alealimay\" target=\"_blank\">twitter</a>\n          <a class=\"a-hover\" href=\"http://laleali.tumblr.com/\" target=\"_blank\">tumblr</a>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact {\n  width: 100vw;\n  height: 100vh; }\n\n.contact-content {\n  position: relative;\n  margin: auto;\n  width: 200px; }\n\n.contact-content a {\n    width: 100%;\n    display: block;\n    text-align: left;\n    clear: both; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
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
var ContactComponent = /** @class */ (function () {
    function ContactComponent(_globalService) {
        this._globalService = _globalService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(false);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [variables_service_1.GlobalService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


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
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n.detail-wrap {\n  width: 100vw;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center; }\n.detail {\n  width: 60%;\n  height: auto; }\n.iframe-container {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%; }\n.iframe-container .video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.text-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 1rem; }\n.text-wrap .left-text {\n    width: 50%;\n    text-align: left;\n    -ms-flex-item-align: left;\n        align-self: left; }\n.text-wrap .right-text {\n    width: 50%;\n    text-align: right;\n    -ms-flex-item-align: right;\n        align-self: right; }\n.detail-video {\n  width: 100vw; }\n.detail-video iframe {\n    width: 60vw;\n    height: 60vh;\n    display: block;\n    margin: auto; }\n", ""]);

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
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n.wrap {\n  z-index: 15;\n  position: fixed; }\n.wrap .project-title {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: right;\n            transform-origin: right;\n    top: 0;\n    height: 50px;\n    width: 50vh;\n    line-height: 50px;\n    text-align: right;\n    right: 30px;\n    padding: 0 1em;\n    position: fixed;\n    z-index: 10; }\n.wrap .feed-nav {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n    -webkit-transform-origin: 100% 100%;\n    transform-origin: 100% 100%;\n    top: -65px;\n    bottom: 0;\n    height: 50px;\n    line-height: 50px;\n    right: 0;\n    /* padding: 0 1em; */\n    position: fixed;\n    width: 100vh;\n    text-align: left; }\n.wrap .feed-nav li {\n      display: inline-block;\n      margin: 0 1rem; }\n.wrap a {\n    transition: all 0.5s ease;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    -o-transition: all 0.5s ease; }\n.wrap a:hover h3 {\n      margin-right: 5px;\n      color: #00C8FF; }\n.wrap a:active {\n      margin-right: 5px !important; }\n.wrap .active {\n    color: #00C8FF; }\n.wrap .project-title {\n    -webkit-transition: all 1s ease;\n    transition: all 1s ease; }\n", ""]);

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var prismic_service_1 = __webpack_require__("../../../../../src/app/shared/prismic.service.ts");
var variables_service_1 = __webpack_require__("../../../../../src/app/shared/variables.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var FeedNavComponent = /** @class */ (function () {
    function FeedNavComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
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
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [variables_service_1.GlobalService,
            prismic_service_1.PrismicService,
            Document])
    ], FeedNavComponent);
    return FeedNavComponent;
}());
exports.FeedNavComponent = FeedNavComponent;


/***/ }),

/***/ "../../../../../src/app/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feedWrap\" *ngIf=\"feed\">\n  <div class=\"background-image\">\n    <!-- <h1>AA</h1> -->\n    <img *ngIf=\"feed.results[this.activeId].data['portfolio-video']?.thumbnail\"\n      [src]=\"feed.results[this.activeId].data['portfolio-video']?.thumbnail.value.main.url\" alt=\"\">\n  </div>\n  <div class=\"feed\">\n    <app-feed-nav (indexChange)=\"onIndexChanged( $event )\" *ngIf=\"feed\" [data]=\"feed\"></app-feed-nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feed/feed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\nbutton {\n  position: fixed;\n  z-index: 1000; }\n\nsvg {\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.white {\n  background-color: red;\n  width: 100vw;\n  height: 100vh; }\n\n.background-image {\n  width: 100vw;\n  z-index: 7;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: #272626;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.background-image h1 {\n    width: 100vw;\n    text-align: center;\n    position: fixed; }\n\n.background-image img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.feed {\n  width: 100vw;\n  height: auto;\n  color: #FF3700; }\n\n.feed p {\n    color: #FF3700; }\n\n.feed-content {\n  width: 100vw; }\n\n.feed-nav {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  top: -65px;\n  bottom: 0;\n  height: 50px;\n  line-height: 50px;\n  right: 0;\n  /* padding: 0 1em; */\n  position: fixed;\n  z-index: 7;\n  width: 100vh;\n  text-align: left; }\n\n.feed-nav li {\n    display: inline-block;\n    margin: 0 1rem; }\n\n.feed-nav li h3 {\n      font-size: 25px;\n      color: #FF3700; }\n\n.project-title {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  top: 0;\n  height: 50px;\n  width: 200px;\n  line-height: 50px;\n  text-align: right;\n  right: 30px;\n  padding: 0 1em;\n  position: fixed;\n  z-index: 10;\n  font-size: 25px; }\n\n.feed-ul {\n  width: 100vw; }\n\n.feed-ul .feed-li {\n    z-index: 7;\n    position: relative;\n    margin-top: 0; }\n\n.feed-ul .feed-li:first-child {\n      margin-top: 0; }\n\n.feed-ul .feed-li:last-child {\n      margin-bottom: 0; }\n\n.feed-ul .feed-li a {\n      width: auto;\n      display: block;\n      position: relative; }\n\n.feed-ul .feed-li a:hover .title_left {\n        left: -10%; }\n\n.feed-ul .feed-li a:hover .title_right {\n        right: -10%; }\n\n.feed-ul .feed-li img {\n      display: block;\n      width: 100vw; }\n\n.feed-ul .feed-li h1 {\n      transition: all 0.5s ease;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      -o-transition: all 0.5s ease; }\n\n.feed-title {\n  position: absolute;\n  top: 50%;\n  right: -1%; }\n\n.title_left {\n  right: auto;\n  left: -5%; }\n", ""]);

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
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var FeedComponent = /** @class */ (function () {
    function FeedComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.activeId = "2";
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
        this._feedService.getFeed('portfolio-video', page)
            .subscribe(function (feed) {
            if (page == 0) {
                _this.feed = feed;
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
        });
    };
    FeedComponent.prototype.onIndexChanged = function (index) {
        this.activeId = index;
    };
    FeedComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/feed/feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/feed.component.scss")],
            animations: [
                animations_1.trigger('test', [
                    animations_1.transition('void => *', [
                        animations_1.style({ opacity: 0 }),
                        // animation and styles at end of transition
                        animations_1.animate('5s', animations_1.style({ opacity: 1 }))
                    ])
                ])
            ]
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
    SvgComponent.prototype.ngOnDestroy = function () {
        // this.createSvg.alert;
        alert('omg it is being destroyed');
    };
    SvgComponent.prototype.createSvg = function () {
        var alert = function alert() {
            alert('inside of createSvg');
        };
        var svgArray = [
            "M-0.5,0.5v1020h1440V0.5H-0.5z M682.628,452.872L682.628,452.872L682.628,452.872L682.628,452.872l-569.893-86.478l565.358,85.08l0,0l1.349,6.175l0,0l135.379-138.565L682.628,452.872L682.628,452.872z",
            "M-0.5,0.5v1020h1440V0.5H-0.5z M1361.474,943.74c-41.465,54.697-395.51,18.393-440.434-7.812c-67.84-39.574-386.412-17.389-446.426-12.167c-110.823,9.643-269.814,50.507-354.993,17.908c-85.179-32.599-65.102-189.413-8.191-325.603s23.698-275.865,2.048-354.272s95.827-183.67,178.16-198.585s448.164,52.034,555.761,24.536s353.631-36.235,395.12-28.418c112.253,21.149,44.239,106.919,36.167,218.903c-8.072,111.983,86.008,401.319,86.008,401.319S1402.94,889.043,1361.474,943.74z",
            "M-0.5,0.5v1020h1440V0.5H-0.5zM1293.703,943.348c-54.523,41.694-323.063,8.224-372.662-7.42c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-212.997,22.125-298.176-10.474S132.59,802.925,69.555,669.46c-55.235-116.952-36.377-311.358,0-384.112c40.081-80.162-50.602-227.242,31.731-242.157s351.1,58.544,453.253,14.979c115.569-49.287,643.523-28.143,690.732,18.422c68.105,67.176,168.675,225.457,113.563,325.66c-54.107,98.376,15.031,207.086,30.061,260.528C1403.181,713.572,1350.484,899.927,1293.703,943.348z",
            "M-0.5,0.5v1020h1440V0.5H-0.5z M1350.382,911.377c-54.523,41.694-237.966,71.228-390.135-1.619c-122.973-58.87-380.973,36.79-508.309,59.896c-118.783,21.555-84.178-97.129-239.585-67.99C122.711,918.472,24.57,793.203,70.055,668.96c44.465-121.456-67.079-338.103,0-384.112c87.258-59.85,59.519-189.014,135.823-223.35c97.129-43.708,393.205,45.184,495.358,1.619c115.569-49.287,348.601,22.657,412.969,6.731c129.51-32.044,299.445,68.027,244.333,168.23c-54.107,98.376,18.692,335.124-12.016,403.217C1311.556,718.827,1407.163,867.955,1350.382,911.377z"
        ];
        var svgCanvas;
        svgCanvas = Snap("#svg");
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) + 5;
        svgCanvas.attr({
            width: '100vw',
            height: '100vh',
            viewBox: "0, 0, 1440, 1020",
            preserveAspectRatio: 'none'
        });
        var path = svgCanvas.path(svgArray[0]);
        var close = function () {
            path.animate({ d: svgArray[0]
            }, 1000, mina.easein);
        };
        var step1 = function () {
            path.animate({ d: svgArray[0]
            }, 1000, mina.easein, step2);
        };
        var step2 = function () {
            path.animate({ d: svgArray[1]
            }, 4000, mina.easein, step3);
        };
        var step3 = function () {
            path.animate({ d: svgArray[2]
            }, 4000, mina.easein, step4);
        };
        var step4 = function () {
            path.animate({ d: svgArray[3]
            }, 4000, mina.easein, step2);
        };
        setTimeout(step1, 2000);
        // step1();
    };
    SvgComponent = __decorate([
        core_1.Component({
            selector: 'app-svg',
            template: __webpack_require__("../../../../../src/app/feed/svg/svg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feed/svg/svg.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SvgComponent);
    return SvgComponent;
}());
exports.SvgComponent = SvgComponent;


/***/ }),

/***/ "../../../../../src/app/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" [@fadeInAnimation]>\n  <a [routerLink]=\"['/']\" class=\"nav-a\" [class.nav_active]=\"route === '/'\" >\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    width=\"188.947px\" height=\"896.221px\" viewBox=\"0 0 188.947 896.221\" enable-background=\"new 0 0 188.947 896.221\" xml:space=\"preserve\">\n    <g>\n      <path fill=\"#FF1D25\" d=\"M140.256,750.475c1.361-0.196,2.464-0.354,3.498-0.503c0.341-0.233,0.665-0.586,1.054-0.686\n    \t\tc0.431-0.111,0.946,0.112,1.382,0.009c2.201-0.517,4.294,0.44,6.448,0.412c1.166-0.015,2.329-0.209,3.494-0.308\n    \t\tc0.356-0.03,0.723-0.061,1.074-0.01c1.91,0.275,3.818,0.573,5.725,0.871c0.319,0.05,0.632,0.135,0.946,0.214\n    \t\tc1.079,0.27,2.158,0.545,3.237,0.818c0.064-0.113,0.128-0.225,0.192-0.338c0.522,0.842,1.183,1.633,1.516,2.544\n    \t\tc0.224,0.611,0.019,1.396-0.062,2.095c-0.071,0.612-0.228,1.215-0.361,1.82c-0.064,0.29-0.103,0.606-0.248,0.856\n    \t\tc-1.092,1.891-2.125,3.825-3.343,5.633c-0.986,1.463-2.12,2.849-3.34,4.124c-1.597,1.669-3.274,3.277-5.047,4.756\n    \t\tc-1.298,1.083-2.747,2.019-4.229,2.837c-2.66,1.468-5.328,2.957-8.12,4.137c-2.297,0.971-4.775,1.522-7.18,2.233\n    \t\tc-1.242,0.367-2.485,0.756-3.754,0.998c-2.18,0.415-4.37,0.844-6.576,1.048c-3.851,0.356-7.718,0.548-11.578,0.803\n    \t\tc-0.317,0.021-0.696-0.114-0.941,0.018c-0.328,0.178-0.807,0.567-0.785,0.828c0.275,3.205,0.573,6.41,0.979,9.6\n    \t\tc0.432,3.391,1.011,6.764,1.479,10.151c0.268,1.943-0.168,3.799-1.02,5.536c-0.232,0.473-0.761,0.799-0.98,1.018\n    \t\tc0.81,0.741,1.779,1.204,1.843,1.77c0.153,1.355,1.254,1.643,2.001,2.325c1.5,1.37,3.008,2.733,4.558,4.046\n    \t\tc0.766,0.649,1.646,1.162,2.449,1.769c1.299,0.981,2.575,1.994,3.868,2.984c0.384,0.294,0.814,0.53,1.18,0.843\n    \t\tc0.271,0.232,0.471,0.545,0.793,0.93c0.142-0.025,0.539-0.096,1.011-0.181c0.27,1.652,1.453,2.488,2.576,3.501\n    \t\tc2.079,1.875,3.934,4.002,5.845,6.058c1.149,1.235,2.481,2.399,3.261,3.847c0.636,1.182,1.411,2.141,2.359,2.977\n    \t\tc1.997,1.761,4.188,3.315,6.082,5.175c1.51,1.482,2.718,3.276,4.023,4.96c1.293,1.668,2.548,3.366,3.803,5.063\n    \t\tc0.812,1.098,1.484,2.324,2.416,3.305c1.198,1.261,0.883,2.5,0.731,4.029c-0.154,1.55-0.675,2.752-1.81,3.411\n    \t\tc-1.703,0.989-3.605,1.499-5.586,0.376c-1.752-0.993-3.655-0.813-5.603-0.618c-1.626,0.163-3.296-0.105-4.946-0.192\n    \t\tc-0.12-0.006-0.241-0.138-0.353-0.127c-2.71,0.265-3.918-1.186-4.664-3.625c-0.396-1.293-1.532-2.356-2.322-3.531\n    \t\tc-1-1.486-1.94-3.015-2.993-4.462c-1.194-1.64-2.485-3.21-3.733-4.81c-0.306-0.393-0.601-0.795-0.92-1.178\n    \t\tc-2.112-2.534-4.203-5.087-6.353-7.589c-1.867-2.173-3.766-4.321-5.717-6.418c-1.378-1.481-2.874-2.852-4.307-4.283\n    \t\tc-1.792-1.79-3.531-3.634-5.372-5.372c-1.193-1.127-2.564-2.065-3.788-3.161c-1.591-1.425-3.083-2.962-4.681-4.379\n    \t\tc-1.151-1.021-2.411-1.919-3.614-2.884c-2.621-2.103-5.163-4.313-7.883-6.278c-1.339-0.967-2.513-2.168-4.225-2.732\n    \t\tc-1.153-0.38-1.986-1.686-3.004-2.528c-1.396-1.156-2.752-2.387-4.268-3.365c-1.952-1.26-4.062-2.274-6.071-3.449\n    \t\tc-1.038-0.607-1.992-1.356-3.01-2c-1.237-0.783-2.538-1.469-3.744-2.295c-1.247-0.854-2.396-1.848-3.618-2.74\n    \t\tc-1.758-1.285-3.533-2.547-5.325-3.783c-0.299-0.206-0.725-0.229-1.038-0.32c0-0.589,0-1.093,0-1.597\n    \t\tc-0.103-0.001-0.206-0.001-0.309-0.002c-0.025,0.333-0.051,0.666-0.073,0.961c-2.624-0.289-3.693-2.655-5.453-4.279\n    \t\tc0.017-0.03,0.156-0.273,0.212-0.373c-0.818,0-1.719,0-2.608,0c-0.207-1.028-0.383-1.903-0.597-2.967\n    \t\tc-0.333,0.381-0.534,0.612-0.772,0.884c-0.935-0.611-1.499-1.945-2.781-1.636c-0.389-0.319-0.692-0.567-0.994-0.814\n    \t\tc-0.043,0.202-0.087,0.403-0.17,0.791c-0.71-0.552-1.615-0.795-1.676-1.992c-0.011-0.223-0.692-0.542-1.09-0.586\n    \t\tc-0.702-0.079-1.341,0.011-1.379-1.029c-0.011-0.303-0.583-0.661-0.969-0.83c-0.123-0.054-0.478,0.42-0.762,0.685\n    \t\tc-1.97-1.232-3.995-2.588-6.111-3.781c-0.989-0.558-2.207-0.697-3.227-1.213c-1.196-0.604-2.27-1.444-3.433-2.12\n    \t\tc-0.757-0.44-1.65-0.67-2.351-1.177c-0.699-0.506-1.333-1.174-1.809-1.894c-0.374-0.566,0.263-1.003,1.182-0.854\n    \t\tc1.241,0.201,2.483,0.5,3.729,0.524c0.984,0.019,1.976-0.304,2.96-0.499c0.274-0.054,0.574-0.337,0.787-0.271\n    \t\tc1.393,0.426,2.362-0.763,3.611-0.891c0.822-0.085,1.614-0.43,2.434-0.569c1.42-0.242,2.911-0.226,4.264-0.658\n    \t\tc2.244-0.716,4.181,0.159,6.209,0.758c1.624,0.479,3.276,0.861,4.897,1.348c2.227,0.67,4.431,1.418,6.657,2.091\n    \t\tc0.555,0.168,1.175,0.111,1.735,0.269c2.63,0.742,5.236,1.569,7.874,2.277c3.418,0.918,6.846,1.809,10.293,2.608\n    \t\tc3.702,0.858,7.413,1.7,11.154,2.357c3.288,0.577,6.623,0.882,9.936,1.321c1.528,0.202,3.047,0.574,4.578,0.618\n    \t\tc1.6,0.046,3.282,0.125,4.667-0.996c0.019-0.015,0.067,0,0.099,0.009c1.667,0.497,3.043-0.492,4.502-0.948\n    \t\tc1.122-0.35,1.969-0.091,2.778,0.621c0.369,0.324,0.696,0.699,1.079,1.003c0.67,0.531,1.276,0.777,2.292,0.562\n    \t\tc1.639-0.347,3.151-0.939,4.719-1.435c1.267-0.4,2.605-0.637,3.84-1.207c1.531-0.707,3.088-1.362,4.598-2.11\n    \t\tc1.553-0.769,3.125-1.528,4.58-2.46c2.95-1.89,6.089-3.565,8.043-6.686c0.994-1.587,2.143-3.077,3.192-4.632\n    \t\tc0.883-1.308,0.586-2.062-1.132-3.437C141.922,752.117,141.163,751.318,140.256,750.475z M64.485,778.775\n    \t\tc-0.034,0.107-0.067,0.215-0.101,0.322c0.264,0.172,0.519,0.359,0.792,0.513c1.323,0.748,2.723,1.386,3.955,2.261\n    \t\tc1.085,0.771,2.072,1.555,3.216,1.287c0.49,0.289,0.793,0.468,1.097,0.646c0.226,0.132,0.445,0.277,0.68,0.389\n    \t\tc0.467,0.221,0.955,0.4,1.41,0.643c0.284,0.151,0.545,0.364,0.775,0.591c0.199,0.196,0.298,0.504,0.513,0.671\n    \t\tc0.684,0.535,1.472,0.953,2.092,1.55c1.716,1.65,3.587,3.017,5.861,3.81c0.462,0.161,1.01,0.501,1.21,0.909\n    \t\tc0.666,1.356,0.744,1.412,1.784,0.237c0.699,0.615,1.401,1.233,2.397,2.109c0.479-4.105-0.317-8.016,0.391-11.728\n    \t\tC81.763,781.565,73.124,780.17,64.485,778.775z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M123.685,699.339c-0.066,0.023-0.258,0.092-0.824,0.293c0.774,0.303,1.265,0.496,1.905,0.747\n    \t\tc0.023-0.116-0.024,0.119-0.08,0.399c0.274-0.049,0.751-0.162,0.76-0.132c0.282,0.924,1.211,0.727,1.801,1.092\n    \t\tc1.169,0.725,2.342,1.473,3.375,2.371c0.457,0.398,0.688,1.038,0.15,1.852c-0.958,1.449-1.792,3.027-1.716,5.143\n    \t\tc-3.287,1.91-6.623,4.041-10.132,5.834c-3.455,1.765-6.974,3.502-11.272,3.888c0.56,0.597,0.892,1.111,1.36,1.417\n    \t\tc1.051,0.689,1.881,1.617,3.059,2.238c1.046,0.552,3.125,0.9,2.771,3.029c-0.015,0.087,0.122,0.218,0.214,0.301\n    \t\tc0.146,0.131,0.314,0.238,0.682,0.509c-0.068-0.606-0.109-0.973-0.15-1.341c1.617,0.599,2.061,1.118,1.375,2.008\n    \t\tc1.815,1.294,3.63,2.573,5.427,3.877c0.806,0.585,1.55,1.258,2.373,1.818c0.51,0.347,1.117,0.784,1.675,0.776\n    \t\tc0.97-0.014,1.768,0.113,2.291,0.963c-0.187,0.106-0.449,0.253-0.781,0.441c1.341,0.862,2.586,1.699,3.869,2.472\n    \t\tc0.708,0.427,1.696,2.599,1.447,3.369c-0.238,0.737-0.531,1.462-0.695,2.215c-0.372,1.711-0.638,1.917-2.315,1.884\n    \t\tc-3.138-0.062-6.278-0.138-9.414-0.074c-1.173,0.024-2.346,0.643-3.505,0.602c-1.929-0.067-3.773-0.552-5.384-1.817\n    \t\tc-2.643-2.074-5.364-4.05-8.086-6.021c-1.997-1.446-4.088-2.764-6.065-4.235c-2.986-2.222-5.898-4.543-8.866-6.791\n    \t\tc-0.818-0.62-1.737-1.105-2.582-1.691c-1.397-0.969-2.785-1.952-4.149-2.966c-0.763-0.568-1.64-1.093-1.556-2.267\n    \t\tc0.008-0.105-0.1-0.225-0.168-0.328c-1.106-1.68-1.081-1.858,0.439-3.251c0.699-0.64,1.31-1.428,2.111-1.89\n    \t\tc1.044-0.602,2.221-0.993,3.369-1.391c2.955-1.023,5.969-1.89,8.879-3.025c2.981-1.163,5.884-2.532,8.788-3.884\n    \t\tc1.652-0.769,1.634-1.289,0.23-2.438c-2.217-1.815-4.372-3.705-6.585-5.525c-0.867-0.713-1.814-1.33-2.73-1.982\n    \t\tc-2.851-2.028-5.703-4.055-8.558-6.076c-1.205-0.854-2.44-1.667-3.625-2.547c-1.483-1.101-2.897-2.297-4.4-3.367\n    \t\tc-1.42-1.011-2.884-1.971-4.393-2.84c-0.922-0.531-2.197-0.621-2.89-1.326c-0.648-0.658-1.117-1.928-0.971-2.814\n    \t\tc0.167-1.016,0.708-2.427,2.138-2.398c1.32,0.027,2.6-0.585,3.985,0.036c1.455,0.652,3.046,0.735,4.516-0.184\n    \t\tc0.071-0.044,0.143-0.139,0.208-0.133c1.368,0.124,2.74,0.219,4.1,0.403c1.336,0.181,2.647,0.7,4.01,0.091\n    \t\tc0.221-0.099,0.541,0.046,0.813,0.034c0.618-0.027,1.245-0.173,1.848-0.1c0.628,0.075,1.259,0.292,1.843,0.549\n    \t\tc1.434,0.631,2.963,1.15,4.231,2.033c1.525,1.061,2.808,2.467,4.228,3.684c0.169,0.145,0.665-0.067,0.805,0.081\n    \t\tc0.844,0.892,1.628,1.841,2.524,2.877c1.995-0.215,3.099,1.418,4.414,2.72c0.51,0.505,1.133,0.895,1.656,1.388\n    \t\tc0.3,0.283,0.458,0.718,0.76,0.998c0.424,0.392,0.9,0.739,1.394,1.041c0.553,0.338,1.15,0.603,1.727,0.9\n    \t\tc-0.056,0.113-0.112,0.227-0.168,0.341c-0.275-0.108-0.551-0.216-1.112-0.436c1.273,2.013,3.38,2.471,4.948,3.626\n    \t\tC120.503,697.508,122.158,698.395,123.685,699.339z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M65.899,589.93c-2.736,0.424-4.273-0.797-4.318-3.322c-0.048-2.737-0.298-5.47-0.484-8.204\n    \t\tc-0.151-2.22-0.144-4.475-0.555-6.648c-0.58-3.064-0.402-6.13-0.426-9.195c-0.011-1.402,0.269-2.81,0.483-4.206\n    \t\tc0.055-0.359,0.361-0.68,0.845-0.961c0.131,0.909,0.261,1.818,0.392,2.727c0.148-0.01,0.296-0.019,0.443-0.029\n    \t\tc0.053-0.551,0.105-1.103,0.161-1.683c0.752,0.064,1.475,0.126,2.197,0.187c2.368,0.2,4.736,0.4,7.105,0.602\n    \t\tc0.155,0.013,0.38,0.12,0.452,0.053c1.287-1.192,2.275-0.241,3.361,0.386c0.339,0.195,1.027,0.267,1.266,0.06\n    \t\tc0.66-0.57,1.021-0.257,1.49,0.196c0.499,0.481,1.176,0.818,1.557,1.368c0.471,0.68,0.835,1.486,1.038,2.29\n    \t\tc0.455,1.795,0.798,3.62,1.155,5.438c0.168,0.856,0.361,1.724,0.375,2.589c0.038,2.375,0.411,4.644,1.148,6.933\n    \t\tc0.618,1.918,0.631,4.032,0.9,6.06c0.049,0.368,0.044,0.744,0.073,1.281c0.687-0.13,1.278-0.242,1.901-0.36\n    \t\tc0.455-2.297,0.727-4.587,1.419-6.742c0.3-0.935,1.459-1.598,2.244-2.367c0.08-0.078,0.289-0.08,0.418-0.044\n    \t\tc0.676,0.194,1.346,0.412,2.283,0.704c0.111,0.518,0.556,0.901,1.63,0.656c1.18-0.269,2.434-0.227,3.657-0.279\n    \t\tc0.314-0.013,0.633,0.138,0.952,0.199c0.523,0.1,1.069,0.328,1.568,0.254c1.356-0.2,2.158-0.06,3.475,0.509\n    \t\tc0.605,0.261,1.374,0.119,2.022,0.313c0.376,0.112,0.715,0.486,0.977,0.816c1.312,1.657,0.417,3.444,0.278,5.192\n    \t\tc-0.123,1.556-0.187,3.116-0.267,4.675c-0.021,0.423,0.11,0.887-0.022,1.264c-0.803,2.286,0.761,2.932,2.387,3.574\n    \t\tc0.256,0.101,0.469,0.309,0.954,0.639c0.089-2.349-0.062-4.515,0.31-6.588c0.433-2.411-0.083-4.939,0.983-7.258\n    \t\tc0.236-0.514,0.339-1.102,0.424-1.669c0.213-1.418,0.968-1.884,2.295-1.48c0.473,0.144,1.019,0.044,1.531,0.067\n    \t\tc0.249,0.011,0.653-0.037,0.722,0.088c0.625,1.134,1.753,0.674,2.652,0.955c1.722,0.539,3.92,0.016,4.981,2.168\n    \t\tc0.072-0.131,0.144-0.261,0.216-0.392c0.458,0.23,1.014,0.364,1.352,0.71c0.668,0.684,1.265,1.346,2.282,0.737\n    \t\tc0.327,0.509,0.617,0.96,0.907,1.411c0.116-0.058,0.233-0.116,0.349-0.174c-0.042-0.371-0.084-0.742-0.125-1.113\n    \t\tc0.126-0.048,0.253-0.096,0.379-0.144c0.104,0.352,0.235,0.699,0.307,1.057c0.311,1.545,0.668,3.084,0.887,4.642\n    \t\tc0.21,1.493,0.272,3.006,0.394,4.511c0.088,1.084,0.144,2.172,0.256,3.254c0.232,2.236,0.437,4.476,0.763,6.699\n    \t\tc0.19,1.295,0.654,2.548,0.871,3.84c0.088,0.525,0.009,1.478-0.268,1.597c-1.446,0.622-1.11,2.206-1.896,3.142\n    \t\tc-0.218,0.26-0.423,0.716-0.667,0.74c-1.48,0.147-2.987,0.363-4.453,0.224c-1.271-0.12-2.493-0.706-3.749-1.037\n    \t\tc-1.072-0.282-2.156-0.539-3.249-0.717c-0.448-0.073-0.938,0.162-1.401,0.135c-1.288-0.075-2.625-0.024-3.845-0.369\n    \t\tc-2.066-0.585-4.062-1.423-6.079-2.178c-1.595-0.597-3.191-1.198-4.757-1.867c-0.455-0.194-0.771-0.693-1.213-0.94\n    \t\tc-1.947-1.091-3.941-2.099-5.866-3.226c-0.769-0.45-1.371-1.175-2.11-1.688c-0.628-0.436-1.303-0.877-2.024-1.093\n    \t\tc-2.709-0.811-4.696-2.713-6.87-4.35c-0.977-0.736-2.034-1.371-3.093-1.987c-0.199-0.116-0.632-0.008-0.864,0.141\n    \t\tc-1.145,0.733-2.177,0.625-3.151-0.299c-0.109-0.103-0.26-0.25-0.381-0.241c-2.024,0.15-3.576-1.274-5.43-1.621\n    \t\tc-1.385-0.26-2.822-0.236-4.234-0.362C67.01,590.129,66.456,590.015,65.899,589.93z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M102.518,641.656c-0.465-0.244-1.016-0.398-1.382-0.747c-1.857-1.772-3.642-3.619-5.5-5.39\n    \t\tc-1.135-1.082-2.37-2.058-3.535-3.11c-1.249-1.128-2.45-2.308-3.704-3.43c-2.35-2.101-4.689-4.216-7.095-6.252\n    \t\tc-2.575-2.179-5.217-4.278-7.839-6.4c-1.018-0.824-0.709-1.852-0.492-2.873c0.076-0.355,0.172-0.706,0.209-0.859\n    \t\tc0.522-0.333,0.937-0.659,1.403-0.877c0.437-0.205,0.935-0.435,1.392-0.409c0.985,0.058,1.99,0.171,2.933,0.445\n    \t\tc1.877,0.546,3.789-0.097,5.695,0.358c1.714,0.409,3.532,0.435,5.309,0.513c1.033,0.045,2.076-0.178,3.117-0.203\n    \t\tc0.337-0.008,0.774,0.136,1.005,0.369c1.706,1.718,3.349,3.498,5.062,5.209c0.642,0.641,1.417,1.149,2.131,1.719\n    \t\tc0.033,0.026,0.09,0.063,0.086,0.088c-0.252,1.671,1.345,1.289,2.087,1.802c0.837,0.578,1.614,1.063,1.522,1.769\n    \t\tc0.819,0.612,1.795,0.958,1.932,1.513c0.439,1.775,1.84,2.771,3.144,3.381c0.959,0.449,0.908,1.346,1.645,1.768\n    \t\tc0.858,0.49,1.602,1.193,2.355,1.85c2.643,2.308,5.282,4.621,7.897,6.961c1.439,1.288,2.81,2.653,4.249,3.941\n    \t\tc0.277,0.248,0.719,0.386,1.102,0.428c1.587,0.174,2.208,0.805,2.092,2.328c-0.062,0.82,0.017,1.822-0.419,2.403\n    \t\tc-0.709,0.945-1.022,2.001-1.47,3.028c-0.058,0.133-0.336,0.318-0.381,0.288c-1.289-0.884-2.369,0.278-3.55,0.334\n    \t\tc-1.357,0.064-2.72-0.007-4.08,0.027c-2.698,0.066-5.395,0.177-8.094,0.244c-1.312,0.032-2.626,0.006-3.938,0.006\n    \t\tc-0.051,0.114-0.102,0.228-0.153,0.342c0.389,0.428,0.745,0.891,1.171,1.277c2.236,2.026,4.47,4.056,6.744,6.039\n    \t\tc2.093,1.825,4.256,3.569,6.352,5.391c1.841,1.601,3.613,3.281,5.451,4.885c0.877,0.765,1.858,1.409,2.752,2.155\n    \t\tc0.723,0.603,1.816,1.184,1.979,1.94c0.263,1.226,0.121,2.666-0.299,3.857c-0.193,0.547-1.434,0.945-2.229,1.003\n    \t\tc-1.003,0.073-2.035-0.397-3.056-0.405c-1.329-0.01-2.664,0.163-3.988,0.329c-2.608,0.328-5.241,0.986-7.813,0.08\n    \t\tc-0.997-0.352-1.851-1.2-2.677-1.929c-1.593-1.407-3.139-2.869-4.666-4.348c-1.391-1.346-2.684-2.795-4.105-4.106\n    \t\tc-1.631-1.505-3.349-2.916-5.043-4.352c-0.993-0.842-2.022-1.641-3.016-2.481c-3.331-2.813-6.685-5.6-9.968-8.467\n    \t\tc-1.854-1.619-3.683-3.29-5.326-5.114c-0.645-0.716-1.151-1.983-0.997-2.874c0.15-0.871,1.196-1.607,1.898-2.356\n    \t\tc0.701-0.748,1.624-0.823,2.606-0.789c3.331,0.116,6.662,0.213,9.995,0.26c3.017,0.042,6.034,0.009,9.051,0.009\n    \t\tC102.218,642.033,102.368,641.845,102.518,641.656z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M154.493,478.481c0.199,2.458-1.84,2.916-3.221,3.631c-1.802,0.932-3.574,2.075-5.81,2.151\n    \t\tc-1.604,0.055-3.182,0.76-4.781,1.136c-1.142,0.269-2.36,0.821-3.436,0.632c-1.828-0.322-3.361,0.623-5.07,0.689\n    \t\tc-1.748,0.068-3.486,0.412-5.233,0.468c-2.987,0.096-5.979,0.084-8.968,0.071c-1.733-0.007-2.083,0.404-1.834,2.176\n    \t\tc0.206,1.466,0.801,3.115,0.354,4.374c-0.551,1.553,0.124,2.886-0.031,4.314c-0.065,0.597,0.571,1.254,0.823,1.909\n    \t\tc0.131,0.341,0.164,0.736,0.165,1.107c0.002,1.238-0.005,2.477-0.062,3.714c-0.024,0.529-0.03,1.158-0.31,1.554\n    \t\tc-0.483,0.685-1.122,1.232-0.987,2.203c0.018,0.129-0.538,0.5-0.599,0.454c-0.93-0.703-1.804,0.293-2.715,0.05\n    \t\tc-0.833-0.223-1.685-0.394-2.539-0.511c-0.372-0.051-0.771,0.092-1.158,0.147c0.151,0.413,0.178,1.012,0.473,1.209\n    \t\tc2.024,1.347,4.125,2.577,6.16,3.908c2.835,1.854,5.617,3.789,8.457,5.634c1.027,0.667,2.192,1.119,3.232,1.768\n    \t\tc1.332,0.831,2.598,1.768,3.9,2.646c1.251,0.844,2.523,1.657,3.767,2.511c1.757,1.207,3.511,2.421,5.239,3.669\n    \t\tc1.063,0.768,2.11,1.569,3.086,2.442c0.239,0.214,0.172,0.769,0.247,1.173c1.775-0.449,4.239,1.177,4.143,2.716\n    \t\tc0.94-0.053,1.808,0.044,1.837,0.924c0.5,0.389,0.852,0.63,1.164,0.913c1.121,1.015,2.184,2.101,3.357,3.051\n    \t\tc0.921,0.746,1.709,1.585,2.822,2.215c2.233,1.264,4.055,3.215,5.385,5.522c0.88,1.526,0.642,3.108,0.073,4.561\n    \t\tc-0.234,0.599-1.269,0.905-1.968,1.293c-0.514,0.285-1.129,0.409-1.601,0.744c-1.045,0.741-2.137-0.003-3.198,0.204\n    \t\tc-2.035,0.398-4.12,0.587-6.118,1.114c-1.443,0.38-2.761,0.696-4.21,0.067c-0.824-0.357-1.611-0.491-2.395-1.196\n    \t\tc-1.13-1.017-1.114-2.22-1.034-3.272c0.123-1.62-0.806-2.544-1.703-3.446c-1.997-2.007-4.072-3.951-6.241-5.77\n    \t\tc-3.352-2.811-6.792-5.517-10.228-8.226c-2.048-1.615-4.136-3.181-6.246-4.715c-2.917-2.12-5.852-4.216-8.815-6.27\n    \t\tc-2.788-1.933-5.628-3.789-8.432-5.699c-1.502-1.023-2.958-2.113-4.464-3.129c-1.853-1.25-3.745-2.44-5.604-3.681\n    \t\tc-1.084-0.724-2.107-1.541-3.212-2.228c-0.61-0.379-1.386-0.49-1.994-0.87c-1.105-0.691-2.107-1.549-3.215-2.235\n    \t\tc-1.968-1.219-4.002-2.332-5.975-3.543c-1.841-1.13-3.613-2.373-5.468-3.479c-0.804-0.479-1.767-0.684-2.609-1.109\n    \t\tc-2.46-1.242-4.895-2.535-7.342-3.803c-1.604-0.831-3.213-1.654-4.819-2.481c-2.048-1.055-4.127-2.054-6.136-3.177\n    \t\tc-3.437-1.921-6.869-3.855-10.226-5.911c-2.075-1.271-4.053-2.716-5.985-4.199c-1.247-0.957-2.269-2.204-3.508-3.173\n    \t\tc-1.062-0.831-2.378-1.346-3.405-2.211c-0.487-0.41-0.561-1.311-0.783-1.889c2.203-1.363,4.385-0.962,6.497-1.155\n    \t\tc1.285-0.118,2.513-0.764,3.796-1.028c1.543-0.316,3.111-0.568,4.681-0.685c2.249-0.168,4.518-0.354,6.762-0.229\n    \t\tc2.39,0.133,4.775,0.536,7.134,0.973c2.155,0.399,4.277,0.979,6.404,1.516c2.006,0.507,3.987,1.119,6.003,1.58\n    \t\tc1.778,0.407,3.601,0.619,5.383,1.009c2.065,0.452,4.092,1.085,6.165,1.497c2.89,0.574,5.822,0.938,8.708,1.533\n    \t\tc3.899,0.803,7.832,1.025,11.795,1.002c2.014-0.012,4.029,0.001,6.043,0.001c3.102-0.001,6.208,0.095,9.305-0.035\n    \t\tc2.793-0.117,5.593-0.358,8.357-0.767c3.761-0.557,7.519-1.203,11.222-2.056c1.784-0.411,3.881-0.597,4.943-2.481\n    \t\tc0.5-0.888,1.206-2.051,0.989-2.87c-0.439-1.659,0.495-2.384,1.438-3.214c0.775-0.683,2.5-0.589,3.492,0.113\n    \t\tc0.953,0.675,1.843,1.464,2.863,2.012c0.701,0.377,1.747-0.066,2.287,0.883c0.181,0.318,0.479,0.569,0.725,0.85\n    \t\tc0.166,0.19,0.316,0.527,0.501,0.548c2.269,0.257,1.597,2.544,2.57,3.636c1.049,1.177,0.4,2.377,0.497,3.573\n    \t\tC154.085,477.938,154.417,478.326,154.493,478.481z M95.081,499.768c0-1.27-0.059-2.35,0.014-3.421\n    \t\tc0.099-1.456,0.322-2.902,0.449-4.356c0.133-1.525,0.098-3.076,0.368-4.574c0.142-0.787-0.189-1.065-0.699-1.157\n    \t\tc-0.984-0.178-1.996-0.208-2.998-0.283c-1.65-0.123-3.339-0.054-4.941-0.395c-1.979-0.422-4.02-0.345-5.973-0.944\n    \t\tc-0.89-0.273-1.882-0.19-2.815-0.347c-2.094-0.351-4.186-0.723-6.269-1.137c-1.896-0.377-3.773-0.845-5.669-1.222\n    \t\tc-0.637-0.127-1.306-0.097-1.96-0.139c-0.028,0.148-0.056,0.296-0.084,0.444c0.924,0.647,1.847,1.295,2.781,1.95\n    \t\tc-0.042,0.211-0.092,0.458-0.209,1.043c1.324-1.287,2.094-0.266,2.913,0.24c1.294,0.801,2.48,1.792,3.814,2.512\n    \t\tc1.914,1.034,3.94,1.857,5.88,2.845c1.29,0.658,2.502,1.468,3.769,2.174c1.82,1.015,3.682,1.955,5.481,3.005\n    \t\tC90.999,497.21,93.015,498.498,95.081,499.768z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M55.538,34.08c0.472-0.225,0.834-0.53,1.216-0.554c1.066-0.069,2.151-0.121,3.207,0.006\n    \t\tc1.101,0.133,2.186,0.45,3.262,0.744c2.581,0.705,5.147,1.466,7.732,2.157c0.76,0.203,1.56,0.323,2.346,0.348\n    \t\tc1.753,0.055,2.787,1.223,3.845,2.359c0.593,0.636,1.128,1.327,1.818,2.146c2.037-3.371,4.007-6.561,5.903-9.795\n    \t\tc1.325-2.258,2.542-4.58,3.82-6.866c1.013-1.813,1.838-3.789,3.144-5.362c0.855-1.029,1.848-2.357,3.491-2.412\n    \t\tc0.413-0.014,0.83,0.28,1.256,0.388c0.318,0.08,0.66,0.149,0.982,0.118c1.483-0.143,2.396,0.966,3.547,1.555\n    \t\tc0.489,0.25,1.034,0.389,1.542,0.605c0.741,0.314,1.52,0.575,2.197,0.996c1.461,0.908,2.868,1.904,4.298,2.862\n    \t\tc0.913,0.612,1.213,1.997,0.572,2.876c-0.858,1.176-1.792,2.297-2.631,3.486c-0.552,0.783-1.022,1.63-1.481,2.474\n    \t\tc-1.67,3.07-3.361,6.128-4.96,9.235c-0.869,1.688-1.515,3.49-2.356,5.194c-1.11,2.249-2.3,4.458-3.479,6.672\n    \t\tc-1.615,3.032-3.255,6.052-4.88,9.079c-1.237,2.303-2.467,4.61-3.644,6.811c2.511,0.83,4.804,1.595,7.104,2.34\n    \t\tc0.273,0.088,0.586,0.098,0.876,0.082c1.154-0.063,2.066,0.326,3.097,0.934c1.298,0.765,2.958,0.898,4.441,1.371\n    \t\tc1.094,0.349,2.162,0.783,3.225,1.221c0.459,0.189,0.897,0.452,1.303,0.74c0.685,0.485,1.373,0.977,1.989,1.542\n    \t\tc0.416,0.381,0.712,0.894,1.196,1.522c-0.853,0.75-1.733,1.729-2.808,2.392c-0.65,0.401-1.609,0.444-2.419,0.41\n    \t\tc-1.414-0.06-2.815-0.366-4.229-0.454c-1.238-0.078-2.491-0.062-3.729,0.025c-1.821,0.128-3.489-0.31-5.201-0.902\n    \t\tc-2.067-0.715-4.262-1.051-6.359-1.69c-2.489-0.758-5.069-1.168-7.494-2.206c-1.595-0.682-3.407-0.838-5.065-1.398\n    \t\tc-1.336-0.452-2.56-1.225-3.881-1.73c-1.191-0.455-2.466-0.685-3.669-1.113c-1.96-0.699-3.842-1.682-5.849-2.165\n    \t\tc-1.868-0.45-3.704-1.958-5.834-0.587c-0.426-0.392-0.857-0.79-1.285-1.185c-0.957,0.44-2.238,0.099-3.009-0.728\n    \t\tc-0.844-0.906-1.625-1.821-3.017-2.057c-1.26-0.213-1.479-1.474-0.845-2.583c0.287-0.502,0.246-1.358,0.044-1.947\n    \t\tc-1.361-3.959-1.414-8.002-0.929-12.092c0.147-1.242,0.165-2.54,0.562-3.703c0.733-2.15,1.479-4.352,2.63-6.288\n    \t\tc1.473-2.476,3.754-4.218,6.554-5.081C54.28,33.689,55.03,34.013,55.538,34.08z M65.178,60.016\n    \t\tc-0.863,1.126-0.443,2.506,0.531,2.588C65.531,61.735,65.355,60.875,65.178,60.016z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M105.223,142.795c-1.523-0.814-2.116-2.514-3.496-3.252c-0.09,0.102-0.18,0.205-0.27,0.307\n    \t\tc1.246,1.388,2.694,2.645,3.692,4.193c1.698,2.634,3.207,5.403,4.619,8.204c1.202,2.385,2.301,4.844,3.176,7.364\n    \t\tc0.827,2.382,1.292,4.889,1.935,7.336c0.689,2.621,1.611,5.204,2.009,7.867c0.194,1.3-0.052,2.882-1.084,4.074\n    \t\tc-0.508,0.586-0.921,1.254-1.261,1.724c-1.275,0.152-2.499,0.297-3.724,0.443c-0.029,0.146-0.058,0.291-0.087,0.437\n    \t\tc0.838,0.766,1.675,1.533,2.472,2.262c-0.65,0.938-1.299,1.874-2.159,3.115c-1.36-0.232-3.06-0.586-4.777-0.796\n    \t\tc-1.521-0.186-3.062-0.282-4.595-0.294c-3.943-0.03-7.483-1.38-10.928-3.135c-0.953-0.486-2.017-0.748-3.001-1.178\n    \t\tc-1.976-0.865-3.913-1.821-5.903-2.651c-1.179-0.492-2.463-0.733-3.636-1.238c-1.205-0.519-2.308-1.271-3.5-1.826\n    \t\tc-1.03-0.48-2.109-0.869-3.192-1.218c-0.817-0.264-1.158,0.134-1.168,0.984c-0.016,1.323-1.001,1.865-2.19,1.291\n    \t\tc-0.367-0.177-0.783-0.254-1.177-0.378c-1.821-0.573-3.624-1.218-5.471-1.692c-1.084-0.278-2.238-0.275-3.359-0.414\n    \t\tc-1.325-0.164-2.712-0.159-3.948-0.586c-0.752-0.26-1.493-1.099-1.833-1.86c-0.414-0.924-0.416-2.038-0.57-3.073\n    \t\tc-0.097-0.657-0.198-1.32-0.207-1.982c-0.073-5.675,0.378-11.272,2.986-16.445c0.718-1.424,1.971-2.598,2.581-4.053\n    \t\tc1.074-2.561,3.274-4.14,4.938-6.172c1.213-1.48,2.74-2.728,4.239-3.941c1.871-1.514,3.73-3.124,5.834-4.242\n    \t\tc1.659-0.882,3.35-2.119,5.534-1.688c0.751,0.148,1.602-0.311,2.411-0.324c0.574-0.009,1.154,0.258,1.728,0.415\n    \t\tc0.18,0.049,0.342,0.17,0.523,0.21c0.522,0.115,1.049,0.206,1.53,0.52c1.324-0.34,2.088,0.696,3.017,1.288\n    \t\tc0.239,0.152,0.462,0.439,0.706,0.456c2.954,0.203,5.286,1.948,7.852,3.112c0.29,0.132,0.624,0.203,0.944,0.228\n    \t\tC99.418,136.426,104.156,139.718,105.223,142.795z M86.439,142.956c-2.151,1.754-4.075,3.293-5.959,4.877\n    \t\tc-0.549,0.461-0.933,1.119-1.486,1.575c-3.142,2.591-4.755,6.075-5.796,9.881c-0.411,1.505-0.699,3.046-1.002,4.578\n    \t\tc-0.15,0.757,0.233,1.157,0.99,1.318c1.448,0.308,2.91,0.594,4.316,1.043c1.209,0.385,2.376,0.931,3.512,1.504\n    \t\tc1.197,0.604,2.335,1.324,3.581,2.041c0.051-0.008,0.399-0.182,0.626-0.081c2.905,1.287,5.793,2.613,8.686,3.929\n    \t\tc1.261,0.574,2.522,1.147,4.112,1.871c-0.199-2.078-0.285-3.911-0.572-5.711c-0.271-1.699-0.739-3.368-1.151-5.043\n    \t\tc-0.288-1.168-0.546-2.353-0.96-3.479c-0.988-2.684-2.186-5.296-3.065-8.013c-1.045-3.227-2.879-5.996-4.641-8.82\n    \t\tC87.351,143.978,86.965,143.599,86.439,142.956z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M99.341,249.499c0.61,0.222,1.084,0.454,1.585,0.56c0.5,0.106,0.936,0.133,1.465,0.398\n    \t\tc1.363,0.681,2.947,0.907,4.424,1.374c0.761,0.24,1.494,0.582,2.218,0.923c0.741,0.349,1.456,0.754,2.181,1.136\n    \t\tc0.864,0.455,1.819,0.8,2.552,1.412c0.393,0.329,0.666,1.185,0.538,1.687c-0.605,2.386-2.137,4.083-4.261,5.313\n    \t\tc-1.373,0.794-2.669,1.72-4.003,2.581c-0.725,0.467-1.447,0.941-2.191,1.378c-1.906,1.119-3.823,2.219-5.804,3.367\n    \t\tc1.902,2.083,2.053,4.672,2.352,7.236c0.323,2.764,0.928,5.506,1.07,8.275c0.097,1.876,1.146,3.848-0.203,5.719\n    \t\tc-0.148,0.205,0.019,0.899,0.257,1.077c1.446,1.082,2.913,2.149,4.453,3.089c1.534,0.936,3.179,1.689,4.743,2.579\n    \t\tc0.699,0.397,1.524,0.711,0.739,1.906c-0.461,0.701-0.371,1.764-0.751,2.596c0.067,0.442,0.134,0.884,0.2,1.326\n    \t\tc-0.412-0.058-0.822-0.136-1.236-0.168c-0.552-0.043-1.108-0.036-1.661-0.075c-1.298-0.09-2.595-0.181-3.891-0.296\n    \t\tc-1.542-0.137-3.079-0.336-4.623-0.43c-0.497-0.03-1.013,0.292-1.515,0.278c-3.43-0.093-6.222-1.877-9.057-3.515\n    \t\tc-2.098-1.212-4.172-2.467-6.241-3.729c-2.472-1.508-4.929-3.04-7.388-4.568c-3.2-1.988-6.404-3.972-9.594-5.976\n    \t\tc-2.721-1.71-5.433-3.433-8.13-5.18c-0.776-0.503-1.497-1.096-2.217-1.679c-0.134-0.109-0.2-0.369-0.205-0.561\n    \t\tc-0.033-1.362-0.844-1.662-2.054-1.837c-0.91-0.132-1.885-0.609-2.582-1.217c-0.972-0.848-0.523-2.553,0.634-3.057\n    \t\tc0.16-0.07,0.408-0.243,0.399-0.351c-0.077-0.996,0.707-0.904,1.277-1.005c1.871-0.332,3.785-0.485,5.616-0.961\n    \t\tc2.442-0.635,4.829-1.488,7.228-2.285c1.665-0.553,3.356-1.064,4.95-1.782c2.352-1.06,4.637-2.271,6.934-3.45\n    \t\tc1.297-0.666,2.548-1.419,3.841-2.091c2.029-1.054,4.119-1.997,6.108-3.121c3.574-2.019,7.092-4.138,10.636-6.211\n    \t\tC98.593,249.897,99.062,249.653,99.341,249.499z M77.186,277.96c0.038,0.133,0.075,0.266,0.113,0.399\n    \t\tc1.277,0.674,2.555,1.349,4.061,2.143c-0.057-1.173-0.04-2.088-0.181-2.979c-0.045-0.285-0.58-0.762-0.766-0.71\n    \t\tC79.316,277.124,78.257,277.564,77.186,277.96z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M95.195,331.397c2.073,1.712,3.88,3.144,5.619,4.656c2.257,1.962,4.431,4.021,6.696,5.975\n    \t\tc1.475,1.273,3.052,2.427,4.571,3.65c0.279,0.225,0.724,0.533,0.711,0.784c-0.062,1.232,0.658,2.475-0.169,3.724\n    \t\tc-0.316,0.477-0.217,1.23-0.348,2.138c-1.574-0.102-3.292,0.007-4.887-0.385c-1.337-0.328-2.533-0.323-3.826-0.024\n    \t\tc-0.654,0.151-1.384,0.179-2.042,0.057c-0.762-0.141-1.246-0.051-1.945,0.432c-0.542,0.375-1.643-0.141-2.489-0.101\n    \t\tc-1.136,0.053-1.84-0.581-2.622-1.244c-1.475-1.252-3.012-2.431-4.544-3.613c-1.031-0.796-2.129-1.508-3.143-2.324\n    \t\tc-1.736-1.397-3.369-2.932-5.183-4.215c-0.455-0.322-1.523-0.097-2.152,0.206c-2.095,1.009-4.114,2.172-6.169,3.264\n    \t\tc-0.815,0.433-1.679,0.783-2.464,1.263c-0.924,0.565-1.808,0.934-2.927,0.539c-1.584-0.56-3.179-1.293-4.816-1.448\n    \t\tc-2.047-0.194-4.155-1.157-6.238,0.039c-0.308,0.177-0.978,0.087-1.274-0.145c-1.134-0.887-2.241-0.551-3.409-0.144\n    \t\tc-1.452-1.491-1.245-3.517,0.484-4.687c1.524-1.032,3.006-2.127,4.545-3.137c1.035-0.679,2.145-1.241,3.202-1.888\n    \t\tc0.915-0.561,1.802-1.169,2.703-1.753c1.641-1.064,3.262-2.16,4.934-3.172c0.758-0.459,0.932-1.055,0.307-1.621\n    \t\tc-1.825-1.653-3.62-3.339-5.471-4.962c-3.241-2.842-6.51-5.652-9.779-8.462c-1.465-1.26-2.975-2.468-4.429-3.739\n    \t\tc-0.764-0.668-1.578-1.337-2.13-2.165c-0.356-0.533-0.567-1.49-0.323-2.017c0.342-0.742,1.214-0.802,1.937-0.196\n    \t\tc0.405-1.109,1.164-0.795,1.801-0.435c0.688,0.389,1.289,0.431,2.093,0.331c1.139-0.141,2.332,0.156,3.502,0.265\n    \t\tc0.011,0.134,0.023,0.268,0.034,0.401c0.26-0.313,0.519-0.626,0.58-0.699c1.059-0.198,1.889-0.513,2.699-0.467\n    \t\tc1.263,0.072,2.512,0.39,3.767,0.601c0.205,0.035,0.469,0.151,0.61,0.067c1.08-0.644,2.13,0.218,3.204,0.043\n    \t\tc0.233-0.038,0.55,0.228,0.78,0.414c4.822,3.897,9.633,7.809,14.46,11.699c0.766,0.617,1.393,0.133,2.037-0.356\n    \t\tc2.066-1.568,4.134-3.137,6.258-4.625c0.998-0.699,2.1-1.267,3.203-1.793c0.682-0.325,1.454-0.46,1.878-0.588\n    \t\tc0.915,0.317,1.598,0.599,2.306,0.788c1.262,0.337,2.535,0.637,3.811,0.916c1.822,0.398,3.68,0.662,5.468,1.174\n    \t\tc1.568,0.45,3.126,1.041,4.564,1.804c1.017,0.539,1.023,2.048,0.248,3c-0.053,0.065-0.165,0.124-0.165,0.186\n    \t\tc0,1.914-1.729,1.736-2.806,2.399c-1.969,1.212-3.881,2.527-5.755,3.884c-2.13,1.544-4.193,3.181-6.285,4.777\n    \t\tC96.081,330.724,95.747,330.977,95.195,331.397z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M52.746,360.199c0.084,1.018,0.17,2.072,0.281,3.422c0.754-0.805,1.257-1.342,1.828-1.952\n    \t\tc0.159,0.371,0.285,0.666,0.582,1.359c0.3-0.759,0.488-1.236,0.742-1.878c1.181-0.344,2.26,2.052,3.729,0.498\n    \t\tc0.372,0.391,0.699,0.735,1.176,1.237c0.342-2.341,2.243-0.984,3.302-1.762c0.263,0.563,0.5,1.068,0.798,1.705\n    \t\tc0.968-1.893,1.439,0.886,2.224,0.045c0.235-0.395,0.46-0.774,0.675-1.135c2.609,1.348,2.836,3.973,3.542,6.275\n    \t\tc0.378,1.232,0.086,2.72,0.625,3.838c0.699,1.45,0.18,3.147,1.321,4.517c0.512,0.615,0.271,1.854,0.374,2.81\n    \t\tc0.047,0.44,0.09,0.881,0.152,1.32c0.104,0.735,0.316,1.17,1.28,1.04c1.868-0.251,1.845-0.173,1.888-2.119\n    \t\tc0.04-1.808,0.137-3.615,0.256-5.42c0.082-1.235,2.322-2.336,3.28-1.609c0.241,0.183,0.3,0.606,0.506,1.06\n    \t\tc0.192-0.375,0.34-0.666,0.499-0.976c0.103,0.033,0.206,0.038,0.217,0.072c0.305,0.976,1.216,0.868,1.936,1.057\n    \t\tc0.823,0.215,1.662,0.398,2.506,0.494c0.597,0.068,1.213-0.032,2.177-0.071c1.669,0.542,3.677,1.448,6.107,1.722\n    \t\tc-0.006-0.025,0.065,0.279,0.16,0.687c0.272-0.195,0.502-0.361,0.851-0.611c1.276,2.993,0.588,6.3,1.719,9.227\n    \t\tc0.967-2.048,0.648-4.149,0.691-6.231c0.045-2.173,0.285-4.341,0.409-6.513c0.051-0.886,0.004-1.778,0.033-2.666\n    \t\tc0.031-0.943,0.252-1.759,1.41-1.886c0.183-0.02,0.454-0.15,0.509-0.295c0.674-1.773,0.979-0.329,1.45-0.188\n    \t\tc0.82,0.123,1.872-0.032,2.416,0.422c1.436,1.198,3.14,1.39,4.801,1.554c1.879,0.186,3.404,1.11,5.041,1.827\n    \t\tc0.37,0.162,0.69,0.461,1.07,0.57c1.526,0.437,1.735,1.91,2.3,3.026c0.412,0.813,0.461,1.836,0.56,2.777\n    \t\tc0.285,2.715,0.572,5.431,0.741,8.155c0.113,1.814,0.118,3.648-0.021,5.458c-0.055,0.719-0.666,1.383-0.963,2.097\n    \t\tc-1,2.406-2.761,3.432-5.353,3.636c-2.952,0.232-5.756-0.645-8.646-0.776c-0.687-0.031-1.388-0.089-2.063,0.003\n    \t\tc-4.07,0.554-7.776-0.814-11.531-2.045c-2.877-0.943-5.829-1.658-8.713-2.585c-1.722-0.554-3.358-1.367-5.068-1.964\n    \t\tc-0.532-0.186-1.235,0.104-1.756-0.094c-0.797-0.303-0.898,0.037-1.215,0.651c-0.35,0.677-1.017,1.21-1.611,1.733\n    \t\tc-0.617,0.544-3.235,0.565-4.005,0.211c-2.849-1.31-5.783-1.81-8.841-0.747c-0.186,0.064-0.506,0.208-0.547,0.153\n    \t\tc-0.681-0.916-1.687-0.621-2.59-0.79c-2.033-0.38-2.812-1.993-3.082-3.772c-0.389-2.562-0.573-5.155-0.811-7.738\n    \t\tc-0.192-2.084-0.454-4.172-0.471-6.26c-0.026-3.119,0.134-6.239,0.217-9.358c0.003-0.125,0.021-0.254,0.057-0.374\n    \t\tC52.17,362.11,52.45,361.185,52.746,360.199z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M109.199,217.093c-2.452,0.737-4.923,1.416-7.348,2.233c-1.516,0.511-2.914,1.406-4.449,1.813\n    \t\tc-2.113,0.56-3.891,1.799-5.881,2.551c-2.003,0.757-4.138,1.163-6.215,1.724c-1.9,0.513-3.802,1.019-5.695,1.555\n    \t\tc-0.203,0.058-0.484,0.284-0.496,0.45c-0.013,0.163,0.241,0.392,0.428,0.518c0.826,0.56,1.661,1.106,2.512,1.627\n    \t\tc0.207,0.127,0.483,0.148,0.73,0.203c0.36,0.081,0.781,0.054,1.074,0.237c2.467,1.537,5.198,2.481,7.868,3.562\n    \t\tc2.703,1.093,5.368,2.22,8.253,2.879c1.929,0.441,3.709,1.628,5.484,2.61c1.152,0.638,2.175,1.51,3.258,2.272\n    \t\tc0.185,0.13,0.371,0.275,0.58,0.352c0.429,0.156,1.132,0.15,1.26,0.426c0.359,0.769,0.734,1.681,0.633,2.476\n    \t\tc-0.11,0.86-1.026,1.188-1.906,1.033c-1.36-0.241-2.673-0.383-3.974,0.319c-0.365,0.197-0.938,0.161-1.371,0.053\n    \t\tc-1.686-0.419-3.304-0.332-4.878,0.428c-0.141,0.068-0.345,0.121-0.478,0.071c-1.53-0.573-3.069-1.128-4.573-1.765\n    \t\tc-2.655-1.125-5.285-2.31-7.93-3.458c-1.897-0.824-3.809-1.615-5.703-2.444c-2.767-1.211-5.536-2.418-8.282-3.674\n    \t\tc-2.182-0.998-4.306-2.125-6.503-3.088c-2.296-1.007-4.659-1.858-6.97-2.833c-2.576-1.087-5.183-2.13-7.643-3.443\n    \t\tc-0.52-0.278-0.506-1.63-0.659-2.501c-0.131-0.743,0.355-0.95,1.002-0.931c0.076,0.002,0.197-0.042,0.223-0.098\n    \t\tc0.831-1.812,2.702-1.156,4.009-1.767c1.683-0.787,3.408-1.377,5.158-1.917c1.182-0.365,2.442-0.752,3.647-0.697\n    \t\tc1.49,0.068,2.635-0.79,4.001-1.019c1.687-0.283,3.343-0.82,4.971-1.371c1.46-0.495,2.862-1.162,4.292-1.746\n    \t\tc0.261-0.107,0.541-0.166,0.807-0.263c0.741-0.268,1.556-0.427,2.196-0.85c0.655-0.433,1.151-1.071,2.065-0.729\n    \t\tc0.118,0.044,0.322-0.046,0.448-0.13c0.843-0.56,1.676-1.136,2.6-1.767c-0.717-0.473-1.626-1.142-2.599-1.698\n    \t\tc-1.422-0.812-2.888-1.546-4.338-2.308c-1.569-0.826-3.127-1.675-4.715-2.462c-2.527-1.253-5.031-2.571-7.629-3.66\n    \t\tc-2.456-1.03-5.058-1.709-7.524-2.717c-1.824-0.746-3.891-0.84-5.514-2.164c-0.54-0.44-1.347-0.563-2.044-0.797\n    \t\tc-2.253-0.756-2.899-1.675-2.71-4.018c0.023-0.289,0.317-0.556,0.485-0.834c0.101,0.061,0.202,0.121,0.303,0.182\n    \t\tc-0.054-0.466-0.107-0.931-0.161-1.395c2.041,0.241,3.965,0.376,5.849,0.727c1.136,0.211,2.201,0.091,3.318,0.062\n    \t\tc1.74-0.046,3.493,0.45,5.244,0.696c0.522,0.073,1.068,0.016,1.579,0.127c0.689,0.149,1.355,0.403,2.141,0.647\n    \t\tc0.441-0.929,1.143-0.1,1.73,0.136c1.4,0.562,2.739,1.275,4.137,1.842c1.026,0.415,2.108,0.693,3.164,1.037\n    \t\tc0.115,0.037,0.274,0.079,0.322,0.168c1.021,1.889,3.238,1.763,4.772,2.814c1.267,0.868,2.771,1.392,4.179,2.051\n    \t\tc0.328,0.153,0.724,0.176,1.029,0.359c0.824,0.495,1.597,1.078,2.427,1.563c1.16,0.678,2.353,1.299,3.533,1.942\n    \t\tc1.809,0.985,3.609,1.988,5.432,2.946c1.295,0.681,2.671,1.22,3.925,1.968c2.354,1.404,4.671,2.875,6.944,4.404\n    \t\tc0.601,0.405,1.18,1.058,1.42,1.723c0.234,0.65,0.489,1.544-0.586,2.043c-0.411,0.191-0.602,0.854-0.894,1.302\n    \t\tC109.039,216.816,109.119,216.955,109.199,217.093z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M47.805,83.01c0.198,0.392,0.357,0.705,0.567,1.12c1.016-1.477,2.113-0.664,3.132-0.2\n    \t\tc1.003,0.456,2.544-0.549,2.916,1.263c0.549-0.259,0.919-0.433,1.055-0.497c0.718,0.299,1.248,0.521,1.779,0.742\n    \t\tc0.031-0.071,0.062-0.142,0.093-0.213c0.964,0.976,1.938,1.943,2.887,2.934c0.278,0.29,0.629,0.622,0.696,0.982\n    \t\tc0.48,2.571,0.826,5.168,1.358,7.727c0.295,1.42,0.835,2.793,1.33,4.164c0.266,0.738,0.574,1.496,1.033,2.12\n    \t\tc0.864,1.175,2.4,0.673,3.545,1.237c0.519,0.256,1.196,0.192,1.733,0.264c0.588-2.332,1.21-4.566,1.698-6.828\n    \t\tc0.254-1.175,1.102-1.651,2.029-1.962c0.304-0.102,0.827,0.451,1.075,0.6c0.736,0.15,1.517,0.078,1.918,0.434\n    \t\tc1.427,1.265,3.298,1.243,4.927,1.891c0.565,0.225,1.292,0.096,1.077,1.065c-0.011,0.051,0.307,0.165,0.462,0.264\n    \t\tc1.114,0.709,2.339,1.278,3.102,2.437c0.067,0.102,0.193,0.259,0.268,0.247c1.789-0.289,0.988,1.366,1.672,2.055\n    \t\tc0.108-0.024,0.349-0.077,0.67-0.148c-0.134,1.67-0.274,3.253-0.385,4.837c-0.088,1.264,0.372,2.099,1.661,2.601\n    \t\tc1.534,0.598,2.989,1.411,4.44,2.202c1.012,0.552,1.57,0.366,1.751-0.761c0.363-2.259,0.717-4.519,1.047-6.782\n    \t\tc0.355-2.433,0.663-4.873,1.023-7.305c0.164-1.112,0.402-2.213,0.575-3.146c0.611-0.432,1.184-0.743,1.638-1.178\n    \t\tc0.818-0.784,1.552-0.829,2.377-0.021c0.541,0.53,1.009,1.184,2.01,0.944c0.281-0.067,0.682,0.652,1.105,0.843\n    \t\tc1.222,0.551,2.482,1.017,3.727,1.515c0.135,0.054,0.312,0.068,0.401,0.164c0.728,0.79,1.44,1.593,2.154,2.395\n    \t\tc0.083,0.093,0.196,0.198,0.211,0.308c0.319,2.412,2.316,4.318,2.06,6.907c-0.176,1.782-0.305,3.569-0.46,5.423\n    \t\tc0.259-0.446,0.487-0.839,0.715-1.231c0.083,0.015,0.167,0.03,0.25,0.044c0,0.352-0.025,0.707,0.004,1.056\n    \t\tc0.132,1.572-0.383,3.137,0.189,4.743c0.267,0.749-0.12,1.721-0.167,2.595c-0.041,0.769,0.054,1.551-0.052,2.307\n    \t\tc-0.075,0.533-0.375,1.037-0.601,1.542c-0.04,0.088-0.206,0.131-0.323,0.172c-0.972,0.343-0.133,2.47-2.088,1.979\n    \t\tc-1.105-0.277-2.347,0.053-3.509-0.07c-1.771-0.188-3.518-0.603-5.29-0.791c-1.589-0.168-3.198-0.244-4.795-0.209\n    \t\tc-1.921,0.042-3.588-0.577-5.292-1.391c-1.207-0.577-2.623-0.715-3.946-1.052c-0.122-0.031-0.242-0.074-0.358-0.124\n    \t\tc-1.775-0.766-3.533-1.576-5.329-2.289c-2.246-0.892-4.551-1.64-6.779-2.571c-1.55-0.648-3.004-1.523-4.52-2.257\n    \t\tc-1.914-0.927-3.815-1.895-5.782-2.697c-2.66-1.085-5.345-2.13-8.081-2.999c-1.811-0.575-3.776-0.57-5.6-0.055\n    \t\tc-0.962,0.272-1.279-0.06-1.517-0.548c-1.216-0.165-2.276-0.309-3.431-0.467c-4.947-7.258-5.992-23.93-4.294-26.771\n    \t\tc0.309,0.335,0.603,0.653,0.941,1.018c0-0.431,0-0.79,0-1.394c0.812,0.549,1.519,1.027,2.325,1.573\n    \t\tC47.052,83.597,47.375,83.345,47.805,83.01z\"/>\n    \t<path fill=\"#FF1D25\" d=\"M97.963,440.923c0.092-0.16,0.327-0.376,0.314-0.575c-0.075-1.159-0.242-2.312-0.315-3.47\n    \t\tc-0.101-1.608-0.108-3.223-0.226-4.83c-0.13-1.767-0.357-3.526-0.502-5.292c-0.039-0.475,0.119-0.964,0.093-1.442\n    \t\tc-0.124-2.26-0.452-4.525-0.371-6.777c0.067-1.873,0.433-3.784,1.003-5.57c0.261-0.816,1.334-1.372,2.194-2.195\n    \t\tc0.236,1.113,0.641,0.787,1.372,0.668c0.932-0.152,1.979,0.534,2.999,0.755c2.253,0.488,4.519,0.911,6.965,1.397\n    \t\tc0.458,0.302,1.135,0.762,1.827,1.197c0.168,0.105,0.389,0.125,0.582,0.193c0.4,0.141,0.797,0.289,1.269,0.274\n    \t\tc0.409,0.236,0.835,0.447,1.217,0.72c0.141,0.101,0.238,0.341,0.254,0.527c0.106,1.212,0.154,2.429,0.276,3.639\n    \t\tc0.305,3.032,0.653,6.06,0.958,9.093c0.247,2.456,0.386,4.925,0.7,7.372c0.274,2.136,0.857,4.236,1.066,6.375\n    \t\tc0.322,3.31,0.698,6.683-1.347,9.671c-0.195,0.284-0.664,0.459-1.035,0.529c-1.51,0.285-3.025,0.638-4.551,0.716\n    \t\tc-1.236,0.064-2.488-0.314-3.737-0.342c-1.434-0.033-2.871,0.098-4.307,0.166c-0.968,0.046-1.936,0.138-2.904,0.149\n    \t\tc-0.517,0.006-1.038-0.1-1.552-0.184c-1.519-0.247-3.037-0.501-4.552-0.769c-0.822-0.145-1.641-0.312-2.456-0.492\n    \t\tc-1.048-0.231-2.105-0.437-3.131-0.744c-1.056-0.315-2.095-0.701-3.114-1.123c-1.372-0.568-2.756-1.127-4.066-1.818\n    \t\tc-3.207-1.693-6.386-3.441-9.556-5.203c-2.013-1.118-4.068-2.19-5.942-3.512c-0.678-0.479-1.175-1.604-1.236-2.472\n    \t\tc-0.08-1.128,0.141-2.411,1.545-2.899c0.226-0.078,0.444-0.253,0.666-0.253c2.865-0.011,5.739-0.132,8.593,0.051\n    \t\tc2.217,0.142,4.41,0.669,6.613,1.03c0.158,0.026,0.345,0.18,0.458,0.132c2.627-1.112,4.551,0.573,6.629,1.644\n    \t\tc1.42,0.731,2.839,1.466,4.266,2.185C95.912,439.94,96.915,440.413,97.963,440.923z\"/>\n    </g>\n    </svg>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.logo {\n  position: fixed;\n  width: 100px;\n  height: 200px;\n  bottom: 30px;\n  left: 30px;\n  margin-left: 0;\n  margin-top: 0;\n  z-index: 15; }\n\n.logo svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block;\n    padding-right: 40px; }\n", ""]);

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

/***/ "../../../../../src/app/logo/logotype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logotype\" *ngIf=\"_globalService.pageLoading\">\n\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n  \t width=\"4000px\" height=\"1500px\" viewBox=\"0 0 4000 1500\" style=\"enable-background:new 0 0 4000 1500;\" xml:space=\"preserve\">\n  <g>\n  \t<rect y=\"467.747\" style=\"fill:none;\" width=\"4000\" height=\"564.506\"/>\n  \t<path d=\"M663.843,993.78c-34.706,0-54.884-19.824-60.534-46.728c-10.493,30.443-50.848,46.728-93.625,46.728\n  \t\tc-54.077,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.391-3.539,94.432-6.371,94.432-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.147-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.65,15.576,5.65,26.195\n  \t\tc0,12.036-9.686,24.072-33.899,24.072c-23.406,0-32.285-15.576-32.285-30.443c0-24.072,33.092-54.516,96.047-54.516\n  \t\tc82.325,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.878,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.036,0.707,3.229,2.123C713.077,979.62,693.707,993.78,663.843,993.78z M600.081,819.614\n  \t\tc-18.563,10.619-55.691,10.619-79.097,14.16c-27.442,4.955-55.691,21.239-55.691,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M755.848,988.116c-2.421,0-2.421-4.248,0-4.248h44.392c3.229,0,5.649-0.708,5.649-2.832V474.822\n  \t\tc0-2.124-2.421-2.832-5.649-2.832h-44.392c-2.421,0-2.421-4.248,0-4.248h112.189c1.614,0,1.614,0.708,1.614,2.124v511.17\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H755.848z\"/>\n  \t<path d=\"M1277.24,820.321h-233.256c-0.807,5.664-0.807,11.328-0.807,17.701c0,83.543,8.878,116.109,34.706,136.643\n  \t\tc16.949,12.035,38.741,16.283,59.726,16.283c57.305,0,101.697-26.904,129.945-65.844c0.807-0.707,4.036,0.709,3.229,2.125\n  \t\tc-29.863,40.355-76.676,67.259-133.174,67.259c-92.818,0-162.229-70.091-162.229-156.466c0-87.084,69.412-157.883,162.229-157.883\n  \t\tc100.889,0,142.052,85.667,142.052,138.059C1279.662,819.614,1278.854,820.321,1277.24,820.321z M1186.037,700.671\n  \t\tc-13.721-12.744-30.67-16.283-48.427-16.283c-20.985,0-42.777,3.539-59.726,16.283c-23.406,18.408-32.285,54.516-33.899,115.403\n  \t\th170.301C1212.671,755.187,1206.214,719.079,1186.037,700.671z\"/>\n  \t<path d=\"M1615.421,993.78c-34.706,0-54.884-19.824-60.534-46.728c-10.493,30.443-50.848,46.728-93.625,46.728\n  \t\tc-54.077,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.391-3.539,94.432-6.371,94.432-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.147-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.65,15.576,5.65,26.195\n  \t\tc0,12.036-9.686,24.072-33.899,24.072c-23.406,0-32.285-15.576-32.285-30.443c0-24.072,33.092-54.516,96.047-54.516\n  \t\tc82.325,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.878,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.036,0.707,3.229,2.123C1664.655,979.62,1645.284,993.78,1615.421,993.78z M1551.659,819.614\n  \t\tc-18.563,10.619-55.691,10.619-79.097,14.16c-27.442,4.955-55.691,21.239-55.691,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M1707.425,988.116c-2.421,0-2.421-4.248,0-4.248h44.392c3.229,0,5.649-0.708,5.649-2.832V474.822\n  \t\tc0-2.124-2.421-2.832-5.649-2.832h-44.392c-2.421,0-2.421-4.248,0-4.248h112.189c1.614,0,1.614,0.708,1.614,2.124v511.17\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H1707.425z\"/>\n  \t<path d=\"M1918.886,988.116c-1.614,0-1.614-4.248,0-4.248h44.392c3.229,0,4.843-0.708,4.843-2.832V693.591\n  \t\tc0-2.123-1.614-2.832-4.843-2.832h-44.392c-1.614,0-1.614-4.248,0-4.248h112.188c1.614,0,1.614,0.709,1.614,2.125v292.4\n  \t\tc0,2.124,1.614,2.832,5.65,2.832h44.391c1.614,0,1.614,4.248,0,4.248H1918.886z M1999.597,543.497\n  \t\tc-23.406,0-41.97-16.992-41.97-37.524c0-21.24,18.563-38.231,41.97-38.231c24.213,0,43.584,16.992,43.584,38.231\n  \t\tC2043.182,526.505,2023.811,543.497,1999.597,543.497z\"/>\n  \t<path d=\"M2736.483,988.116c-2.422,0-2.422-4.248,0-4.248h43.584c4.035,0,5.649-0.708,5.649-2.832V756.603\n  \t\tc0-50.268-40.355-72.215-68.604-72.215c-58.92,0-91.204,38.939-91.204,67.259v229.39c0,2.124,0.808,2.832,4.843,2.832h44.392\n  \t\tc2.421,0,2.421,4.248,0,4.248h-163.845c-1.614,0-1.614-4.248,0-4.248h44.392c3.229,0,4.843-0.708,4.843-2.832V756.603\n  \t\tc0-50.268-40.355-72.215-67.798-72.215c-51.655,0-79.097,26.195-91.204,60.887v235.762c0,2.124,1.614,2.832,4.843,2.832h44.392\n  \t\tc1.614,0,1.614,4.248,0,4.248h-163.037c-2.421,0-2.421-4.248,0-4.248h43.584c4.036,0,5.65-0.708,5.65-2.832V692.884\n  \t\tc0-1.416-1.614-2.125-5.65-2.125h-43.584c-2.421,0-2.421-4.248,0-4.248h111.382c1.614,0,2.421,0.709,2.421,2.125v46.727\n  \t\tc14.528-40.355,54.884-55.223,91.204-55.223c73.447,0,114.61,22.656,129.945,60.18c11.3-41.064,58.112-60.18,94.433-60.18\n  \t\tc82.325,0,133.174,27.611,133.174,103.367v197.529c0,2.124,1.614,2.832,4.843,2.832h44.391c1.614,0,1.614,4.248,0,4.248H2736.483z\"\n  \t\t/>\n  \t<path d=\"M3215.903,993.78c-34.706,0-54.884-19.824-60.533-46.728c-10.493,30.443-50.849,46.728-93.626,46.728\n  \t\tc-54.076,0-107.346-17.699-107.346-73.631c0-74.34,71.833-87.084,103.311-89.916c44.392-3.539,94.433-6.371,94.433-21.239v-53.808\n  \t\tc0-56.639-33.092-70.799-62.148-70.799c-21.792,0-35.513,9.203-35.513,30.443c0,12.035,5.649,15.576,5.649,26.195\n  \t\tc0,12.036-9.685,24.072-33.898,24.072c-23.406,0-32.284-15.576-32.284-30.443c0-24.072,33.091-54.516,96.046-54.516\n  \t\tc82.326,0,126.717,39.647,126.717,128.146v150.803c0,16.283,8.879,23.363,20.985,23.363c13.721,0,25.021-10.619,28.249-17.699\n  \t\tc0-1.416,4.035,0.707,3.229,2.123C3265.137,979.62,3245.767,993.78,3215.903,993.78z M3152.142,819.614\n  \t\tc-18.564,10.619-55.691,10.619-79.098,14.16c-27.441,4.955-55.69,21.239-55.69,86.375c0,57.347,31.478,67.259,58.919,67.259\n  \t\tc39.549,0,75.869-25.487,75.869-53.1V819.614z\"/>\n  \t<path d=\"M3608.96,690.759c-5.649,0-8.07,2.832-19.37,29.736l-182.408,435.416c-17.756,42.479-34.706,57.347-66.99,57.347\n  \t\ts-57.305-14.868-57.305-40.355c0-22.655,16.949-38.939,37.127-38.939c20.985,0,32.284,11.327,32.284,24.779\n  \t\tc0,16.284-15.335,20.532-15.335,34.692c0,7.08,10.492,9.203,23.406,9.203c10.492,0,25.828-8.496,41.163-45.311l68.604-161.423\n  \t\tl-158.194-302.313c-0.807-2.123-2.421-2.832-6.457-2.832h-37.935c-2.421,0-2.421-4.248,0-4.248h159.809\n  \t\tc1.614,0,1.614,4.248,0,4.248h-42.776c-4.036,0-4.843,0.709-4.036,2.832l116.225,234.346l87.976-207.441\n  \t\tc11.3-27.611,10.492-29.736,5.649-29.736h-43.584c-1.614,0-1.614-4.248,0-4.248h105.731c1.615,0,1.615,4.248,0,4.248H3608.96z\"/>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </svg>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/logo/logotype.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: avus;\n  src: url(\"/assets/fonts/AvusPro.ttf\") format(\"truetype\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.logotype {\n  position: fixed;\n  width: 150px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  margin-left: -75px;\n  margin-top: -30px;\n  z-index: 15; }\n\n.logotype svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logo/logotype.component.ts":
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
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var LogotypeComponent = /** @class */ (function () {
    function LogotypeComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogotypeComponent.prototype.ngOnInit = function () {
    };
    LogotypeComponent = __decorate([
        core_1.Component({
            selector: 'app-logotype',
            template: __webpack_require__("../../../../../src/app/logo/logotype.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logo/logotype.component.scss")],
            animations: [
                animations_1.trigger('navLiState', [
                    animations_1.state('0', animations_1.style({
                        height: '0px',
                        position: 'absolute'
                    })),
                    animations_1.state('1', animations_1.style({
                        height: '50px',
                        position: 'relative'
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
        __metadata("design:paramtypes", [variables_service_1.GlobalService])
    ], LogotypeComponent);
    return LogotypeComponent;
}());
exports.LogotypeComponent = LogotypeComponent;


/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n   <!-- (mouseenter)='openNav()' (mouseout)='closeNav()' -->\n  <ul class=\"nav-ul\">\n     <!-- [@navUlState]=\"isNav\" -->\n    <li class=\"nav-li\" >\n       <!-- [@navLiState]=\"isNav\" -->\n      <a [routerLink]=\"['/about']\" class=\"nav-a\" [class.nav_active]=\"route === '/about'\" >?</a>\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.nav {\n  position: fixed;\n  top: 25px;\n  left: 25px;\n  width: 100px;\n  z-index: 15; }\n.nav-ul {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative; }\n.nav-ul .nav-li {\n    width: 100px;\n    position: relative;\n    display: inline-block; }\n.nav-ul .nav-li a {\n      width: 100%;\n      display: block;\n      height: 100%;\n      line-height: auto;\n      vertical-align: middle;\n      transition: all 0.5s ease;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      -o-transition: all 0.5s ease;\n      font-size: 25px;\n      color: #FF3700;\n      font-size: 36px;\n      line-height: 36px;\n      font-family: \"avus\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n        .nav-ul .nav-li a {\n          font-size: 30px;\n          line-height: 36px; } }\n.nav-ul .nav-li a:hover {\n        color: #00C8FF; }\n.nav-ul .nav-li a.nav_active {\n        color: #00C8FF; }\n.nav-ul.open .nav-li {\n  position: relative; }\n", ""]);

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

/***/ "../../../../../src/app/notFound/notFound.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>page not found</h1>\n"

/***/ }),

/***/ "../../../../../src/app/notFound/notFound.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notFound/notFound.component.ts":
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
// import {IFeed}from '../feed';
var notFoundComponent = /** @class */ (function () {
    function notFoundComponent() {
    }
    notFoundComponent.prototype.ngOnInit = function () {
    };
    notFoundComponent = __decorate([
        core_1.Component({
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/app/notFound/notFound.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notFound/notFound.component.scss")]
        })
    ], notFoundComponent);
    return notFoundComponent;
}());
exports.notFoundComponent = notFoundComponent;


/***/ }),

/***/ "../../../../../src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"share\">\n  <h2 class=\"share-button\" (click)=\"openShare()\" [class.blacked_text]=\"_globalService.isStyling\">share</h2>\n\n  <ul [class.share_open]=\"isShare\" [@shareState]=\"isShare\" class=\"share-ul\">\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://twitter.com/intent/tweet?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tw</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'http://www.tumblr.com/share/link?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tm</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://www.facebook.com/sharer/sharer.php?u='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">fb</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/share/share.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.share {\n  position: fixed;\n  top: 25px;\n  left: 25px;\n  z-index: 15;\n  width: 200px; }\n.share-button {\n  cursor: pointer; }\n.share-ul {\n  position: absolute;\n  left: -200px; }\n.share-ul .share-li {\n    display: inline-block; }\n.share-ul .share-li a {\n      font-size: 36px;\n      line-height: 36px;\n      font-family: \"avus\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n        .share-ul .share-li a {\n          font-size: 30px;\n          line-height: 36px; } }\n.share-ul.share_open {\n  left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/share/share.component.ts":
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
// import { EncodeURIPipe } from './../shared/encodeURI.pipe';
var animations_1 = __webpack_require__("../../../animations/esm5/animations.js");
var ShareComponent = /** @class */ (function () {
    function ShareComponent(location, router, _globalService) {
        var _this = this;
        this._globalService = _globalService;
        router.events.subscribe(function (val) {
            _this.encodedRoute = encodeURI('http://alealimay.com' + location.path());
        });
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.isShare = false;
    };
    ShareComponent.prototype.openShare = function () {
        this.isShare = !this.isShare;
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'app-share',
            template: __webpack_require__("../../../../../src/app/share/share.component.html"),
            styles: [__webpack_require__("../../../../../src/app/share/share.component.scss")],
            animations: [
                animations_1.trigger('shareState', [
                    animations_1.state('0', animations_1.style({
                        left: '-200px'
                    })),
                    animations_1.state('1', animations_1.style({
                        left: '0px'
                    })),
                    animations_1.transition('0 => 1', animations_1.animate('500ms ease-in')),
                    animations_1.transition('1 => 0', animations_1.animate('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router, variables_service_1.GlobalService])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;


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