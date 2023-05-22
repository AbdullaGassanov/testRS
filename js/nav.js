export const nav = function () {
  const headerHamburger = document.querySelector('.header__hamburger');
  const headerAction = document.querySelector('.header__action');
  const navClose = document.querySelector('.nav__close');
  const navCloseBox = document.querySelector('.nav__close-box');
  const nav = document.querySelector('.nav');
  const page = document.querySelector('.page');
  const headerFooter = document.querySelector('.header__footer');
  const ovelray = document.querySelector('.overlay');

  const openCloseNav = function (status, e) {
    nav.classList.toggle('nav__transform');
    status == 'open'
      ? (ovelray.style.zIndex = '11')
      : (ovelray.style.zIndex = '1');
    status == 'open'
      ? page.classList.add('shadow')
      : page.classList.remove('shadow');
    status == 'open'
      ? (headerAction.style.display = 'none')
      : (headerAction.style.display = 'flex');
    status == 'open'
      ? headerFooter.classList.add('hide')
      : headerFooter.classList.remove('hide');
  };

  navCloseBox.addEventListener('click', () => {
    openCloseNav('close');
  });

  headerHamburger.addEventListener('click', () => {
    openCloseNav('open');
  });

  navClose.addEventListener('click', () => {
    openCloseNav('close');
  });
};
