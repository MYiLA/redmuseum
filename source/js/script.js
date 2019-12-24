'use strict';

var menuBtnElement = document.querySelector('.main-nav__menu-btn');
var mainNavElement = document.querySelector('.main-nav');

/// открыть/закрыть меню //////
var openMainMenu = function () {
  mainNavElement.classList.remove('main-nav--close');
  mainNavElement.classList.add('main-nav--open');
};

var closeMainMenu = function () {
  mainNavElement.classList.remove('main-nav--open');
  mainNavElement.classList.add('main-nav--close');
};

var moveMenu = function () {
  if (mainNavElement.classList.contains('main-nav--close')) {
    openMainMenu()
  } else {
    closeMainMenu()
  };
};

menuBtnElement.addEventListener('click', moveMenu);