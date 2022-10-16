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