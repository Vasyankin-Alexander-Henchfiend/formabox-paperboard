import './pages/index.css';
import './components/swiper-slider';

const page = document.getElementById("page");
const playButton = document.getElementById("about-video-play");
const videoPreviewContainer = document.getElementById(
  "about-video-preview-container"
);
const videoWrap = document.getElementById("about-video-wrap");

const headerMenuButton = document.getElementById("header-menu-icon");
const headerNavigationMenu = document.getElementById("navigation-menu");
const headerNavigationMenuCloseButton = document.getElementById(
  "navigation-menu-close-button"
);

playButton.addEventListener('click', () => {
    videoPreviewContainer.classList.add("about__video-preview-container_display_none");
    videoWrap.innerHTML = "<iframe src='https://vk.com/video_ext.php?oid=-219828625&id=456239022&autoplay=1' allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;' frameborder='0' allowfullscreen class='about__video'></iframe>"
})

headerMenuButton.addEventListener('click', () => {
  headerNavigationMenu.classList.add("navigation-menu_visible");
  page.classList.add("page_scroll_lock");
})

headerNavigationMenuCloseButton.addEventListener('click', () => {
  headerNavigationMenu.classList.remove("navigation-menu_visible");
  page.classList.remove("page_scroll_lock");
})
