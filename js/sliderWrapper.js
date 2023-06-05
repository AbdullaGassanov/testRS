import { spliderFunc } from './spliderFunc.min.js';
import { preloader } from './_preloader.js';
import { openCatalogList } from './linkOpenNavCatalog.js';
import { openSearch } from './openSearch.js';
import { searchCard } from './searchCard.js';
import { nav } from './nav.js';
import { cardOpen } from './cardOpen.js';
searchCard();
openSearch();
openCatalogList();
preloader();
spliderFunc();
nav();
cardOpen();

let width;

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    cover: true,
    heightRatio: 0.5,
  }).mount();
});

const splideList = document.querySelector('.splide__list');

const moveSlider = function (step) {
  width = document.querySelector('.slider-container').clientWidth;

  console.log(width);
  console.log(step);
  splideList.style.transform = `translateX(-${step * width}px) `;
};

const thumbnail = document.querySelector('.thumbnail');

thumbnail.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', e => {
    moveSlider(e.target.dataset.thumb);
  });
});

// BUYING LOGIC

class Product {
  constructor(cardImg = '', cardName = '', cardBrand = '', cardPrice = '') {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

const btnBuy = document.querySelector('.wrapper__splide__btnBuy');
const wrapperSplide = document.querySelector('.wrapper_splide');
const headerHamburger = document.querySelector('.header__hamburger');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');
const wrapperBrand = document.querySelector('.wrapper__line-brand');
const cart = document.querySelector('.cart');
const cartIconClose = document.querySelector('.cart__close');
const btnConfirm = document.querySelector('.cart__btnconfirm');
const cartSuccess = document.querySelector('.cart__success');

btnBuy.addEventListener('click', e => {
  console.log('btn buy');
});

// For opening bar-cart from right side

const cartOpenViewer = function () {
  const openCloseCart = function (status, e) {
    cart.style.opacity = '1';
    cart.classList.toggle('cart__transform');

    cart.style.visibility = 'visible';
    status == 'open'
      ? page.classList.add('shadow')
      : page.classList.remove('shadow');
    status == 'open'
      ? (ovelray.style.zIndex = '11')
      : (ovelray.style.zIndex = '1');
    status == 'open'
      ? (headerHamburger.style.display = 'none')
      : (headerHamburger.style.display = 'flex');
    status == 'open'
      ? headerFooter.classList.add('hide')
      : headerFooter.classList.remove('hide');

    const newCard = new Product(
      wrapperSplide.querySelector('.splide__slide-img').src,
      wrapperSplide.querySelector('.wrapper__splide__name').textContent,
      wrapperBrand.textContent,
      wrapperSplide.querySelector('.wrapper__splide__price').textContent
    );

    let price = newCard.cardPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    console.log(price);

    cart.querySelector('.cart__item-name').textContent = newCard.cardName;
    cart.querySelector('.cart__item-price').textContent = price;
    cart.querySelector('.cart__item-img-item').src = newCard.cardImg;
    cart.querySelector('.cart__sum').textContent = price;
  };

  btnBuy.addEventListener('click', e => {
    e.preventDefault();
    openCloseCart('open');
  });

  cartIconClose.addEventListener('click', e => {
    e.preventDefault();
    openCloseCart('close');
    cart.style.visibility = 'hidden';
  });

  btnConfirm.addEventListener('click', e => {
    console.log('click confirm');
    console.log(cart.querySelector('#cart__customer').value);
    console.log(cart.querySelector('#cart__phone').value);
    console.log(cartSuccess);
    let name = cart.querySelector('#cart__customer').value;
    let phone = cart.querySelector('#cart__phone').value;
    if (name != null && name != '' && phone != 'null' && phone != '') {
      cart.querySelector('.cart__content').style.display = 'none';
      cartSuccess.style.display = 'flex';
    }
  });
};
cartOpenViewer();
