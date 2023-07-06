import { nav } from "./nav.js";
import { checkPiece } from "./cartItem.js";
import { openSearch } from "./openSearch.js";
import { openCatalogList } from "./linkOpenNavCatalog.js";
import { searchCard } from "./searchCard.js";
import { preloader } from "./_preloader.js";
import { searchCities } from "./_city-seach.js";

/* function sendRequest() {
	fetch("https://dog.ceo/api/breed/labrador/images/random")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
} */

preloader();
searchCard();
openCatalogList();
openSearch();
checkPiece();
nav();
searchCities();

const orderContent = document.querySelector(".order__content");
const orderSucess = document.querySelector(".order__success");
const orderItems = document.querySelector(".order__items");
const summary = document.querySelector(".order__summary");
const orderBtn = document.querySelector(".order__btn");
const orderForm = document.querySelector(".order__form");

const productPieces = localStorage.getItem("numberOfOrders");
const orders = JSON.parse(localStorage.getItem("order"));
const cartIcon = document.querySelector(".header__icon-cart-piece");
const orderItemQuantity = document.querySelector(".order__item-number");
let sum = 0;
let quantity = 1;
let numberOfOrders = JSON.parse(localStorage.getItem("numberOfOrders"));

const renderOrders = function (orderCards) {
	let idCount = 0;
	orderItems.innerHTML = "";
	summary.innerHTML = "";
	sum = 0;
	if (orderCards) {
		orders.forEach((orderCard) => {
			sum += Number(orderCard.price);

			/* sum.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ' '
  ) */

			orderItems.insertAdjacentHTML(
				"afterbegin",
				`
          <div class="order__item" data-id=${idCount++}>
                    <div class="order__item-close"  title="Удалить заказ">x</div>
                    <div class="order__item-content">
                      <img class="order__item-img" src=${
												orderCard.img
											} alt="img" />
                      <h2 class="order__item-name">${orderCard.name}</h2>
                      <div class="order__item-calc">
                         <div class="order__item-priceBox"><h2 class="order__item-price">  ${
														orderCard.price
													} ₽</h2></div> 
                        <div class="order__item-quantity"> <button class="order__item-quantity--minus">-</button>
                          <span class="order__item-number">1</span>
                          <button  class="order__item-quantity--plus">+</button> </div>
                      </div>
                    </div>
                </div>

`
			);
		});
		summary.insertAdjacentHTML(
			"afterbegin",
			`
            <div class="order__row"> <div class="order__sum-desc">Сумма по товарам</div>
            <h3 class="order__sum"> ${sum} ₽</h3></div>

            <div class="order__row"> <div class="order__sum-delivery">Сумма доставки</div>
            <h3 class="order__sum"> 0 ₽</h3></div>     
            <div class="order__row">
                <h2 class="order__amount-desc">Итого:</h2>
                <h2 class="order__amount">${sum}₽</h2>

            </div>
`
		);
	}
};

const calcSum = function () {
	let amount = parseInt(summary.querySelector(".order__amount").textContent);
	let summaryVal = [];

	let pricePerItem = orderItems.querySelectorAll(".order__item-price");
	let quantityPerItem = orderItems.querySelectorAll(".order__item-number");

	let prices = [];
	let quantities = [];
	pricePerItem.forEach((p) => {
		prices.push(parseInt(p.textContent));
	});
	quantityPerItem.forEach((p) => {
		quantities.push(parseInt(p.textContent));
	});

	prices.forEach((price, index) => {
		summaryVal.push(price * quantities[index]);
	});

	amount = summaryVal.reduce((a, b) => a + b);
	console.log(amount);

	summary.innerHTML = "";

	summary.insertAdjacentHTML(
		"afterbegin",
		`
            <div class="order__row"> <div class="order__sum-desc">Сумма по товарам</div>
            <h3 class="order__sum"> ${amount} ₽</h3></div>

            <div class="order__row"> <div class="order__sum-delivery">Сумма доставки</div>
            <h3 class="order__sum"> 0 ₽</h3></div>     
            <div class="order__row">
                <h2 class="order__amount-desc">Итого:</h2>
                <h2 class="order__amount">${amount}₽</h2>

            </div>
`
	);
};

renderOrders(orders);

orderItems.addEventListener("click", (e) => {
	if (e.target.classList.contains("order__item-quantity--minus")) {
		let val = Number(e.target.nextElementSibling.textContent);
		let price = parseInt(
			e.target
				.closest(".order__item-quantity")
				.previousElementSibling.querySelector(".order__item-price").textContent
		);

		if (val != 1) {
			e.target.nextElementSibling.textContent = --val;
			calcSum();
		}
	}

	if (e.target.classList.contains("order__item-quantity--plus")) {
		let price = parseInt(
			e.target
				.closest(".order__item-quantity")
				.previousElementSibling.querySelector(".order__item-price").textContent
		);
		let val = Number(e.target.previousElementSibling.textContent);
		if (val >= 1) {
			e.target.previousElementSibling.textContent = ++val;

			calcSum();
		}
	}
});

orderItems.addEventListener("click", (e) => {
	if (e.target.classList.contains("order__item-close")) {
		console.log(e.target);
		console.log("delete");
		let id = e.target.closest(".order__item").dataset.id;
		console.log(id);
		e.target.closest(".order__item").remove();

		orders.splice(id, 1);

		console.log(orders);

		if (numberOfOrders > 0) {
			--numberOfOrders;
			cartIcon.textContent = numberOfOrders;
			localStorage.setItem("numberOfOrders", numberOfOrders);
		}

		localStorage.setItem("order", JSON.stringify(orders));
		renderOrders(orders);
	}

	if (numberOfOrders == 0) {
		localStorage.removeItem("order");
		cartIcon.style.visibility = "hidden";
	}
});

/* orderBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("click confirm");
	console.log(orderContent.querySelector("#order__txtName").value);
	console.log(orderContent.querySelector("#order__txtPhone").value);

	let name = orderContent.querySelector("#order__txtName").value;
	let phone = orderContent.querySelector("#order__txtPhone").value;
	if (name != null && name != "" && phone != "null" && phone != "") {
		orderContent.style.display = "none";
		orderSucess.style.display = "flex";
	}
}); */

/* orderForm.addEventListener("submit", (e) => {
	e.preventDefault();
}); */
