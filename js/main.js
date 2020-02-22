$(function () {
  $(window).scroll(function () {

    $('.route__items').each(function () {
      var elPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (elPos < topOfWindow + 900) {
        $(this).addClass('zoomInDown');
      }
    })

  })

});