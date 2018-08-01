import * as $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  $('.companies-list').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true
      },
      992: {
        items: 5,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true
      }
    }
  })

  // init autoplay
  $('.owl-carousel.companies-list').trigger('play.owl.autoplay',[3000])
})
