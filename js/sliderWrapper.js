let width;

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    cover: true,
    heightRatio: 0.5,
  }).mount();
});

const splideList = document.querySelector('.splide__list');

const moveSlider = function (step) {
  width = document.querySelector('.slider-container').clientWidth;

  console.log(width);
  console.log(step);
  splideList.style.transform = `translateX(-${step * width}px) `;
};

const thumbnail = document.querySelector('.thumbnail');

thumbnail.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', e => {
    moveSlider(e.target.dataset.thumb);
  });
});
