import { spliderFunc } from './spliderFunc.min.js';
import { preloader } from './_preloader.js';
import { openCatalogList } from './linkOpenNavCatalog.js';
import { openSearch } from './openSearch.js';
import { searchCard } from './searchCard.js';
import { nav } from './nav.js';
import { cardOpen } from './cardOpen.js';
import { addProductToCart } from './addToCart.js';

addProductToCart();
searchCard();
openSearch();
openCatalogList();
preloader();
spliderFunc();
nav();
cardOpen();

const cartModelInput = document.querySelector('#cart__item-model-input');
const cartSizeInput = document.querySelector('#cart__item-size-input');
const cartPriceInput = document.querySelector('#cart__item-price-input');
const cartImgInput = document.querySelector('#cart__item-img-input');
const btnBuy = document.querySelector('.wrapper__splide__btnBuy'); // button from on the page to buy in one click
const btnConfirm = document.querySelector('.cart__btnconfirm'); // button in open nav bar to one click buying
const wrapperSplide = document.querySelector('.wrapper_splide');
const headerHamburger = document.querySelector('.header__hamburger');
const whatsappRadio = document.querySelector('#cart__whatsapp');
const telegramRadio = document.querySelector('#cart__telegram');
const cartConnection = document.querySelector('.cart__connection');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');
const wrapperBrand = document.querySelector('.wrapper__line-brand');
const cart = document.querySelector('.cart');
const cartContent = document.querySelector('.cart__content');
const cartIconClose = document.querySelector('.cart__close');
const cartSuccess = document.querySelector('.cart__success');
const cartPiece = document.querySelector('.header__icon-cart-piece');
const choosenSize = document.querySelector('.wrapper__splide-size-detail');
const sizeBoxItem = document.querySelector('.wrapper__splide__sizeBox');
const cartHide = document.querySelector('.cart__connection-hide');

let quantityOrders = Number(localStorage.getItem('numberOfOrders'));

let width;

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    cover: true,
    heightRatio: 0.5,
  }).mount();
});

cartConnection.addEventListener('click', e => {
  if (e.target.checked) {
    let flag = e.target;
    if (flag.classList.contains('cart__whatsapp')) {
      console.log('Whatsapp');
      cartHide.innerHTML = '';
      cartHide.insertAdjacentHTML(
        'beforeend',
        `  <input
            class="hidden-input-item"
            type="text"
            name="order__whatsapp"
            id="order__whatsapp"
            value="Telegram"
          />`
      );
    }

    if (flag.classList.contains('cart__telegram')) {
      console.log('Telegram');
      cartHide.innerHTML = '';
      cartHide.insertAdjacentHTML(
        'beforeend',
        `  <input
            class="hidden-input-item"
            type="text"
            name="order__telegram"
            id="order__telegram"
            value="Telegram"
          />`
      );
    }
  }
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
  constructor(
    cardImg = '',
    cardName = '',
    cardBrand = '',
    cardPrice = '',
    cardSize = 'Не указан'
  ) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
    this.cardSize = cardSize;
  }
}

sizeBoxItem.addEventListener('click', e => {
  if (e.target.classList.contains('wrapper__splide__sizeBoxItem')) {
    choosenSize.textContent = e.target.textContent;
  }
});

if (quantityOrders !== null && quantityOrders !== 0) {
  cartPiece.textContent = JSON.parse(localStorage.getItem('numberOfOrders'));
  cartPiece.style.visibility = 'visible';
}

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
      wrapperSplide.querySelector('.wrapper__splide__price').textContent,
      wrapperSplide.querySelector('.wrapper__splide-size-detail').textContent
    );

    let price = newCard.cardPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    cartContent.insertAdjacentHTML(
      'afterbegin',
      `
        <input
            class="hidden-input-item"
            type="text"
            name="cart__item_model_input"
            id="cart__item_model_input"
            value="${newCard.cardName}"
          />
       <input
            class="hidden-input-item"
            type="text"
            name="cart__item_size_input"
            id="cart__item_size_input"
            value="${
              newCard.cardSize == '' || newCard == undefined
                ? 'Размер не указан'
                : `Размер: ${newCard.cardSize}`
            }"
          />
            <input
            class="hidden-input-item"
            type="text"
            name="cart__item_price_input"
            id="cart__item_price_input"
            value="${price}"
          />
          <input
            class="hidden-input-item"
            type="text"
            name="cart__item_img_input"
            id="cart__item_img_input"
            value="${newCard.cardImg}"
          />
    `
    );

    cart.querySelector('.cart__item-name').textContent = newCard.cardName;
    cart.querySelector('.cart__item-price').textContent = price;
    cart.querySelector('.cart__item-img-item').src = newCard.cardImg;
    cart.querySelector('.cart__item-size').textContent =
      newCard.cardSize == '' || newCard == undefined
        ? 'Размер не указан'
        : `Размер: ${newCard.cardSize}`;
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

  //In one click buy cart button

  btnConfirm.addEventListener('click', e => {
    console.log('click confirm');

    let name = cart.querySelector('#cart__customer').value;
    let phone = cart.querySelector('#cart__phone').value;
    let checked = cart.querySelector('#cart__agree').checked;
    if (
      name != null &&
      name != '' &&
      phone != 'null' &&
      phone != '' &&
      checked == 'true'
    ) {
      openCloseCart('close');
    }

    /*     let name = cart.querySelector('#cart__customer').value;
    let phone = cart.querySelector('#cart__phone').value;
    let statusConfirm = '';

    if (name != null && name != '' && phone != 'null' && phone != '') {
      cart.querySelector('.cart__content').style.display = 'none';
      cart.querySelector('#cart__customer').value = '';
      cart.querySelector('#cart__phone').value = '';
      cart.querySelector('#cart__address').value = '';
      cart.querySelector('#cart__email').value = '';

      cartSuccess.style.display = 'flex';
    } */
  });
};
cartOpenViewer();
