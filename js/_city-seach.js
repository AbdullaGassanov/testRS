export function searchCities() {
  const select = document.querySelector('.city');
  const search = document.querySelector('.search');

  let cities = [];

  let dataJson = fetch('russia.json')
    .then(res => res.json())
    .then(data =>
      data.forEach(d => {
        if (d.city != '' && d.city != null) {
          cities.push(d.city);
        }
      })
    );

  async function fillCities() {
    cities.forEach(city => {
      if (city != '' && city != null) {
        select.insertAdjacentHTML(
          'afterbegin',
          `
    <li>${city}</li>`
        );
      }
    });
  }

  search.addEventListener('keypress', e => {
    select.style.visibility = 'visible';

    let strInp = search.value;
    city.style.visibility = 'visible';
    select.innerHTML = '';
    let cityArr = cities.filter(city =>
      city.toLowerCase().includes(strInp.toLowerCase())
    );

    cityArr.forEach(c => {});

    cityArr.forEach(c => {
      select.insertAdjacentHTML(
        'afterbegin',
        `
        <li class="city__item">${c}</li>`
      );
    });
  });

  select.addEventListener('onmouseover ', e => {
    e.target.style.visibility = 'hidden';
  });

  select.addEventListener('click', e => {
    let city = '';
    if (e.target.classList.contains('city__item')) {
      city = e.target.textContent;

      search.value = city;
    }
    select.style.visibility = 'hidden';
  });

  fillCities();
}
