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

console.log(cardObj);

const brandLink = document.querySelector('.wrapper__line-brand');
const sizeBox = document.querySelector('.wrapper__splide__sizeBox');
const sizeLine = document.querySelector('.wrapper__splide-right-size');
const sizeDescription = document.querySelector('.wrapper__splide__sizes');
const wrapperSplide = document.querySelector('.wrapper_splide');
const thumbnail = document.querySelector('.thumbnail');
const name = document.querySelector('.wrapper__splide__name');
const price = document.querySelector('.wrapper__splide__price');
let imgs = wrapperSplide.querySelectorAll('.splide__slide-img');
let selectImg = thumbnail.querySelectorAll('.thumbnail-img');
let splideList = document.querySelector('.splide__list');
const sliderPagination = document.querySelector('.splide__pagination');
const typeOfApparel = '';

let returnBrand = '';

let cardItem;

const getItem = async function (brand) {
  if (brand === 'Adidas Originals' || brand === 'ADIDAS') brand = 'adidas';
  if (brand === 'New Balance' || brand === 'NEW BALANCE') brand = 'newbalance';
  if (brand === 'Yeezy Adidas') brand = 'yeezy';
  if (brand === '') brand = 'detskoe';
  if (brand === 'NIKE') brand = 'nike';
  if (brand === 'JORDAN') brand = 'jordan';
  if (brand === 'KAWS') brand = 'kaws';

  if (
    brand == 'Chrome Hearts' ||
    brand == 'Carhartt WIP' ||
    brand == 'Fear of God' ||
    brand == 'Jordan Clothes' ||
    brand == 'Supreme' ||
    brand == 'TRAVIS SCOTT'
  )
    brand = 'clothes';

  console.log(brand);

  const brandJson = await fetch(`./data/${brand}Data.json`);
  const data = await brandJson.json();
  let products = [...data.products];

  let mod = cardObj.cardName.replace('\n', '').trim().replaceAll('"', '');

  console.log(mod);

  cardItem = products.filter(product => product['model'] == mod);

  console.log(cardItem);

  return cardItem;
};

/* console.log(cardObj); */

/* console.log(itemData); */

/* getItem(cardObj.cardBrand).then(data => console.log(data)); */

export const cardOpen = function () {
  window.addEventListener('DOMContentLoaded', async e => {
    cardItem = await getItem(cardObj.cardBrand);

    console.log(cardItem);
    let tempImg = cardItem[0]?.thum;

    try {
      // Adding images to slider in productview page
      if (cardItem[0].img.length > 1) {
        /*         console.log(tempImg); */

        imgs.forEach((i, index) => {
          if (index == 0) {
            i.src = tempImg;
          } else {
            i.src = cardItem[0].img[index];
          }

          if (cardItem[0].img[index] == undefined) {
            console.log('Found undefined image');
            i.src = tempImg;
          }
        });
        selectImg.forEach((i, index) => {
          if (index == 0) {
            i.src = tempImg;
          } else {
            i.src = cardItem[0].img[index];
          }
          if (cardItem[0].img[index] == undefined) {
            console.log('Found undefined select image');
            i.src = tempImg;
          }
        });
      }

      // if only one image of product set it to default image

      if (cardItem[0].img.length == 1) {
        splideList.querySelector('.splide__slide-img').src = cardItem[0].img[0];

        thumbnail.querySelector('.thumbnail-img').src = cardItem[0].img[0];
      }

      //Get number from price string
      let priceSum = cardItem[0].price.replace(/\D/g, '');

      //Changing name for children brand

      let tempBrand = 'Детское';

      if (cardItem[0].brand == 'detskoe') {
        brandLink.textContent = tempBrand;
        brandLink.href = 'children.html';
      } else {
        brandLink.textContent = cardItem[0].brand;
      }

      //Changing Reference name for productView.html

      if (cardItem[0].brand == 'Adidas Originals') {
        cardItem[0].brand == 'adidas';
        brandLink.href = 'adidas.html';
      }

      if (cardItem[0].brand == 'Kaws' || cardItem[0].brand == 'KAWS') {
        brandLink.href = 'kaws.html';
        sizeLine.remove();
        sizeBox.remove();
        sizeDescription.remove();
      }

      if (cardItem[0].brand == 'Yeezy Adidas') {
        brandLink.href = 'yeezy.html';
      }

      if (cardItem[0].brand == 'Yeezy Adidas') {
        brandLink.href = 'yeezy.html';
      }

      if (cardItem[0].brand == 'Nike') {
        brandLink.href = 'nike.html';
      }

      if (cardItem[0].brand == 'Jordan') {
        brandLink.href = 'Jordan.html';
      }

      if (cardItem[0].brand == 'New Balance') {
        brandLink.href = 'newbalance.html';
      }

      if (
        cardItem[0].brand == 'Chrome Hearts' ||
        cardItem[0].brand == 'Carhartt WIP' ||
        cardItem[0].brand == 'Fear of God' ||
        cardItem[0].brand == 'Jordan Clothes' ||
        cardItem[0].brand == 'Kith' ||
        cardItem[0].brand == 'Supreme' ||
        cardItem[0].brand == 'TRAVIS SCOTT'
      ) {
        brandLink.href = 'clothes.html';
        sizeBox.innerHTML = '';
        //Adding another sizes to productView
        sizeBox.insertAdjacentHTML(
          'afterbegin',
          `
           <a href="#" class="wrapper__splide__sizeBoxItem">S</a
          ><a href="#" class="wrapper__splide__sizeBoxItem">M</a
          ><a href="#" class="wrapper__splide__sizeBoxItem">L</a
          ><a href="#" class="wrapper__splide__sizeBoxItem">XL</a
          >`
        );
      }

      if (cardItem[0].brand == 'Crocs') {
        brandLink.href = 'Crocs.html';
      }

      console.log(cardItem[0].brand);

      // Showing model and brand on right side
      name.textContent = cardItem[0].model;
      price.textContent = priceSum;

      localStorage.removeItem('newCard');
      clearEmpties();
    } catch (e) {
      console.log(`Message: ${e}`);
    }

    return returnBrand;
  });
};

const clearEmpties = () => {
  // checking for empty img and thumbs elements
  const imgs = document.querySelectorAll('.splide__slide');

  imgs.forEach((img, index) => {
    if (img.children[0].src === '') {
      img.children[0].closest('.splide__slide').remove();
    }
  });

  selectImg.forEach((img, index) => {
    if (img.src === '') {
      img.remove();
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
