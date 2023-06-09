const pieces = Number(localStorage.getItem('numberOfOrders'));
const cartPiece = document.querySelector('.header__icon-cart-piece');

export const checkPiece = function () {
  window.addEventListener('DOMContentLoaded', () => {
    if (pieces > 0) {
      cartPiece.innerHTML = pieces;
      cartPiece.style.visibility = 'visible';
    }
  });
};
