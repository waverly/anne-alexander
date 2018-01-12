import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,

} from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ opacity: 0 }),

            // animation and styles at end of transition
            animate('5s', style({ opacity: 1 }))
        ]),
        transition(':leave', [

            // styles at start of transition
            style({ opacity: 1 }),

            // animation and styles at end of transition
            animate('5s', style({ opacity: 0 }))
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
