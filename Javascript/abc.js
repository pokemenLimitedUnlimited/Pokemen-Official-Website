const plusButtons = document.getElementsByClassName("qntyPlus");
const minusButtons = document.getElementsByClassName("qntyMinus");

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("qntyPlus")) {
    const quantity = event.target.nextElementSibling;
    quantity.textContent = Number(quantity.textContent) + 1;
  }
  if (event.target.classList.contains("qntyMinus")) {
    const quantity = event.target.previousElementSibling;
    if (Number(quantity.textContent) > 1) {
      quantity.textContent = Number(quantity.textContent) - 1;
    } else if (Number(quantity.textContent) == 1) {
      quantity.parentElement.parentElement.remove();
    }
  }
});

const buyButtons = document.getElementsByClassName("buyButton");
for (i = 0; i < buyButtons.length; i++) {
  let buyButton = buyButtons[i];
  buyButton.addEventListener("click", function (event) {
    const cart = document.querySelector("#cartHeaderRow");
    const imgSrc =
      event.target.parentElement.parentElement.querySelector("img").src;
    const existingItem = document.querySelector(
      `#cartHeaderRow ~ .cartRows img[src="${imgSrc}"]`,
    );

    const priceText =
      event.target.parentElement.previousElementSibling.textContent;
    const priceValue = priceText.match(/[0-9.]+/)[0];
    console.log(priceValue);
    if (existingItem) {
      const quantity = existingItem
        .closest(".cartRows")
        .querySelector(".cartQntyDiv h3");
      quantity.textContent = Number(quantity.textContent) + 1;
    } else {
      cart.insertAdjacentHTML(
        "afterend",
        `<section class="cartRows">
              <div class="cartItemsDiv">
                <img src="${imgSrc}" alt="" />
                <h3>Kian Ramezani</h3>
              </div>
              <div class="cartPriceDiv"><h3>£${priceValue}</h3></div>
              <div class="cartQntyDiv">
                <button class="qntyPlus">+</button>
                <h3>1</h3>
                <button class="qntyMinus">-</button>
              </div>
            </section>`,
      );
    }
  });
}
