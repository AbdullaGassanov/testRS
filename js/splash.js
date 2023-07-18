const splash = document.querySelector('.splash');

window.addEventListener('DOMContentLoaded', function () {
  document.body.style.overflowY = 'hidden';
  setTimeout(() => {
    document.body.style.overflowY = 'scroll';

    splash.remove();
  }, 1500);
  console.log(splash);
});
