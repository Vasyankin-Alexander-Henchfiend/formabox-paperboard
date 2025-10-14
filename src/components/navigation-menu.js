const page = document.getElementById("page");
const headerMenuButton = document.getElementById("header-menu-button");
const headerNavigationMenu = document.getElementById("navigation-menu");
const headerNavigationMenuCloseButton = document.getElementById(
  "navigation-menu-close-button"
);

headerMenuButton.addEventListener("click", () => {
  headerNavigationMenu.classList.add("navigation-menu_visible");
  page.classList.add("page_scroll_lock");
});

headerNavigationMenuCloseButton.addEventListener("click", () => {
  headerNavigationMenu.classList.remove("navigation-menu_visible");
  page.classList.remove("page_scroll_lock");
});
