"use strict";

// Opening and closing the mobile navigation

const headerEl = document.querySelector(".header");
const bntEl = document.querySelector(".btn-mobile-nav");

bntEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//Smooth scrolling

//helper function
const ScrollElIntoView = El => {
  El.scrollIntoView({
    behavior: "smooth",
  });
};

//Smooth scrolling for navigation
const navListEl = document.querySelector(".main-nav-list");

navListEl.addEventListener("click", e => {
  e.preventDefault();

  // get the href to use it as an id
  const ELhref = e.target.getAttribute("href");

  // If the href attribute is null it means it's not the link
  if (!ELhref) return;
  console.log(ELhref);
  ScrollElIntoView(document.querySelector(ELhref));
});

//Smooth scrolling for buttons and logos
//buttons

const btns = document.querySelectorAll(".btn[href]");
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    if (!e.currentTarget.getAttribute("href")) return;
    ScrollElIntoView(
      document.querySelector(e.currentTarget.getAttribute("href"))
    );
  });
});

//icons
const logos = document.querySelectorAll(".logo[href]");

logos.forEach(logo => {
  logo.addEventListener("click", e => {
    e.preventDefault();

    if (!e.currentTarget.getAttribute("href")) return;
    ScrollElIntoView(
      document.querySelector(e.currentTarget.getAttribute("href"))
    );
  });
});
