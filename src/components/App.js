import React, { useEffect } from 'react';
//import Loader from "./Loader"
import { gsap } from "gsap";
import "./styling.scss"

//process.env.REACT_APP_API_KEY

const App = () => {


  useEffect(() => {
    gsap.to('.ball', {
      duration: 1,
      x: 200,
      scale: 2
    })
  }, []);

  return (
    <div className="layout">
      <h2>What is the weather outside</h2>
      {/* <img src={sunIcon} alt="sun" id="sunGlobe"/> */}
      {/* <img src={grade} alt="grade" id="grade"/> */}
      <div className="ball"></div>
    </div>
  );
}

export default App;
