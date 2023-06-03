const btnsLink = document.querySelectorAll('.nav__menu-link-open');

export const openCatalogList = function () {
  btnsLink.forEach(btn =>
    btn.addEventListener('click', e => {
      const target = e;
      let cont = target.target.closest('.nav__menu-item');
      cont
        .querySelector('.nav__menu-content')
        .classList.toggle('nav__menu-hide');
    })
  );
};
