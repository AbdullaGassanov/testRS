'use strict';

class Product {
  constructor(cardImg, cardName, cardBrand = '', cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

const row = document.querySelector('.catalog__row');

export const fill = function (brand) {
  fetch(`./data/${brand}.json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let products = [...data.products];

      products.forEach(product => {
        product['articul'] = product['web-scraper-order'];
        delete product['web-scraper-order'];
        delete product['web-scraper-start-url'];

        row.insertAdjacentHTML(
          'afterbegin',
          ` <a class="catalog__link" href="booking.html" >
              <div class="catalog__product">
              <div class="catalog__product-img">
              <img class="catalog__productImg" src=${product['img-src']} alt="" srcset="" />
              </div>
              <h3 class="catalog__product-model">${product['model']}</h3>
              <p class="catalog__product-brand">${product['brand']}</p>
              <span class="catalog__product-price">${product['price']}</span>
              
          </div></a>`
        );
      });
    });
};
