import { addProduct } from './addToCart.js';
import { cardOpen } from './cardOpen.js';
import { nav } from './nav.js';
import { cartOpen } from './openCart.js';
import { cardViewer } from './cardViewerSlider.js';
import { checkPiece } from './cartItem.js';
import { openSearch } from './openSearch.js';
import { searchCard } from './searchCard.js';
import { preloader } from './_preloader.js';
preloader();
searchCard();
openSearch();
checkPiece();
cardOpen();
nav();
cartOpen();
cardViewer();
addProduct();

const btnCart = document.querySelector('.cardViewer__btnCart');

btnCart.addEventListener('click', e => {
  e.preventDefault();
});
