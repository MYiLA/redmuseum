"use strict";var logoBtnElement=document.querySelector(".cover__link"),goHomePage=function(){location.href="/blog.html"};logoBtnElement.addEventListener("click",function(e){e.preventDefault(),logoBtnElement.style.animation="disappear 1s forwards",setTimeout(goHomePage,1e3)});