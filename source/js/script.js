'use strict';
var bodyElement = document.querySelector('body');
var navMain = bodyElement.querySelector('.main-nav');
var navToggle = bodyElement.querySelector('.main-nav__toggle');
var mainElement = bodyElement.querySelector('.main');
var logoElement = bodyElement.querySelector('.header__logo');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
mainElement.classList.remove('main--nojs');
logoElement.classList.remove('header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    bodyElement.classList.add('overflowed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    bodyElement.classList.remove('overflowed');
  }
});
