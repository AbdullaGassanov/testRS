'use strict';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
  loader.addEventListener('transitionend', () => {
    loader.remove();
  });
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
