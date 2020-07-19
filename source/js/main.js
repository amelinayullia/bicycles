"use strict";
var bodyElement = document.querySelector("body");
var navMain = bodyElement.querySelector(".main-nav");
var navToggle = bodyElement.querySelector(".main-nav__toggle");
var introElement = bodyElement.querySelector(".intro");
var logoElement = bodyElement.querySelector(".intro__logo");
var mapWrapper = document.querySelector(".contacts__map-wrapper");
var form = document.querySelector('.intro__form');
var nameInput = document.querySelector('#input-name');
var phoneInput = document.querySelector('#input-phone');
var numInputsRegEx = /[^\d,+,\-,()]/g;


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

var checkInputValidity = function(input) {
  if (input.value) {
    return true;
  }
  input.classList.add('error');
  return false;
}
var onInputChangeHandler = function(e) {
  if (e.target.classList.contains('error')) {
    e.target.classList.remove('error');
  }
}
var onPhoneInputChangeHandler = function(e) {
  e.target.value = e.target.value.replace(numInputsRegEx, '');
}
var onFormSubmitHandler = function (e) {
  e.preventDefault();
  checkInputValidity(nameInput);
  checkInputValidity(phoneInput);
  if (checkInputValidity(nameInput) && checkInputValidity(phoneInput)) {
    form.reset();
  }
}
if (form) {
  form.noValidate = true;
  form.addEventListener('submit', onFormSubmitHandler);
  phoneInput.addEventListener('input', onInputChangeHandler);
  phoneInput.addEventListener('input', onPhoneInputChangeHandler);
  nameInput.addEventListener('input', onInputChangeHandler);
}
