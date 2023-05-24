import { cartOpen } from './openCart.js';

const cartBox = document.querySelector('.cart');
const headerHamburger = document.querySelector('.header__hamburger');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');
const cartIconClose = document.querySelector('.cart__icon-close');

/*   if (item != null && item != {}) {
    cart.querySelector('.cart__item-name').textContent = item.name;
    cart.querySelector('.cart__item-price').textContent = item.price;
  } */

const product = {
  name: '',
  price: '',
  img: '',
};

const cart = {
  cartItem: [],
  showItemsLength() {
    return this.cartItem.length;
  },
};

const btn = document.querySelector('.cardViewer__btnCart');
const cartPiece = document.querySelector('.header__icon-cart-piece');
const card = btn.closest('.cardViewer__content');
const btnBuy = document.querySelector('.cardViewer__btnBuy');

let pieces = 0;

export const addProduct = function () {
  btn.addEventListener('click', e => {
    const name = card.querySelector('.cardViewer__name').textContent;
    const price = card.querySelector('.cardViewer__price').textContent;
    const imgPath = card
      .querySelector('.cardViewer__selectItemImg')
      .src.replace('http://localhost:3000/', '');

    product.name = name;
    product.price = price;
    product.img = imgPath;

    /*     cartOpen(product); */

    cart.cartItem.push(product);

    console.log(cart);

    cartPiece.textContent = ++pieces;

    localStorage.setItem('product', JSON.stringify(cart.cartItem));

    localStorage.setItem('product', JSON.stringify(pieces));

    cartPiece.style.visibility = 'visible';
  });
};
