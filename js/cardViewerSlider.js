import { openCatalogList } from './linkOpenNavCatalog.js';
openCatalogList();

const cardViewerBox = document.querySelector('.cardViewer__box');
const cardViewerItems = document.querySelectorAll('.cardViewer__box-item');
const arrowLeft = document.querySelector('.cardViewer__arrowLeft');
const arrowRight = document.querySelector('.cardViewer__arrowRight');
const cardSelectImg = document.querySelectorAll('.cardViewer__selectItemImg');

export const cardViewer = function () {
  cardSelectImg.forEach(select => {
    select.addEventListener('click', e => {
      let selItem = e.target;
      moveImg(Number(selItem.dataset.img) - 1);
    });
  });

  let counter = 0;
  const maxLength = cardViewerItems.length - 1;

  const init = () => {
    cardViewerItems.forEach((card, index) => {
      card.style.transform = `translateX(${100 * index}%)`;
    });
  };

  init();

  const moveImg = count => {
    cardViewerBox
      .querySelectorAll('.cardViewer__box-item')
      .forEach((card, index) => {
        card.style.transform = `translateX(${100 * (index - count)}%)`;
      });
  };

  arrowLeft.addEventListener('click', e => {
    if (counter <= maxLength && counter > 0) {
      arrowLeft.style.opacity = '1';
      counter--;
      moveImg(counter);
    }
  });

  arrowRight.addEventListener('click', e => {
    if (counter >= 0 && counter < maxLength) {
      arrowRight.style.opacity = '1';
      counter++;
      moveImg(counter);
    }
  });
};
