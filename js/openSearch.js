const btnSearchOpen = document.querySelector('.header__icon--search');
const sectionSearch = document.querySelector('.header__brand-search');
const headerTop = document.querySelector('.header__top');
const home = document.querySelector('.header__home');
const humburg = document.querySelector('.header__hamburger');

export const openSearch = function () {
  btnSearchOpen.addEventListener('click', e => {
    headerTop.style.gridTemplateColumns = '80% 20%';
    sectionSearch.style.display = 'flex';
    home.style.display = 'none';
    humburg.style.display = 'none';
    home.style.opacity = '0';
    btnSearchOpen.style.visibility = 'hidden';
  });
};
