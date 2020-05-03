 $(document).ready(function(){
    $('.images-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,



    responsive: [
    {
      breakpoint: 991,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<button class="arrow prev"></button>',
        nextArrow:'<button class="arrow next"></button>',       
      }
    },
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        prevArrow:'<button class="arrow prev"></button>',
        nextArrow:'<button class="arrow next"></button>',
      }
    }
 
  ]
    
  });
   });

    
$(function(){
  $('a[href^="#"]').on('click', function(event) {
       event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
       
    $('html, body').animate({scrollTop: dn}, 1000);
    
  });
});

$(document).ready(function(){
  $('.popup-btn').on('click', function(event) {
      event.preventDefault();
      $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function(event) {
      event.preventDefault();
      $('.popup').fadeOut();
  });
});
// èíèöèàëèçàöèÿ wow js
new WOW().init();