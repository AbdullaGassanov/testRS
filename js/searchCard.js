const btnSearch = document.querySelector('.header__brand-btn');
const btnSearchOpen = document.querySelector('.header__icon--search');
const sectionSearch = document.querySelector('.header__brand-search');
const headerCart = document.querySelector('.header__icon-cart-item');
const searchInput = document.querySelector('.header__brand-searchTXT');
const headerTop = document.querySelector('.header__top');
const humburg = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.header__close-search');

export const searchCard = function () {
  closeBtn.addEventListener('click', () => {
    console.log('close');
    sectionSearch.removeAttribute('open', 'open');
    sectionSearch.setAttribute('close', 'close');
    headerTop.style.justifyContent = 'space-between';
    headerCart.style.display = 'block';
    sectionSearch.style.display = 'none';
    humburg.style.display = 'flex';
    btnSearchOpen.style.display = 'block';
    closeBtn.style.display = 'none';
    console.log('show');
  });

  btnSearch.addEventListener('click', e => {
    console.log(e.target);
    /* if (
      searchInput.value == '' ||
      (searchInput.value == null && sectionSearch.hasAttribute('open'))
    ) {
      sectionSearch.removeAttribute('open', 'open');
      sectionSearch.setAttribute('close', 'close');
      headerTop.style.justifyContent = 'space-between';
      headerCart.style.display = 'block';
      sectionSearch.style.display = 'none';
      humburg.style.display = 'block';
      btnSearchOpen.style.display = 'block';
      console.log('show');
    } */
  });
};
