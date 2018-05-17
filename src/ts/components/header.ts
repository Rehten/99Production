import * as $ from 'jquery'

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    const targetSelector: string = $(this).attr('data-target')
    let isHeaderOpen: boolean = $(targetSelector).hasClass('show')
    if (isHeaderOpen) {
      $(targetSelector).removeClass('show')
      $(this).removeClass('show')
    } else {
      $(targetSelector).addClass('show')
      $(this).addClass('show')
    }
  })

  // dropdown navlinks on header
  let isDropdownShow: boolean = false
  $('.nav-item').on('click', function () {
    const dropdownMenu = $(this).find('.dropdown-menu')
    if (isDropdownShow) {
      isDropdownShow = false
      dropdownMenu.removeClass('show')
    } else {
      isDropdownShow = true
      dropdownMenu.addClass('show')
    }
  })
})
