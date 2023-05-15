
const receipt = document.querySelector("#receipt");
const gallery = document.querySelector(".sec__gallery");
const secItems = document.querySelectorAll(".sec__item");
const leftarrow = document.querySelector(".sec__icon--left");
const rightarrow = document.querySelector(".sec__icon--right");


let counterStep = 0;

leftarrow.addEventListener("click", () => {

    slide("left")
    counterStep--;
/*     counterStep != 0 ? counterStep-- : counterStep = 0; */
    receipt.querySelectorAll(".sec__item").forEach((item, ind) => {
        item.style.height =
        item.style.position = "absolute";
        item.style.transform = `translateX(${100 * (counterStep - ind)}%)`
    })
})

rightarrow.addEventListener("click", () => {
    slide("right")
    counterStep++;
    receipt.querySelectorAll(".sec__item").forEach((item, ind) => {
        item.style.position = "absolute";
        item.style.transform = `translateX(${100 * (counterStep + ind)}%)`
    })
})

/* receipt.addEventListener("click", (e) => {
    slide(e.target)
}) */


receipt.querySelectorAll(".sec__item").forEach((item,ind) => {
    item.style.transofrm = `translateX(${100 * (ind)})`
})



export const slide = function (str) {
/*     receipt.querySelectorAll(".sec__item").forEach((item, ind) => {
        item.style.position = "absolute";
        item.style.transform = `translateX(${100 * (ind)}%)`;
    }) */
    console.log(str)
}

/* export {slide} */