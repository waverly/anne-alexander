import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
// import { fadeInAnimation } from './../../_animation/index';
import "snapsvg-cjs";
import { fadeInAnimation } from '../../_animation/index';

declare var Snap: any;


@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class SvgComponent implements OnInit {


  public location = '' ;
  constructor(private  _router : Router)
  {
    this.location = _router.url;
  }

  ngOnInit() {
    // attempt to call a fx first, on load, and see if it can act as a loading
    this.createSvg();
  }

  createSvg() {

    let svgArray = [
      "M-0.5,0.5v1020h1440V0.5H-0.5z M682.628,452.872L682.628,452.872L682.628,452.872L682.628,452.872l-569.893-86.478l565.358,85.08l0,0l1.349,6.175l0,0l135.379-138.565L682.628,452.872L682.628,452.872z",
      // "M-0.5,0.5v1020h1440V0.5H-0.5z M1361.474,943.74c-41.465,54.697-395.51,18.393-440.434-7.812c-67.84-39.574-386.412-17.389-446.426-12.167c-110.823,9.643-269.814,50.507-354.993,17.908c-85.179-32.599-65.102-189.413-8.191-325.603s23.698-275.865,2.048-354.272s95.827-183.67,178.16-198.585s448.164,52.034,555.761,24.536s353.631-36.235,395.12-28.418c112.253,21.149,44.239,106.919,36.167,218.903c-8.072,111.983,86.008,401.319,86.008,401.319S1402.94,889.043,1361.474,943.74z",
      // "M-0.5,0.5v1020h1440V0.5H-0.5zM1293.703,943.348c-54.523,41.694-323.063,8.224-372.662-7.42c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-212.997,22.125-298.176-10.474S132.59,802.925,69.555,669.46c-55.235-116.952-36.377-311.358,0-384.112c40.081-80.162-50.602-227.242,31.731-242.157s351.1,58.544,453.253,14.979c115.569-49.287,643.523-28.143,690.732,18.422c68.105,67.176,168.675,225.457,113.563,325.66c-54.107,98.376,15.031,207.086,30.061,260.528C1403.181,713.572,1350.484,899.927,1293.703,943.348z",
      "M-0.5,0.5v1020h1440V0.5H-0.5z M1350.382,911.377c-54.523,41.694-237.966,71.228-390.135-1.619c-122.973-58.87-380.973,36.79-508.309,59.896c-118.783,21.555-84.178-97.129-239.585-67.99C122.711,918.472,24.57,793.203,70.055,668.96c44.465-121.456-67.079-338.103,0-384.112c87.258-59.85,59.519-189.014,135.823-223.35c97.129-43.708,393.205,45.184,495.358,1.619c115.569-49.287,348.601,22.657,412.969,6.731c129.51-32.044,299.445,68.027,244.333,168.23c-54.107,98.376,18.692,335.124-12.016,403.217C1311.556,718.827,1407.163,867.955,1350.382,911.377z",
      "M-0.5,0.5v1020h1440V0.5H-0.5zM1293.703,943.348c-54.523,41.694-323.063,8.224-372.662-7.42c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-212.997,22.125-298.176-10.474S132.59,802.925,69.555,669.46c-55.235-116.952-36.377-311.358,0-384.112c40.081-80.162-7.384-176.34,74.949-191.255S500.85,40.074,554.539,58.17c114.356,25.916,619.053,13.632,673.541,42.115c88.071,49.699,185.866,201.764,130.754,301.967c-54.107,98.376,15.031,207.086,30.061,260.528C1403.181,713.572,1350.484,899.927,1293.703,943.348z",
      "M0,0v1020h1440V0H0zM1114.558,947.81c-54.523,41.694-143.418,3.263-193.017-12.381c-130.023-41.011-319.091-35.273-446.426-12.167c-118.783,21.555-184.01-15.577-269.189-48.176s-70.905-109.004-88.896-256.106c-16.933-136.519-11.641-200.017-46.975-334.131C48.241,194.604,139.467,121.681,221.8,106.766s137.455,59.908,229.526,41.917c134.403-29.632,364.45-100.38,552.572-82.99c327.237,34.779,410.547,235.856,355.435,336.059c-54.107,98.376-2.905,155.586,30.061,260.528C1448.119,871.929,1171.339,904.388,1114.558,947.81z"

    ];

    let svgCanvas;

    svgCanvas = Snap("#svg");

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))+5;

    svgCanvas.attr({
      width: '100%',
      height: '100%',
      viewBox:"0, 0, 1440, 1020",
      preserveAspectRatio: 'none'
    });


    var path = svgCanvas.path(svgArray[0]);

    var step1 = function() {
      console.log('step1');
      path.animate({ d:
        svgArray[0]
        },
        1000,
        mina.easein,
        step2
      );
    };

      var step2 = function(){
        console.log('step2');
        path.animate({ d:
          svgArray[1]
          },
          4000,
          mina.easein,
          step3
        );
      };

      var step3 = function(){
        console.log('step3');
        path.animate({ d:
          svgArray[2]
          },
          4000,
          mina.easein,
          step4
        );
      };

      var step4 = function(){
        console.log('step4');
        path.animate({ d:
          svgArray[3]
          },
          4000,
          mina.easein,
          step2
        );
      };

      setTimeout(step1, 2000);



    // step1();

  }




  // createSvg() {
  //
  //   console.log('in create svg');
  //   let svgCanvas;
  //
  //   svgCanvas = Snap("#svg");
  //
  //   var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  //   var h = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0))+5;
  //
  //   svgCanvas.attr({
  //     width: w,
  //     height: h,
  //     viewBox:"0, 0, 1024, 724",
  //     preserveAspectRatio: 'none'
  //   });
  //
  //   var path = svgCanvas.path("M-0.5,0.5v720h1024V0.5H-0.5z M547.106,410.909c-69.631,48.61,0.971,77.734,24.619,144.737c23.648,67.003-89.13,130.346-141.339,133.589c-43.588,2.707-236.07-63.657-155.929-218.684s-26.392-198.594-31.647-278.735c-5.255-80.141,60.167-136.411,169.188-155.799c150.307-26.731,60.163,90.673,94.037,86.08c77.513-10.51,115.608-123.252,194.435-81.211C779.299,82.926,616.737,362.298,547.106,410.909z");
  //
  //   var step1 = function() {
  //     path.animate({ d:
  //        "M0.5-0.5v720h1024v-720H0.5z M727.684,308.487c-69.631,48.61-60.606,236.047-36.957,303.05c23.648,67.003-259.515,52.796-311.497,34.845c-41.28-14.255-356.793,26.204-276.652-128.823s50.66-196.511,45.405-276.652c-5.255-80.141,88.436-189.684,197.458-209.073C495.747,5.105,485.794,97.672,519.667,93.079c77.513-10.51,215.408-110.872,249.126-34.045C804.696,140.84,797.315,259.877,727.684,308.487z"
  //       },
  //       4000,
  //       mina.easein,
  //       step2
  //     );
  //   };
  //
  //   var step2 = function(){
  //     path.animate({ d:
  //       "M0.5,0.5v720h1024V0.5H0.5z M758.306,378.142c-69.631,48.61-91.227,166.392-67.579,233.395c23.648,67.003-258.576,19.886-311.497,34.845C326.433,661.307-9.241,767.62,70.9,612.593s82.338-291.544,77.082-371.685c-5.255-80.141,145.456-74.589,254.478-93.977C552.767,120.2,399.292,89.911,512,39.227c71.341-32.082,396.319-52.541,430.037,24.286C977.939,145.319,827.937,329.532,758.306,378.142z"
  //     },
  //       4000,
  //       mina.easein,
  //       step3
  //     );
  //   };
  //
  //   var step3 = function(){
  //     path.animate({ d:
  //       "M0.5,0.5v720h1024V0.5H0.5z M758.306,378.142c-69.631,48.61-91.227,166.392-67.579,233.395c23.648,67.003-258.576,19.886-311.497,34.845c-52.796,14.924-374,88.58-293.859-66.447s17.851-387.096,12.596-467.237c-5.255-80.141,169.713,3.565,278.735-15.823c150.307-26.731,77.172,78.68,189.88,27.995c71.341-32.082,225.778,6.812,203.269,87.637C743.073,308.665,827.937,329.532,758.306,378.142z"
  //      },
  //       4000,
  //       mina.easein,
  //       step4
  //     );
  //   };
  //
  //   var step4 = function(){
  //     path.animate({ d:
  //       "M-0.5,0.5v720h1024V0.5H-0.5z M279.326,381.696c-62.759,62.759-80.18,34.2-93.723,23.126c-55.007-44.976-12.807,59.289-65.728,74.248c-52.796,14.924-121.064-5.123-52.339-165.537c35.655-83.224,3.203-35.876-2.052-116.017c-5.255-80.141-50.979-88.556,58.042-107.945c150.307-26.731,46.743,84.765,159.451,34.081c71.341-32.082,45.635,64.019,23.126,144.845C279.326,364.656,323.145,337.878,279.326,381.696z"
  //      },
  //       4000,
  //       mina.easein,
  //       step5
  //     );
  //   };
  //
  //   var step5 = function(){
  //     path.animate({ d:
  //       "M0.5-0.5v720h1024v-720H0.5z M547.106,322.054c-69.631,48.61-18.779,182.519,4.869,249.522c23.648,67.003-194.167,38.597-247.088,53.556C252.091,640.057-9.241,767.62,70.9,612.593S36.03,321.049,30.775,240.908c-5.255-80.141,33.636-69.871,142.657-89.259C323.739,124.918,399.292,89.911,512,39.227c71.341-32.082,131.21,87.642,304.382,110.872C904.926,161.977,616.737,273.444,547.106,322.054z"
  //      },
  //       4000,
  //       mina.easein,
  //       step6
  //     );
  //   };
  //
  //   var step6 = function(){
  //     path.animate({ d:
  //       "M0.5-0.5v720h1024v-720H0.5z M982.162,491.162c-69.631,48.61-77.082,165.78-156.277,191.122C758.212,703.94,598.159,550.93,547.121,571.412c-160.5,64.411-217.334,84.056-161.556-81.306c37.389-110.844-107.74-102.407-61.244-167.892c40.981-57.717-80.511-229.809,28.51-249.198c150.307-26.731,176.507,75.761,289.215,25.076c71.341-32.082,307.331-135.288,280.983,58.342C908.609,262.412,1051.792,442.552,982.162,491.162z"
  //      },
  //       4000,
  //       mina.easein,
  //       step7
  //     );
  //   };
  //
  //   var step7 = function(){
  //     path.animate({ d:
  //       "M-0.5,0.5v720h1024V0.5H-0.5z M715.078,437.687c-69.631,48.61,45.113,119.503-34.081,144.845c-67.673,21.655-248.389-41.174-299.427-20.692c-160.5,64.411-351.573,178.153-271.432,23.126c53.702-103.882-89.082-82.504-8.52-195.966c40.981-57.717-62.768-197.27,46.253-216.658c150.307-26.731,299.917,83.548,412.625,32.864c71.341-32.082,265.737-120.26,363.937,48.687C969.327,331.13,784.708,389.076,715.078,437.687z"
  //     },
  //       4000,
  //       mina.easein,
  //       step8
  //     );
  //   };
  //
  //   var step8 = function(){
  //     path.animate({ d:
  //       "M-0.5,0.5v720h1024V0.5H-0.5z M505.722,368.307c-69.631,48.61-113.72,100.968-90.071,167.971c23.648,67.003-162.241,65.421-214.224,47.47C160.146,569.493-7.735,569.587,72.405,414.56S35.059,237.876,29.804,157.735C24.549,77.594,94.84,39.582,203.861,20.193C354.168-6.538,302.66,85.645,336.534,81.052c77.513-10.51,141.748-20.837,175.466,55.99C547.903,218.848,575.353,319.697,505.722,368.307z"
  //     },
  //       4000,
  //       mina.easein,
  //       step1
  //     );
  //   };
  //
  //   step1();
  //
  // }

// last bracket
}
