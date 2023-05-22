class Card {
  constructor(cardImg, cardName, cardBrand, cardPrice) {
    this.cardImg = cardImg;
    this.cardName = cardName;
    this.cardBrand = cardBrand;
    this.cardPrice = cardPrice;
  }
}

let card;

export const cardSave = function () {
  const cards = document.querySelectorAll('.card__link');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      card = e.target.closest('.card');

      const newCard = new Card(
        card.querySelector('img').src.replace('http://localhost:3000/', ''),
        card.querySelector('.card__name').textContent,
        card.querySelector('.card__brand').textContent,
        card.querySelector('.card__price').textContent.replace(/\D/g, '')
      );
      localStorage.setItem('newCard', JSON.stringify(newCard));
      console.log(card.querySelector('.card__name').textContent);
    });
  });
};
