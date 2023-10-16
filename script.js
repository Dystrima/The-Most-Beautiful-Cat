const swiper = new Swiper(".swiper", {
  // loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  // spaceBetween: 100,
  // autoplay: { delay: 2000 },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
