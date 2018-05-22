import './scss/custom/result.scss'
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'
import * as $ from 'jquery'
import './ts/components/toggle-menu'
import './ts/components/header'
import './ts/blocks/service-block'
import './ts/blocks/team-block'
import './ts/blocks/companies-block'

$(document).ready(() => {
  // replace to service block
  $('.service-item')[0].click()
});
