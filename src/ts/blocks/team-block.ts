import * as $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  $('.team-list').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      992: {
        items: 3,
        nav: false
      }
    }
  })
})
