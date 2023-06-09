'use strict';

import { openCatalogList } from './linkOpenNavCatalog.js';
import { searchCard } from './searchCard.js';

searchCard();
openCatalogList();

class Product {
  constructor(cardImg, cardName, cardBrand = '', cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

const row = document.querySelector('.catalog__row');

export const fill = async function (brand) {
  try {
    const brandJson = await fetch(`./data/${brand}Data.json`);

    const data = await brandJson.json();

    let products = [...data.products];

    console.log(products);

    products.reverse();

    products.forEach(product => {
      if (brand === 'kaws' || brand === 'clothes' || brand === 'Kaws') {
        row.insertAdjacentHTML(
          'afterbegin',
          ` <a class="catalog__link" href="productview.html" oncontextmenu="return false" >
              <div class="catalog__product" >
              <div class="catalog__product-img">
              <img class="catalog__productImg" src=${product.thum} alt="" srcset=""  />
              </div>
              <div class="catalog__text-kaws"> 
              <h3 class="catalog__product-model">${product['model']}</h3>
              <p class="catalog__product-brand">${product['brand']}</p>
              <span class="catalog__product-price">${product['price']}</span>
              </div>
          </div></a>`
        );
        return true;
      }
      row.insertAdjacentHTML(
        'afterbegin',
        ` <a class="catalog__link" href="productview.html" oncontextmenu="return false" >
              <div class="catalog__product" >
              <div class="catalog__product-img">
              <img class="catalog__productImg" src=${
                product.thum
              } alt="" srcset=""  />
              </div>
              <div class="catalog__text-content"> 

              <h3 class="catalog__product-model">${product['model']}</h3>
              <p class="catalog__product-brand">${
                product['brand'] == 'detskoe' ? '' : product['brand']
              }</p>
              <span class="catalog__product-price">${product['price']}</span>
              </div>
          </div></a>`
      );
      return true;
    });
  } catch (e) {
    console.log(`Message: ${e}`);
  }

  // OLD CODE without async await on then functions

  /* .then(function (response) {
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
          ` <a class="catalog__link" href="booking.html" oncontextmenu="return false" >
              <div class="catalog__product" >
              <div class="catalog__product-img">
              <img class="catalog__productImg" src=${product['img-src']} alt="" srcset=""  />
              </div>
              <h3 class="catalog__product-model">${product['model']}</h3>
              <p class="catalog__product-brand">${product['brand']}</p>
              <span class="catalog__product-price">${product['price']}</span>
              
          </div></a>`
        );
      });
    }); */
};
