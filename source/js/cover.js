'use strict';

var logoBtnElement = document.querySelector('.cover__link');

var goHomePage = function () {
  location.href = '/blog.html'
}

logoBtnElement.addEventListener('click', function (evt) {
  evt.preventDefault();
  logoBtnElement.style.animation = 'disappear 1s forwards';
  setTimeout(goHomePage, 1000);
});