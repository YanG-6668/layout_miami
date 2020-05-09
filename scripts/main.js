'use strict';

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1500);
  });
});

$(".header__icon_bars, .mobile__icon").click(function() {
  $('.mobile').slideToggle(500);
});
