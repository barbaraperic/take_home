import React, { useEffect } from 'react';
//import Loader from "./Loader"
import { TimelineMax, Bounce } from "gsap";
import "./styling.scss"

//process.env.REACT_APP_API_KEY

const App = () => {


  useEffect(() => {

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


  }, []);

  return (
    <div >
      <h2>What is the weather outside</h2>
      {/* <img src={sunIcon} alt="sun" id="sunGlobe"/> */}
      {/* <img src={grade} alt="grade" id="grade"/> */}
      <div className="container">
        <div className="newBall"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

export default App;
