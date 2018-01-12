import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { routerTransition } from './_animation/router.animation';
import { Location } from '@angular/common';
import { fadeInAnimation } from './_animation/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation, routerTransition],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent{

  currentRoute: string;

  constructor(location: Location, router: Router) {
      router.events.subscribe((val) => {
        if(location.path() != ''){
          this.currentRoute = location.path();
        } else {
          this.currentRoute = 'home'
        }
      }
    );
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }


  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
}
