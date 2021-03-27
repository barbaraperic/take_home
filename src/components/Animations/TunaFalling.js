import React from 'react';

import './_tuna_falling.scss';

const TunaFalling = () => {
  return (
    <div className="wrapper">
      <div
        className="alice-falling"
        data-0="top:-10%"
        data-6124="top:80%"
      ></div>
      {/* <!-- Now make Tuna "fall" from the bottom. See if you can expose him as the Cheshire cat he is!--> */}
      <div
        className="tuna-falling"
        data-0="bottom:-20%"
        data-6124="bottom:120%"
      >
        <img
          className="black-tuna"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice3.png"
          alt="black-tuna"
        />
        <img
          className="tuna-glow"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice2.png"
          alt="tuna-glow"
          data-400="opacity: 0"
          data-4124="opacity: 1"
        />
        <img
          className="real-tuna"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice1.png"
          alt="real-tuns"
        />
      </div>

      <div id="skrollr-body">
        <div id="tunnel" className="frightened">
          <div
            className="page page_falling falling_frightened"
            data-mood="frightened"
          >
            <p>
              Either the well was very deep or she fell very slowly, for she had
              plenty of time to look about her on the way down.
            </p>
          </div>
          <div
            className="page page_falling falling_curious"
            data-mood="curious"
          >
            <p>
              At first it was too dark for her to see anything, but as her eyes
              adjusted, she could make out what seemed to be cupboards,
              bookshelves, paintings, lining the walls she was rushing past.{' '}
            </p>
          </div>
          <div className="page page_falling falling_bored" data-mood="bored">
            <p>
              Down, down, down she fell. Would it never come to an end? She
              began to wonder how many miles she’d fallen and whether she’d end
              up at the center of the Earth&mdash;or come out the other side!
            </p>
          </div>
          <div
            className="page page_falling falling_sleeping"
            data-mood="sleeping"
          >
            <p>
              How would she call her sister? What if she didn’t speak the
              language? What if they couldn’t understand her and put her in an
              orphanage? She’d never see her sister or her cat again!
            </p>
          </div>
          <div className="page page_falling falling_waking" data-mood="waking">
            <p>
              Poor Tuna! Would they remember to clean his litter box or give him
              his kibble? If only Tuna were with her now. There were no mice to
              live on in the air, but perhaps he could catch a bat.{' '}
            </p>
          </div>

          {/* <!-- Wait 3 seconds or so for the video to end. Then return to the scene --> */}
          <div className="page page_falling falling_weird" data-mood="weird">
            <p>
              Before she could worry too much, her eyes grew heavy and she began
              to nod off whispering, “Do cats eat bats?” to no one in
              particular.
            </p>
          </div>
          <div
            className="page page_falling falling_aftermath"
            data-mood="jolted"
          >
            <p>
              She must’ve been dreaming, because for a moment she imagined he
              was there with her, as large as her sister.
            </p>
          </div>
          <div
            className="page page_falling falling_lookit-cat"
            data-mood="jolted"
          ></div>
          <div
            className="page page_falling falling_cat-reveal"
            data-mood="jolted"
          ></div>
          <div className="page page_falling falling_cat-out" data-mood="jolted">
            <p>
              &ldquo;Oh yes, cats eat bats all the time. You wouldn’t happen to
              be a bat, now would you?&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TunaFalling;
