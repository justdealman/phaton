/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.2
* Updated: February 5th, 2013
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function($){
  $.fn.slides = function( option ) {
    // override defaults with specified option
    option = $.extend( {}, $.fn.slides.option, option );

    return this.each(function(){
      // wrap slides in control container, make sure slides are block level
      $('.' + option.container, $(this)).children().wrapAll('<div class="slides_control"/>');

      var elem = $(this),
        control = $('.slides_control',elem),
        total = control.children().size(),
        width = control.children().outerWidth(),
        height = control.children().outerHeight(),
        start = option.start - 1,
        effect = option.effect.indexOf(',') < 0 ? option.effect : option.effect.replace(' ', '').split(',')[0],
        paginationEffect = option.effect.indexOf(',') < 0 ? effect : option.effect.replace(' ', '').split(',')[1],
        next = 0, prev = 0, number = 0, current = 0, loaded, active, clicked, position, direction, imageParent, pauseTimeout, playInterval;

      // is there only one slide?
      if (total < 2) {
        // Fade in .slides_container
        $('.' + option.container, $(this)).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
          // let the script know everything is loaded
          loaded = true;
          // call the loaded funciton
          option.slidesLoaded();
        });
        // Hide the next/previous buttons
        $('.' + option.next + ', .' + option.prev).fadeOut(0);
        return false;
      }

      // animate slides
      function animate(direction, effect, clicked) {
        if (!active && loaded) {
          active = true;
          // start of animation
          option.animationStart(current + 1);
          switch(direction) {
            case 'next':
              // change current slide to previous
              prev = current;
              // get next from current + 1
              next = current + 1;
              // if last slide, set next to first slide
              next = total === next ? 0 : next;
              // set position of next slide to right of previous
              position = width*2;
              // distance to slide based on width of slides
              direction = -width*2;
              // store new current slide
              current = next;
            break;
            case 'prev':
              // change current slide to previous
              prev = current;
              // get next from current - 1
              next = current - 1;
              // if first slide, set next to last slide
              next = next === -1 ? total-1 : next;
              // set position of next slide to left of previous
              position = 0;
              // distance to slide based on width of slides
              direction = 0;
              // store new current slide
              current = next;
            break;
            case 'pagination':
              // get next from pagination item clicked, convert to number
              next = parseInt(clicked,10);
              // get previous from pagination item with class of current
              prev = $('.' + option.paginationClass + ' li.'+ option.currentClass +' a', elem).attr('href').match('[^#/]+$');
              // if next is greater then previous set position of next slide to right of previous
              if (next > prev) {
                position = width*2;
                direction = -width*2;
              } else {
              // if next is less then previous set position of next slide to left of previous
                position = 0;
                direction = 0;
              }
              // store new current slide
              current = next;
            break;
          }

          // fade animation
          if (effect === 'fade') {
            // fade animation with crossfade
            if (option.crossfade) {
              // put hidden next above current
              control.children(':eq('+ next +')', elem).css({
                zIndex: 10
              // fade in next
              }).fadeIn(option.fadeSpeed, option.fadeEasing, function(){
                if (option.autoHeight) {
                  // animate container to height of next
                  control.animate({
                    height: control.children(':eq('+ next +')', elem).outerHeight()
                  }, option.autoHeightSpeed, function(){
                    // hide previous
                    control.children(':eq('+ prev +')', elem).css({
                      display: 'none',
                      zIndex: 0
                    });
                    // reset z index
                    control.children(':eq('+ next +')', elem).css({
                      zIndex: 0
                    });
                    // end of animation
                    option.animationComplete(next + 1);
                    active = false;
                  });
                } else {
                  // hide previous
                  control.children(':eq('+ prev +')', elem).css({
