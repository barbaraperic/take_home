import React from 'react';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import TunaFalling from './TunaFalling';

const AnimationApp = () => {
  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 500,
        smoothScrolling: true,
        forceHeight: false,
      }}
    >
      <Parallax
        data={{
          'data-center-center': 'opacity: 1;',
          'data-bottom-top': 'opacity: 0;',
        }}
      >
        <TunaFalling />
      </Parallax>
    </ParallaxProvider>
  );
};

export default AnimationApp;
