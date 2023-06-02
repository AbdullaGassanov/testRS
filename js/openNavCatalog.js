const menuContent = document.querySelector('.nav__menu-link-open');
const menuList = document.querySelector('.nav__menu-list');
const btnLink = document.querySelector('.nav__menu-link-open');

export const openCatalogList = function () {
  setTimeout(() => {
    btnLink.addEventListener('click', e => {
      const target = e.target;
      console.log(target);
    });
  }, 1000);
};
