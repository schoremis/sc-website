const menuButton = document.querySelector(".menu-button");
const drawer = document.querySelector(".mobile-drawer");
const drawerClose = document.querySelector(".drawer-close");
const cookieBanner = document.querySelector(".cookie-banner");
const cookieAccept = document.querySelector(".cookie-accept");

function setDrawer(open) {
  drawer.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("disable-scroll", open);
}

menuButton.addEventListener("click", () => setDrawer(true));
drawerClose.addEventListener("click", () => setDrawer(false));

drawer.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setDrawer(false);
  }
});

if (localStorage.getItem("cookie-ok") === "true") {
  cookieBanner.classList.add("is-hidden");
}

cookieAccept.addEventListener("click", () => {
  localStorage.setItem("cookie-ok", "true");
  cookieBanner.classList.add("is-hidden");
});
