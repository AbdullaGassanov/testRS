'use strict';

class Card {
  constructor(cardImg, cardName, cardBrand, cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

const cardObj = JSON.parse(localStorage.getItem('newCard'));

const box = document.querySelector('.cardViewer__box');
const selectList = document.querySelector('.cardViewer__selectList');
const name = document.querySelector('.cardViewer__name');
const price = document.querySelector('.cardViewer__price');
const brand = document.querySelector('.cardViewer__header-brand');

export const cardOpen = function () {
  window.addEventListener('DOMContentLoaded', e => {
    let img = box.querySelector('.cardViewer__box-item-1');
    let selectImg = selectList.querySelector('.cardViewer__selectItemImg');
    img.src = cardObj.cardImg;
    selectImg.src = cardObj.cardImg;
    name.textContent = cardObj.cardName;
    brand.textContent = cardObj.cardBrand;
    price.textContent = cardObj.cardPrice;
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
