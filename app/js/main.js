$(function () {
  AOS.init({
    duration: 500,
  })

  $(".header-scroll").click(function () {
    $('html,body').animate({
        scrollTop: $(".about").offset().top
      },
      'slow');
  });

  window.onscroll = function () {
    myFunction()
  };
  const initialOffset = $("#sticky")[0].offsetTop;

  function myFunction() {

    if (window.pageYOffset > initialOffset) {
      $("#sticky").first().addClass("fixed");
    } else {
      $("#sticky").first().removeClass("fixed");
    }
  }


});