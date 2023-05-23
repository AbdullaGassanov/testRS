const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerHamburger = document.querySelector('.header__hamburger');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');

const headerAction = document.querySelector('.header__action');
const navClose = document.querySelector('.nav__close');
const navCloseBox = document.querySelector('.nav__close-box');

const nav = document.querySelector('.nav');
const intro = document.querySelector('.intro');
const btnBuy = document.querySelector('.cardViewer__btnBuy');
/* const shopCart = document.querySelector('.header__icon-cart-box '); */
const cart = document.querySelector('.cart');
const cartIconClose = document.querySelector('.cart__close');

export const cartOpen = function () {
  const openCloseCart = function (status, e) {
    cart.classList.toggle('cart__transform');
    status == 'open'
      ? page.classList.add('shadow')
      : page.classList.remove('shadow');
    status == 'open'
      ? (ovelray.style.zIndex = '11')
      : (ovelray.style.zIndex = '1');
    /*     status == 'open'
      ? ((ovelray.style.zIndex = '11'),
        (ovelray.style.background = 'rgba(0, 0, 0, 0.5)'))
      : ((ovelray.style.zIndex = '1'),
        (ovelray.style.background = 'rgba(0, 0, 0, 0)')); */
    status == 'open'
      ? (headerHamburger.style.display = 'none')
      : (headerHamburger.style.display = 'flex');
    status == 'open'
      ? headerFooter.classList.add('hide')
      : headerFooter.classList.remove('hide');
  };

  btnBuy.addEventListener('click', e => {
    e.preventDefault();
    openCloseCart('open');
  });

  cartIconClose.addEventListener('click', e => {
    e.preventDefault();
    openCloseCart('close');
  });
};
