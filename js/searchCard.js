const btnSearch = document.querySelector('.header__brand-btn');

export const searchCard = function () {
  btnSearch.addEventListener('click', e => {
    console.log(e.target);
  });
};
