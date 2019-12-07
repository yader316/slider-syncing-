// $('.portfolio-item-slider').on('init', function(event, slick, currentSlide){
//   var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
//       totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
//   $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
// });

// $('.portfolio-thumb-slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   asNavFor: '.portfolio-item-slider',
//   dots: false,
//   arrows: false,
//   focusOnSelect: true,
//   infinite: false
// });

// $('.portfolio-item-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   asNavFor: '.portfolio-thumb-slider',
//   infinite: false
// });

// var current = 0; // current slider dupa refresh
// $('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
// $('.portfolio-item-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
//   current = currentSlide;
//   $('.portfolio-thumb-slider .slick-slide').removeClass('slick-current');
//   $('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
//   var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
//       totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4

//   if(totalSlidesPerPage > slick.slideCount) {
//     $('.controls').html(nrCurrentSlide + " - " + slick.slideCount + " of " + slick.slideCount);
//   } else {
//     $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
//   }
// });
$('.portfolio-item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.portfolio-thumb-slider'
});
$('.portfolio-thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.portfolio-item-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});