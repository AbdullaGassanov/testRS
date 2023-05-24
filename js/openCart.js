const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerAction = document.querySelector('.header__action');
const navClose = document.querySelector('.nav__close');
const navCloseBox = document.querySelector('.nav__close-box');
const nav = document.querySelector('.nav');
const intro = document.querySelector('.intro');

class Product {
  constructor(cardImg, cardName, cardBrand = '', cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

/* const shopCart = document.querySelector('.header__icon-cart-box '); */

const cardViewer = document.querySelector('.cardViewer');
const headerHamburger = document.querySelector('.header__hamburger');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');
const btnBuy = document.querySelector('.cardViewer__btnBuy');
const cart = document.querySelector('.cart');
const cartIconClose = document.querySelector('.cart__close');
const btnConfirm = document.querySelector('.cart__btnconfirm');
const cartSuccess = document.querySelector('.cart__success');

export const cartOpen = function () {
  const openCloseCart = function (status, e) {
    cart.classList.toggle('cart__transform');
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
      cardViewer.querySelector('.cardViewer__box-item-1').src,
      cardViewer.querySelector('.cardViewer__name').textContent,
      cardViewer.querySelector('.cardViewer__header-brand').textContent,
      cardViewer.querySelector('.cardViewer__price').textContent
    );

    let price = newCard.cardPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

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
