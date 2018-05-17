import * as $ from 'jquery'

/* все элементы с .toggle-menu при клике получают/лишаются класса .active,
 * и смотрят в свой data-target: элементу с айдишником из data-target присваивается класс show
 * Желательно, чтобы у элемента, найденного по селектору data-target был класс .toggle-target-menu
  * */
$(document).ready(function () {
  let isDropdownShow: boolean = false
  $('.toggle-menu').on('click', function () {
    const selector: string = $(this).attr('data-target')
    const menu = $(selector)
    if (isDropdownShow) {
      isDropdownShow = false
      menu.removeClass('show')
      $(this).removeClass('active')
    } else {
      isDropdownShow = true
      menu.addClass('show')
      $(this).addClass('active')
    }
  })
})
