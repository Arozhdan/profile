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
  $(".start-btn").click(function () {
    $('html,body').animate({
        scrollTop: $(".message-form").offset().top
      },
      'slow');
  });
  
  window.onscroll = function () {
    myFunction()
  };
  const initialOffset = $(".sticky")[0].offsetTop;

  function myFunction() {

    if (window.pageYOffset > initialOffset) {
      $(".sticky").first().addClass("fixed");
    } else {
      $(".sticky").first().removeClass("fixed");
    }
  }

  $('.feedbacks-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    adaptiveHeight: true
  })
  $('.slick-next').text('>')
  $('.slick-prev').text('<')

});