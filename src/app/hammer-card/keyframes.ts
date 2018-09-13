import { keyframes, style } from '@angular/animations'


export const rotateOutUpRight = [
    style({ transform: 'rotate3d(0, 0, 0, 0deg)', opacity: 1, 'transform-origin': 'right bottom', offset: 0 }),
    style({ transform: 'rotate3d(0, 0, 1, 90deg)',  opacity: 0, 'transform-origin': 'right bottom', offset: 1}),
]