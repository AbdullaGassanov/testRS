'use strict';

class Card {
  constructor(cardImg, cardName, cardBrand, cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

// THIS code helps when we clicked on product open information in new web page PRODUCTVIEW.HTML

const cardObj = JSON.parse(localStorage.getItem('newCard'));

const brand = document.querySelector('.wrapper__line-brand');
const wrapperSplide = document.querySelector('.wrapper_splide');
const thumbnail = document.querySelector('.thumbnail');
const name = document.querySelector('.wrapper__splide__name');
const price = document.querySelector('.wrapper__splide__price');

export const cardOpen = function () {
  window.addEventListener('DOMContentLoaded', e => {
    try {
      let img = wrapperSplide.querySelectorAll('.splide__slide-img');
      let selectImg = thumbnail.querySelectorAll('.thumbnail-img');

      img.forEach(i => {
        console.log(cardObj.cardImg);
        i.src = cardObj.cardImg;
      }); // Adding images to slider in productview page
      selectImg.forEach(imgSel => {
        imgSel.src = cardObj.cardImg;
      });

      name.textContent = cardObj.cardName;
      price.textContent = cardObj.cardPrice;
      brand.textContent = cardObj.cardBrand;
      localStorage.removeItem('newCard');
    } catch (e) {
      console.log(`Message: ${e}`);
    }
  });
};

/*  innerHTML = `
      <li class="card" oncontextmenu="return false">
            <a class="card__link">
              <div class="img">
                <img src=${cardOpen.cardImg} />
              </div>
              <div class="card__text">
                <h2 class="card__name">${cardOpen.cardName}</h2>
                <span class="card__brand">${cardOpen.cardBrand}</span>
                <span class="card__price">${cardOpen.cardPrice}</span>
              </div>
            </a>
          </li>`; */
