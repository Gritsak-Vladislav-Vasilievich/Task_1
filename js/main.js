const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

new Swiper('.swiper-container', {
  // breakpoints: {
  //     1370: {
  //         slidesPerView: 3,
  //         spaceBetween: 25,
  //     },

  //     1024: {
  //         slidesPerView: 2.2,
  //         spaceBetween: 25,
  //     },

  //     653: {
  //         slidesPerView: 1.1,
  //         spaceBetween: 15,
  //     },

  //     320: {
  //         slidesPerView: 1.1,
  //         spaceBetween: 10,
  //     }
  // }
});