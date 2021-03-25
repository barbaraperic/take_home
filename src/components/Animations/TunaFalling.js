import React from 'react';

import './_tuna_falling.scss';

// $(window).load(function() {
//   //Start up the skrollr object
// 	skrollr.init({
//     //keeps the bottom from being long
// 		forceHeight: false
// 	});

//   // The rest of this controls switching Alice's moods using jQuery Waypoints

//   // How to guess which frame is "being read".
//   var beingRead = function() {
//     // It would be approximately centered, of equal distance from top as from bottom.
//     var $screenHeight = $.waypoints('viewportHeight');
//     var $pageHeight = $(".page").height();
//     var offset = ($pageHeight - $screenHeight) / 2 * -1;

//     return offset;
//   }

//   $(".page").waypoint(function(direction) {
//     var mood = $(this).data("mood");
//     $("body").removeClass().addClass(mood);
//     if (direction === "up") { // if scrolling up
//       $(this).addClass("in-view").removeClass("scrolled-past")
//       .waypoint('next').removeClass("in-view");
//     } else { // else, assuming we're not scrolling at all or are scrolling down
//       $(this).addClass("in-view").removeClass("scrolled-past")
//       .waypoint('prev').removeClass("in-view").addClass("scrolled-past");
//     }
//   }, {
//     offset: beingRead()
//   });
// });

const TunaFalling = () => {
  return (
    <div class="wrapper">
      <div class="alice-falling" data-0="top:-10%" data-6124="top:80%"></div>
      {/* <!-- Now make Tuna "fall" from the bottom. See if you can expose him as the Cheshire cat he is!--> */}
      <div class="tuna-falling" data-0="top:-10%" data-6124="top:80%">
        <img
          class="black-tuna"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice3.png"
          alt="black-tuna"
        />
        <img
          class="tuna-glow"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice2.png"
          alt="tuna-glow"
        />
        <img
          class="real-tuna"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/tuna-alice1.png"
          alt="real-tuns"
        />
      </div>
      <div id="skrollr-body">
        <div id="tunnel" class="frightened">
          <div
            class="page page_falling falling_frightened"
            data-mood="frightened"
          >
            <p>
              Either the well was very deep or she fell very slowly, for she had
              plenty of time to look about her on the way down.
            </p>
          </div>
          <div class="page page_falling falling_curious" data-mood="curious">
            <p>
              At first it was too dark for her to see anything, but as her eyes
              adjusted, she could make out what seemed to be cupboards,
              bookshelves, paintings, lining the walls she was rushing past.{' '}
            </p>
          </div>
          <div class="page page_falling falling_bored" data-mood="bored">
            <p>
              Down, down, down she fell. Would it never come to an end? She
              began to wonder how many miles she’d fallen and whether she’d end
              up at the center of the Earth&mdash;or come out the other side!
            </p>
          </div>
          <div class="page page_falling falling_sleeping" data-mood="sleeping">
            <p>
              How would she call her sister? What if she didn’t speak the
              language? What if they couldn’t understand her and put her in an
              orphanage? She’d never see her sister or her cat again!
            </p>
          </div>
          <div class="page page_falling falling_waking" data-mood="waking">
            <p>
              Poor Tuna! Would they remember to clean his litter box or give him
              his kibble? If only Tuna were with her now. There were no mice to
              live on in the air, but perhaps he could catch a bat.{' '}
            </p>
          </div>

          {/* <!-- Wait 3 seconds or so for the video to end. Then return to the scene --> */}
          <div class="page page_falling falling_weird" data-mood="weird">
            <p>
              Before she could worry too much, her eyes grew heavy and she began
              to nod off whispering, “Do cats eat bats?” to no one in
              particular.
            </p>
          </div>
          <div class="page page_falling falling_aftermath" data-mood="jolted">
            <p>
              She must’ve been dreaming, because for a moment she imagined he
              was there with her, as large as her sister.
            </p>
          </div>
          <div
            class="page page_falling falling_lookit-cat"
            data-mood="jolted"
          ></div>
          <div
            class="page page_falling falling_cat-reveal"
            data-mood="jolted"
          ></div>
          <div class="page page_falling falling_cat-out" data-mood="jolted">
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
