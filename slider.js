let myThirdSlider = new Swiper('.third-slider', {
   slidesPerView: 4,
   grabCursor: true,
   scrollbar: {
      el: '.line',
      draggable: true
   },
   breakpoints: {
      1000: {
         slidesPerView: 3
      }
   }

});
let myFirstSlider = new Swiper('.first-slider', {
   navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left'
   },
   simulateTouch: true,
   breakpoints: {
      640: {
         slidesPerView: 2
      },
      1000: {
         slidesPerView: 3
      }
   }

});
let mySecondSlider = new Swiper('.second-slider', {
   breakpoints: {
      640: {
         slidesPerView: 2
      },
      1000: {
         slidesPerView: 3,
      }
   }
}
);
myFirstSlider.controller.control = mySecondSlider;
mySecondSlider.controller.control = myFirstSlider;



