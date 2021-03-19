//import { TweenMax, Elastic } from 'gsap';
import { TimelineMax, Bounce } from "gsap";

//const ball = document.getElementById("ball");

let tl = new TimelineMax()
    
tl.staggerFrom(".ball", 1, {
  y: -300, 
  ease: Bounce.easeOut
}, 0.05)

tl.add('rotate')

tl.staggerFrom(".ball", 2, {
  rotation: 90, 
  ease: Bounce.easeIn
}, 0.05, 'rotate')

tl.staggerFrom(".ball", 1, {
  rotation: 180, 
  ease: Bounce.easeOut
}, 0.05, 'rotate += 1.75')



tl.from(".newBall", 2, {
  rotation: 90, 
  ease: Bounce.easeIn
}, 'rotate')

tl.from(".newBall", 1, {
  rotation: 180, 
  ease: Bounce.easeOut
}, 'rotate += 1.75')