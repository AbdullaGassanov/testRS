import { nav } from './nav.js';
import { checkPiece } from './cartItem.js';
import { openSearch } from './openSearch.js';
import { openCatalogList } from './linkOpenNavCatalog.js';
import { searchCard } from './searchCard.js';
import { preloader } from './_preloader.js';
preloader();
searchCard();
openCatalogList();
openSearch();
checkPiece();
nav();

const orderContent = document.querySelector('.order__content');
const orderSucess = document.querySelector('.order__success');
const orderItems = document.querySelector('.order__items');
const summary = document.querySelector('.order__summary');
const orderBtn = document.querySelector('.order__btn');
const productPieces = localStorage.getItem('product');
const product = JSON.parse(localStorage.getItem('newCard'));

let sum = Number(productPieces) * Number(product.cardPrice);

console.log(sum);

console.log(product);

/* sum.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ' '
  ) */

orderItems.insertAdjacentHTML(
  'afterbegin',
  `
                <div class="order__item">
                  <div class="order__item-close"  title="Удалить заказ">x</div>
                    <div class="order__item-content">
                      <img class="order__item-img" src=${product.cardImg} alt="img" />
                      <h2 class="order__item-name">${product.cardName}</h2>
                      <div class="order__item-priceBox"><span class="order__item-piece">${productPieces} x</span><h2 class="order__item-price">  ${sum} ₽</h2></div> 
                    </div>
                </div>

`
);

summary.insertAdjacentHTML(
  'afterbegin',
  `
            <div class="order__row"> <div class="order__sum-desc">Сумма по товарам</div>
            <h3 class="order__sum"> ${sum} P</h3></div>

            <div class="order__row"> <div class="order__sum-delivery">Сумма доставки</div>
            <h3 class="order__sum"> 0 P</h3></div>     
            <div class="order__row">
                <h2 class="order__amount-desc">Итого:</h2>
                <h2 class="order__amount">${sum}P</h2>

            </div>
`
);

orderBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log('click confirm');
  console.log(orderContent.querySelector('#order__txtName').value);
  console.log(orderContent.querySelector('#order__txtPhone').value);

  let name = orderContent.querySelector('#order__txtName').value;
  let phone = orderContent.querySelector('#order__txtPhone').value;
  if (name != null && name != '' && phone != 'null' && phone != '') {
    orderContent.style.display = 'none';
    orderSucess.style.display = 'flex';
  }
});
