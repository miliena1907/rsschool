const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
   const nav = document.querySelector('nav');
   const disable = document.querySelector('main');
   const link = document.querySelector('a');
   iconMenu.addEventListener("click", function (e) {
      nav.classList.toggle('menu-active');
      disable.classList.add('disable');
      iconMenu.classList.toggle('menu-icon-active');
   });
   disable.addEventListener("click", function (a) {
      nav.classList.remove('menu-active');
      disable.classList.remove('disable');
      iconMenu.classList.remove('menu-icon-active');
   });
   link.addEventListener("click", function (c) {
      nav.classList.remove('menu-active');
   });
};
const slides = document.querySelectorAll('.slide');

$('.popup').on('click', '.slide', function () {
   $('.popup .slide').removeClass('slide-active')
   $(this).addClass('slide-active');

});
$(function ($) {
   $(document).mouseup(function (element) { // событие клика по веб-документу
      var div = $('.slide'); // тут указываем ID элемента
      if (!div.is(element.target) // если клик был не по нашему блоку
         && div.has(element.target).length === 0) { // и не по его дочерним элементам
         div.removeClass('slide-active'); // скрываем его
      }
   });
});