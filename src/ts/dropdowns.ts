import * as $ from 'jquery'

$(document).ready(function () {
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
