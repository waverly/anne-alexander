import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './../../_animation/index';
import "snapsvg-cjs";

declare var Snap: any;
declare var mina: any;
// declare var path: any;
declare var parameters: any;
// declare var this.svgCanvas: any;
// declare var w: any;
// declare var h: any;
declare var d: any;


@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
  // ,
  // make fade in animation available to this component
  // animations: [fadeInAnimation],
  // // attach the fade in animation to the host (root) element of this component
  // host: { '[@fadeInAnimation]': '' }
})
export class SvgComponent implements OnInit {
  // svgCanvas: any;
  // w: number;
  // h: number;
  path: any;
  // parameters: Array<any>;

  constructor() {
  }

  ngOnInit() {

    let svgCanvas = Snap("#svg");
    this.path = svgCanvas.path("M-0.5,0.5v720h1024V0.5H-0.5z M547.106,410.909c-69.631,48.61,0.971,77.734,24.619,144.737c23.648,67.003-89.13,130.346-141.339,133.589c-43.588,2.707-236.07-63.657-155.929-218.684s-26.392-198.594-31.647-278.735c-5.255-80.141,60.167-136.411,169.188-155.799c150.307-26.731,60.163,90.673,94.037,86.08c77.513-10.51,115.608-123.252,194.435-81.211C779.299,82.926,616.737,362.298,547.106,410.909z");


    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))+5;

    svgCanvas.attr({preserveAspectRatio:'none'});
    svgCanvas.attr({width:w});
    svgCanvas.attr({height:h});
    svgCanvas.attr({viewBox:"0, 0, 1024, 724"});


    var parameters = [
      //step 1
      ['d:"M0.5-0.5v720h1024v-720H0.5z M727.684,308.487c-69.631,48.61-60.606,236.047-36.957,303.05c23.648,67.003-259.515,52.796-311.497,34.845c-41.28-14.255-356.793,26.204-276.652-128.823s50.66-196.511,45.405-276.652c-5.255-80.141,88.436-189.684,197.458-209.073C495.747,5.105,485.794,97.672,519.667,93.079c77.513-10.51,215.408-110.872,249.126-34.045C804.696,140.84,797.315,259.877,727.684,308.487z"'
      , 4000, mina.easin],
      //step2
      ['d:"M0.5,0.5v720h1024V0.5H0.5z M758.306,378.142c-69.631,48.61-91.227,166.392-67.579,233.395c23.648,67.003-258.576,19.886-311.497,34.845C326.433,661.307-9.241,767.62,70.9,612.593s82.338-291.544,77.082-371.685c-5.255-80.141,145.456-74.589,254.478-93.977C552.767,120.2,399.292,89.911,512,39.227c71.341-32.082,396.319-52.541,430.037,24.286C977.939,145.319,827.937,329.532,758.306,378.142z"'
      , 4000, mina.easin]

      // ,
      // [/* step3 attrs, duration, easing */],
      // [/* step4 attrs, duration, easing */],
    ];

    this.loop(0);
  }



  loop(step) {
    // Unpack the values.
    let [attrs, duration, easing] = parameters[step];
    // Increment the step number, and go back to 0 if it's bigger than the
    // number of items in the parameters array.
    step = (step + 1) % parameters.length;
    // Recursively execute this function as the callback. Note that "bind" is
    // a tiny bit slower than just defining a function.
    let callback = function() { this.loop(step); };
    this.path.animate(attrs, duration, easing, callback);
  };


// last bracket
}
