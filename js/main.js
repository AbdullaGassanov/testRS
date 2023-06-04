'use strict';

window.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded');
  document.body.style.backgroudColor = 'white';
});
/* import { slide } from "./slider.js"; */
import { slider } from './slider.js';
import { cardSave } from './cardSave.js';
import { nav } from './nav.js';
import { openSearch } from './openSearch.js';
import { checkPiece } from './cartItem.js';

import { openCatalogList } from './linkOpenNavCatalog.js';
import { searchCard } from './searchCard.js';
searchCard();
openCatalogList();

try {
  slider('.receipt');
  slider('.promo');
  slider('.yeezy');
  slider('.nike');
  slider('.nbalance');
  slider('.jordan');
  slider('.kaws');
} catch (e) {
  console.log(`Message: ${e.message}`);
}
cardSave();
nav();

openSearch();
checkPiece();

/* const openCloseNav = function (status, e) {
  nav.classList.toggle('nav__transform');
  status == 'open'
    ? page.classList.add('shadow')
    : page.classList.remove('shadow');
  status == 'open' ? main.classList.add('hide') : main.classList.remove('hide');
  status == 'open'
    ? (headerAction.style.display = 'none')
    : (headerAction.style.display = 'flex');
  status == 'open'
    ? headerFooter.classList.add('hide')
    : headerFooter.classList.remove('hide');
};

navCloseBox.addEventListener('click', () => {
  openCloseNav('close');
});

headerHamburger.addEventListener('click', () => {
  openCloseNav('open');
});

navClose.addEventListener('click', () => {
  openCloseNav('close');
}); */

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
