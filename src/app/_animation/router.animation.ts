import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition( '* => *', [

           query(':enter',
               [
                   style({ opacity: 0 })
               ],
               { optional: true }
           ),

           query(':leave',
               [
                   style({ opacity: 1 }),
                   animate('5s', style({ opacity: 0 }))
               ],
               { optional: true }
           ),

           query(':enter',
               [
                   style({ opacity: 0 }),
                   animate('5s', style({ opacity: 1 }))
               ],
               { optional: true }
           )

       ])
])
