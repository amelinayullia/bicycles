"use strict";
var bodyElement = document.querySelector("body");
var navMain = bodyElement.querySelector(".main-nav");
var navToggle = bodyElement.querySelector(".main-nav__toggle");
var introElement = bodyElement.querySelector(".intro");
var logoElement = bodyElement.querySelector(".intro__logo");
var mapWrapper = document.querySelector(".contacts__map-wrapper");

if (bodyElement && navMain && navToggle && introElement && logoElement) {
  navMain.classList.remove("main-nav--nojs");
  mapWrapper.classList.remove("contacts__map-wrapper--nojs");
  navMain.classList.remove("main-nav--opened");
  navMain.classList.add("main-nav--closed");
  introElement.classList.remove("intro--nojs");
  logoElement.classList.remove("intro__logo--nojs");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      bodyElement.classList.add("overflowed");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
      bodyElement.classList.remove("overflowed");
    }
  });
}
