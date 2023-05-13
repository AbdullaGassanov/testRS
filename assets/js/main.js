"use strict";



const header = document.querySelector(".header");
const headerHamburger = document.querySelector(".header__hamburger");
const navClose = document.querySelector(".nav__close");
const navCloseBox = document.querySelector(".nav__close-box");
const page = document.querySelector(".page");
const nav = document.querySelector(".nav");



const openCloseNav = function(status){
  nav.classList.toggle("nav__transform");
  status =="open" ?   page.classList.add("shadow"):page.classList.remove("shadow");
}

navCloseBox.addEventListener("click", ()=>{
  openCloseNav("close")
});

headerHamburger.addEventListener("click", ()=>{
  openCloseNav("open")
});

navClose.addEventListener("click", ()=>{
  openCloseNav("close")
});


/* const movingBanner = setInterval(() => {
	boxImg2.style.transform = "translateX(-100%)";
	boxImg1.style.transform = "translateX(-100%)";
}, 4000);

const movingBanner2 = setInterval(() => {
	boxImg1.style.transform = "translateX(0%)";
	boxImg2.style.transform = "translateX(0%)";
}, 8000);
 */


/* 
const headerMenu = document.querySelector('.header__menu');
const headerMenuContent = document.querySelectorAll('.header__menu-content');

headerMenu.addEventListener('mouseover', e => {
  const event = e.target;
  if (event.dataset.brand != null) {
    const brand = event.dataset.brand;
    console.log(brand);
    if (event.dataset.brand == brand) {
      const content = event.nextElementSibling;
      console.log(content);
      content.style.opacity = '1';
      content.style.display = 'block';
    }
  }
});

headerMenu.addEventListener('mouseout', e => {
  const event = e.target;
  if (event.dataset.brand != null) {
    const brand = event.dataset.brand;
    console.log(brand);
    if (event.dataset.brand == brand) {
      const content = event.nextElementSibling;
      console.log(content);
      content.style.opacity = '0';
      content.style.display = 'none';
    }
  }
});

headerMenuContent.forEach(cont => {
  cont.addEventListener('mouseover', e => {
    e.target.style.opacity = '1';
    e.target.display = 'block';
  });
});

headerMenuContent.forEach(cont => {
  cont.addEventListener('mouseout', e => {
    e.target.style.opacity = '0';
    e.target.display = 'none';
  });
}); */

/* headerMenu.addEventListener('mouseout', e => {
  const event = e.target;
  if (event.classList.contains('header__menu-link')) {
    headerMenuContent.style.opacity = 0;
    headerMenuContent.style.display = 'none';
  }
}); */

/* headerMenuContent.addEventListener('mouseover', e => {
  headerMenuContent.style.display = 'block';
  headerMenuContent.style.opacity = 1;
});

headerMenuContent.addEventListener('mouseout', e => {
  headerMenuContent.style.display = 'none';
  headerMenuContent.style.opacity = 0;
}); */