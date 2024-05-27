const swiper = new Swiper('.swiper-cards', { /*второй слайдер */
    loop: true,
    slidesPerView: 4,
  
    pagination: {
      el: '.swiper-cards-pagination',
    },
  });

const swiperSecond = new Swiper('.big-cards-swiper', { /*первый слайдер */
  allowTouchMove: false,
  loop: true,
  });

function switchSlide(id) {
    // Find swiper on page
    const swiperDiv = document.querySelector('.big-cards-swiper').swiper;
    // Find old selected button
    const oldSelectedButton = document.querySelector(".active");
    // Remove act class
    oldSelectedButton.classList.remove("active");
    // Find new selected button
    const newSelectedButton = document.getElementById(id);
    // Add act class
    newSelectedButton.classList.add("active");

    // Slide to selected block
    swiperDiv.slideTo(id)
}