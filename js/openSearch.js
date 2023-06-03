const btnSearchOpen = document.querySelector('.header__icon--search');
const sectionSearch = document.querySelector('.header__brand-search');
const headerCart = document.querySelector('.header__icon-cart-item');
const searchInput = document.querySelector('.header__brand-searchTXT');

const headerTop = document.querySelector('.header__top');

const humburg = document.querySelector('.header__hamburger');

export const openSearch = function () {
  btnSearchOpen.addEventListener('click', e => {
    headerTop.style.justifyContent = 'center';
    headerCart.style.display = 'none';
    sectionSearch.style.display = 'flex';
    searchInput.style.backgroundColor = '#000';
    humburg.style.display = 'none';
    btnSearchOpen.style.display = 'none';
  });
};
