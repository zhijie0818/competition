// JavaScript Document

// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight)
         {
            $('.navbar').addClass('on');
         } 
        else {
            $('.navbar').removeClass('on');
            }
    });

    $('body').scrollspy({ 
        target: '.navbar',
        offset: 80
    })





}());


}
main();

        var s, s2, s3, timer;

        // init
        function roll_Init() {
            s = getRollId("roll_div1");
            s2 = getRollId("roll_div2");
            s3 = getRollId("roll_div3");
            s3.innerHTML = s2.innerHTML;
            timer = setInterval(roll_time, 30)
        }

        var last = 0;
        function roll_time() {
            if (s2.offsetWidth <= s.scrollLeft) {
                s.scrollLeft -= s2.offsetWidth;
            } else {
                s.scrollLeft++;

                // 滚动停止的bug修复
                if(s.scrollLeft==last){
                    s.scrollLeft -= s2.offsetWidth;
                }
                last = s.scrollLeft;
            }
        }

        function getRollId(id) {
            return document.getElementById(id);
        }

        // Init
        window.onload = roll_Init;