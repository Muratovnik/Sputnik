$(function() {
    //slick slider init
    $('.js-topslider').slick({
      speed: 600,
      dots: true,
      arrows: false
    });


    // menu toggle  
  $('.js-menu-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    $('.main_header__list').toggleClass('is-open');
  });
});
  


