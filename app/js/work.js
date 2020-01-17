$('.work-image-wrapper').slick({
  dots: false,
  infinite: false,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  adaptiveHeight: true
})
$('.slick-next').text('>')
$('.slick-next').addClass('work-nextArr');
$('.slick-prev').text('<')
$('.slick-prev').addClass('work-prevArr');
