import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export default swiper;
