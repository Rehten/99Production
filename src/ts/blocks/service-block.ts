import * as $ from 'jquery'

$('.service-items').each(function () {
  const horizontalRailList: Array<HTMLElement> = []
  const serviceItemsList: Array<HTMLElement> = []

  // симуляция функционала на реакте или ангуляре - два массива - это состояние блока
  $(this).find('.service-item-rail').each(function (index, rail) {
    horizontalRailList.push(rail)
  })
  $(this).find('.service-item').each(function (index, rail) {
    serviceItemsList.push(rail)
  })

  /* а здесь химия: при клике на serviceItem с индексом, скажем "x"
  * будут сниматься подцветски со всех horizontalRails, после чего
   * подсвечиваться horicontalRail с индексом "x" и "x+1"
  * */
  $.each(serviceItemsList, function (index, item) {
    // событие по клику: добавление цвета плюс смена изображения
    $(item).click(function () {
      const parameter = $(this).attr('data-target')
      let isSelected: boolean = $(this).hasClass('active')
      const firstOfColoredRail = $(horizontalRailList[index])
      const secondOfColoredRail = $(horizontalRailList[index + 1])

      // made this code more readable
      if (!isSelected) {
        // remove color from all tabs and rails
        $('.service-item').each(function () {
          $(this).removeClass('active')
        })
        $.each(horizontalRailList, function (index, rail) {
          $(rail).removeClass('active')
        })

        // дает подцветку на выделенный таб, и на две рельсы сверху и снизу
        $(this).addClass('active')
        firstOfColoredRail.addClass('active')
        secondOfColoredRail.addClass('active')

        //  отвечает за переключение изображений в ответ на клик
        $('.service-text').removeClass('show')
        $(`#${parameter}Text`).addClass('show')

        $('.service-image').removeClass('show')
        $(`#${parameter}Image`).addClass('show')
      }
    })

    // событие по ховеру - простая подцветка
    $(item).mouseenter(function () {
      const firstOfColoredRail = $(horizontalRailList[index])
      const secondOfColoredRail = $(horizontalRailList[index + 1])

      // дает подцветку на выделенный таб, и на две рельсы сверху и снизу
      firstOfColoredRail.addClass('hovered')
      secondOfColoredRail.addClass('hovered')
    })

    $(item).mouseleave(function () {
      const firstOfColoredRail = $(horizontalRailList[index])
      const secondOfColoredRail = $(horizontalRailList[index + 1])

      // дает подцветку на выделенный таб, и на две рельсы сверху и снизу
      firstOfColoredRail.removeClass('hovered')
      secondOfColoredRail.removeClass('hovered')
    })

  })

  // функционал для мобильников
  $('.service-item.mobile').click(function () {
    const parameter = $(this).attr('data-target')
    let isSelected: boolean = $(this).hasClass('active')

    // made this code more readable
    if (!isSelected) {
      // colored selected tab, and remove color from others tab
      $('.service-item, .service-item-rail').each(function () {
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
