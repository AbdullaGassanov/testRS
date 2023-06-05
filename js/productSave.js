/*    new Promise((res, rej) => {
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        clearInterval(interval);
        rej('Not Found');
      }, 5000);
      const interval = setInterval(() => {
        const links = document.querySelectorAll('.catalog__link');
        if (links.length == 0) {
          return;
        }
        clearInterval(interval);
        clearTimeout(timeout);
        res(links);
      }, 200);
    });
 */

class Product {
  constructor(cardImg, cardName, cardBrand = '', cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

export const productSave = function () {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const links = document.querySelectorAll('.catalog__link');

      links.forEach(link => {
        link.addEventListener('click', e => {
          const product = link.querySelector('.catalog__product');

          console.log(product);

          const newCard = new Product(
            product.querySelector('.catalog__productImg').src,
            product.querySelector('.catalog__product-model').textContent,
            product.querySelector('.catalog__product-brand').textContent,
            product
              .querySelector('.catalog__product-price')
              .textContent.replace(/\D/g, '')
          );

          console.log(newCard);
          localStorage.setItem('newCard', JSON.stringify(newCard));
        });
      });
    }, 500);
  });
};

/* console.log(row.childNodes.length);
for (let i = 0; i < row.children.length; i++) {
  console.log(btn);
  console.log(row.children.namedItem['.catalog__link']);
} */
