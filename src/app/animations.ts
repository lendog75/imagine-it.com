import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideRightTransition =
  trigger('slideRightTrigger', [
    state('fadeIn', style({
      opacity: '1'
    })),
    transition('void <=> *', [
      style({ opacity: '0', transform: 'translateX(-1120px)' }),
      animate('2s 500ms ease-out')
    ])
  ])

export const slideLeftTransition =
  trigger('slideLeftTrigger', [
    state('fadeIn', style({
      opacity: '1'
    })),
    transition('void <=> *', [
      style({ opacity: '0', transform: 'translateX(1120px)' }),
      animate('2s  ease-out')
    ])
  ])

export const scaleTransition =
  trigger('scaleTrigger', [
    state('small', style({
      transform: 'scale(.5)'
    })),
    state('original', style({
      transform: 'scale(1)'
    })),
    state('large', style({
      transform: 'scale(1.6)'
    })),
    transition('* <=> *', animate('500ms ease-out'))
  ]);


export const rollInTransition =
  trigger('rollInTrigger', [
    state('rollIn', style({
      opacity: '1'
    })),
    transition('void <=> *', [
      style({opacity: '0', transform: 'translateY(400px)'}),
      animate('2s 1.5s ease-out')
    ])
  ])


export const rollDownTransition =
  trigger('rollDownTrigger', [
    state('rollDown', style({
      opacity: '1'
    })),
    transition('void <=> *', [
      style({opacity: '0', transform: 'translateY(-500px)'}),
      animate('1s ease-out')
    ])
  ])
