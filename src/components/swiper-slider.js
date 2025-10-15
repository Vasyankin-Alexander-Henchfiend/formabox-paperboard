import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    addIcons: false,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export default swiper;
