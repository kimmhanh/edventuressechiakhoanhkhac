
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow1/1 (1).png", 
      "images/slideshow1/4298883_cover_.jpg",
      "images/slideshow1/hoi_an.jpg",
      "images/slideshow1/choi-gi-o-sapa.jpg",
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

      var offset = 200;
      var duration = 500;
      $(window).scroll(function () {
          if ($(this).scrollTop() > offset) {
              $('.back-to-top').fadeIn(400);
          } else {
              $('.back-to-top').fadeOut(400);
          }
      });

      $('.back-to-top').on('click', function (event) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: 0
          }, 600);
          return false;
      });
    
  })(window.jQuery);


