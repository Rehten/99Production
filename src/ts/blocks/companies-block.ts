import * as $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  $('.companies-list').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  })
})
