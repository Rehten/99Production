import * as $ from 'jquery'

$('.service-items').each(function () {
  $(this).find('.service-item').click(function () {
    const parameter = $(this).attr('data-target')
    let isSelected: boolean = $(this).hasClass('active')

    // made this code more readable
    if (!isSelected) {
      // colored selected tab
      $('.service-item').each(function () {
        $(this).removeClass('active')
      })
      $(this).addClass('active')

      //  show/hide texts and bg-images
      $('.service-text').removeClass('show')
      $(`#${parameter}Text`).addClass('show')

      $('.service-image').removeClass('show')
      $(`#${parameter}Image`).addClass('show')
    }
  })
})
