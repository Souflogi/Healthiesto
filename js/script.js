"use strict";

const headerEl = document.querySelector(".header");
const bntEl = document.querySelector(".btn-mobile-nav");

bntEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
