'use strict';

var menuBtnElement = document.querySelector('.main-nav__menu-btn');
var mainNavElement = document.querySelector('.main-nav');
var searchFormElement = mainNavElement.querySelector('.main-nav__form');
var searchBtnElement = searchFormElement.querySelector('label');

/// открыть/закрыть меню //////
var openElement = function (element, classElement) {
  element.classList.remove(classElement + '--close');
  element.classList.add(classElement + '--open');
};

var closeElement = function (element, classElement) {
  element.classList.remove(classElement + '--open');
  element.classList.add(classElement + '--close');
};

var closeOpenElement = function (element, classElement) {
  if (element.classList.contains(classElement + '--close')) {
    openElement(element, classElement)
  } else {
    closeElement(element, classElement)
  };
};

var onMenuOpenClose = function () {
  closeOpenElement(mainNavElement, 'main-nav');
}

menuBtnElement.addEventListener('click', onMenuOpenClose);

var onSearchOpenClose = function () {
  closeOpenElement(searchFormElement, 'main-nav__form');
}

searchBtnElement.addEventListener('click', onSearchOpenClose);

//// липкая шапка //////

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.header__wrap').addClass('fixed');
    $('.header__wrap').removeClass('static');
  
  } else {
    $('.header__wrap').addClass('static');
    $('.header__wrap').removeClass('fixed');
  }
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() + $(window).height() > $(document).height() - 0) {
//     $('.main-nav').addClass('static');
//     $('.main-nav').removeClass('fixed');
//   } else {
//     $('.main-nav').addClass('fixed');
//     $('.main-nav').removeClass('static');
//   }
// });