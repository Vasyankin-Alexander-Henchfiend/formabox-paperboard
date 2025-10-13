import './pages/index.css';
import './components/swiper-slider';


const playButton = document.getElementById("about-video-play");
const videoPreviewContainer = document.getElementById(
  "about-video-preview-container"
);
const videoWrap = document.getElementById("about-video-wrap")

playButton.addEventListener('click', () => {
    videoPreviewContainer.classList.add("about__video-preview-container_display_none");
    videoWrap.innerHTML = "<iframe src='https://vk.com/video_ext.php?oid=-219828625&id=456239022&autoplay=1' allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;' frameborder='0' allowfullscreen class='about__video'></iframe>"
})
