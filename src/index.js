import './pages/index.css';
import './components/swiper-slider';
import './components/navigation-menu';

import { enableValidation } from "./components/validate.js";
enableValidation({
  formSelector: ".feedback-form__form",
  inputSelector: ".feedback-form__input",
  submitButtonSelector: ".feedback-form__button",
  inactiveButtonClass: "feedback-form__button_inactive",
  inputErrorClass: "feedback-form__input_type_error",
  errorClass: "feedback-form__input-error_active",
});


const playButton = document.getElementById("about-video-play");
const videoPreviewContainer = document.getElementById(
  "about-video-preview-container"
);
// const videoWrap = document.getElementById("about-video-wrap");
const iframe = document.getElementById("video-iframe");

playButton.addEventListener('click', () => {
    videoPreviewContainer.classList.add("about__video-preview-container_display_none");
    iframe.src =
      "https://vk.com/video_ext.php?oid=-219828625&id=456239022&autoplay=1";
})
