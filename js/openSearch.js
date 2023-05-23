const btnSearchOpen = document.querySelector('.header__icon--search');
const sectionSearch = document.querySelector('.header__brand-search');
const home = document.querySelector('.header__home');

export const openSearch = function () {
  btnSearchOpen.addEventListener('click', e => {
    console.log('search');
    sectionSearch.style.display = 'flex';
    home.style.display = 'none';
    btnSearchOpen.style.display = 'none';
  });
};
