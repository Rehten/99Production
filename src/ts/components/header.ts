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

  // hide mobile menu on every link click
  $('.nav-link').on('click', function () {
    $('#StickerNavBar').removeClass('show')
  })

  //    toggle header on scroll
  let stickHeader = $('#StickHeader')

  $(window).scroll(function (ev) {
    let userScrollingPosition = $(this).scrollTop()
    let firstBlockHeight = $('#ServiceBlock').height()
    if (userScrollingPosition > firstBlockHeight) {
      stickHeader.addClass('showed')
    } else {
      stickHeader.removeClass('showed')
    }
  })
})
