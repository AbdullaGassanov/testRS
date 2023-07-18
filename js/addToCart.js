/* import { cartOpen } from './openCart.js'; */

const cartBox = document.querySelector('.cart');
const headerHamburger = document.querySelector('.header__hamburger');
const page = document.querySelector('.page');
const ovelray = document.querySelector('.overlay');
const headerFooter = document.querySelector('.header__footer');
const cartIconClose = document.querySelector('.cart__icon-close');
const notice = document.querySelector('.addToCart');
const modelNameElem = document.querySelector('.wrapper__splide__name');

/*   if (item != null && item != {}) {
    cart.querySelector('.cart__item-name').textContent = item.name;
    cart.querySelector('.cart__item-price').textContent = item.price;
  } */

let data = localStorage.getItem('order');
const orderCart = data ? JSON.parse(data) : [];
let numOfOrders;

const order = {
  name: '',
  price: '',
  img: '',
  size: '',
};

const btn = document.querySelector('.wrapper__splide__btnCart');
const cartPiece = document.querySelector('.header__icon-cart-piece');
const card = btn.closest('.wrapper_splide');
let pieces = 0;

//Show Notice Added Apparel
const showNotice = function () {
  let styles = getComputedStyle(notice);
  notice.style.visibility =
    styles.visibility == 'hidden' ? 'visible' : 'hidden';
  setTimeout(() => {
    notice.style.visibility = 'hidden';
  }, 1000);
};

// Checking on exists model in orderCart (apparels)
let found = false;
const checkModelExist = function (orders, model, numOfOrders) {
  if (numOfOrders == 1) {
    return orders[0].name == model ? true : false;
  }

  if (numOfOrders > 1) {
    orders.forEach(order => {
      if (order.name == model) {
        found = true;
        return; // Stoping looping when find the same model. Without return it will go ahead
      }
    });
    return found;
  }
};

export const addProductToCart = function () {
  btn.addEventListener('click', e => {
    // Taking quantity of Orders
    numOfOrders = localStorage.getItem('numberOfOrders')
      ? JSON.parse(localStorage.getItem('numberOfOrders'))
      : 0;

    let currentModel = modelNameElem.textContent;

    let isFullArr = orderCart[0]?.name ? true : false;

    // If nothing added before - add first item to cart
    if (isFullArr === false) {
      const name = card.querySelector('.wrapper__splide__name').textContent;
      const price = Number(
        card.querySelector('.wrapper__splide__price').textContent
      );
      const size = document.querySelector(
        '.wrapper__splide-size-detail'
      ).textContent;
      const imgPath = card
        .querySelector('.splide__slide-img')
        .src.replace('http://localhost:3000/', '');

      order.name = name;
      order.price = price;
      order.img = imgPath;
      order.size = size;
      orderCart.push(order);
      localStorage.setItem('order', JSON.stringify(orderCart));
      ++pieces;
      cartPiece.textContent = pieces;
      localStorage.setItem('numberOfOrders', JSON.stringify(pieces));
      cartPiece.style.visibility = 'visible';

      notice.textContent = 'Ужe добавлен';
      notice.style.visibility = 'visible';
      showNotice();
    }

    if (numOfOrders >= 1) {
      let checkModel = checkModelExist(orderCart, currentModel, numOfOrders); // Checking existing

      //Cheking apparel on existing in CART
      // if orderCart not empty and in orderCart's objects doesn't exist the same
      // name of order name add to orderCart else show message "already exist"
      if (checkModel) {
        console.log(checkModel);
        notice.textContent = 'Ужe добавлен';
        showNotice();
        console.log('Added before');
      } else {
        notice.textContent = 'Товар добавлен в корзину';
        showNotice();
        pieces = numOfOrders;
        const name = card.querySelector('.wrapper__splide__name').textContent;
        const price = Number(
          card.querySelector('.wrapper__splide__price').textContent
        );
        const size = document.querySelector(
          '.wrapper__splide-size-detail'
        ).textContent;
        const imgPath = card
          .querySelector('.splide__slide-img')
          .src.replace('http://localhost:3000/', ''); // Cutting begging part of images if exist

        order.name = name;
        order.price = price;
        order.size = size;
        order.img = imgPath;

        orderCart.push(order);

        localStorage.setItem('order', JSON.stringify(orderCart));

        ++pieces;

        console.log(pieces);
        cartPiece.textContent = pieces;

        localStorage.setItem('numberOfOrders', JSON.stringify(pieces));

        cartPiece.style.visibility = 'visible';
      }
    }

    /*     orderCart.forEach(order => {
      console.log(orderLength);
      if (order?.name === currentModel) {
        console.log('EXIST');
      } else {
        console.log('Add to storage');
      }
    }); */

    /*    if (orderLength >= 0) {
      console.log(`length ${orderLength}`);
      orderCart.forEach(order => {
        if (order.name === currentModel) {
          console.log('REJECTED');
          console.log(order.name);
          showNotice();
        }
      });
    }

    if (orderCart[orderLength]?.name) {
      notice.textContent = 'Уже добавлено';
      console.log('EXIST');
      showNotice();
    } else {
      showNotice();
      console.log('ADDED');
      const name = card.querySelector('.wrapper__splide__name').textContent;
      const price = Number(
        card.querySelector('.wrapper__splide__price').textContent
      );
      const imgPath = card
        .querySelector('.splide__slide-img')
        .src.replace('http://localhost:3000/', '');

      order.name = name;
      order.price = price;
      order.img = imgPath;



      orderCart.push(order);

      localStorage.setItem('order', JSON.stringify(orderCart));



      cartPiece.textContent = ++pieces;

      localStorage.setItem('numberOfOrders', JSON.stringify(pieces));

      cartPiece.style.visibility = 'visible';
    }


 */
  });
};

const checkApparelInCart = function (name) {
  let apparel = JSON.parse(localStorage.getItem('newCard'));
  let model = apparel.cardName;

  if (model === name) {
    console.log('We already have this Apparel');
  } else {
    localStorage.setItem('order', JSON.stringify(orderCart));
  }

  /*   let apparel = JSON.parse(localStorage.getItem('newCard'));
  let model = apparel.cardName;

  if (orderCart.length == 0) {
    console.log(orderCart.name);
  }

  orderCart.forEach(order => {
    console.log(order.name);
    console.log(++counter);
  }); */
  /*   if (localStorage.getItem('newCard') !== null && orderCart[0].name === model) {
    console.log('Have item in cart');
    console.log(model);
  } */
};
