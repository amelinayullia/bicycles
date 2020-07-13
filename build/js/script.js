'use strict';
var htmlElement = document.querySelector('html');
var navMain = htmlElement.querySelector('.main-nav');
var navToggle = htmlElement.querySelector('.main-nav__toggle');
var mainElement = htmlElement.querySelector('.main');
var logoElement = htmlElement.querySelector('.header__logo');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
mainElement.classList.remove('main--nojs');
logoElement.classList.remove('header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    htmlElement.classList.add('overflowed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    htmlElement.classList.remove('overflowed');
  }
});
