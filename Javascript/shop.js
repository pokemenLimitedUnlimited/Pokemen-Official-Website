document.addEventListener("click", function (event) {
  if (event.target.classList.contains("qntyPlus")) {
    const plusBtn = event.target;
    const quantity = plusBtn.nextElementSibling;
    quantity.textContent = Number(quantity.textContent) + 1;
    totalPrice();
  }
  if (event.target.classList.contains("qntyMinus")) {
    const minusBtn = event.target;
    const quantity = minusBtn.previousElementSibling;
    if (Number(quantity.textContent) > 1) {
      quantity.textContent = Number(quantity.textContent) - 1;
    } else if (Number(quantity.textContent) == 1) {
      quantity.parentElement.parentElement.remove();
    }
    totalPrice();
  }
  if (event.target.classList.contains("buyButton")) {
    const buyBtn = event.target;
    const imgSrc = buyBtn.parentElement.parentElement.querySelector("img").src;
    const exsist = document.querySelector(
      `#cartHeaderRow ~ .cartRows img[src="${imgSrc}"]`,
    );
    if (exsist) {
      const cartRow = exsist.parentElement.parentElement;
      const quantity = cartRow.querySelector(`.cartQntyDiv h3`);
      quantity.textContent = Number(quantity.textContent) + 1;
    } else {
      const cartHeaderRow = document.getElementById("cartHeaderRow");
      const priceStr = buyBtn.parentElement.previousElementSibling.textContent;
      const priceValue = priceStr.match(/[0-9.]+/)[0];
      const cardName =
        buyBtn.parentElement.parentElement.querySelector(`h3`).textContent;
      cartHeaderRow.insertAdjacentHTML(
        "afterend",
        `<section class="cartRows">
              <div class="cartItemsDiv">
                <img src="${imgSrc}" alt="" />
                <h3>${cardName}</h3>
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
    totalPrice();
  }
});

function totalPrice() {
  const priceList = document.querySelectorAll(
    `#cartHeaderRow ~ .cartRows .cartPriceDiv h3`,
  );
  const priceCount = priceList.length;
  let price = 0;

  for (i = 0; i < priceCount; i++) {
    price =
      price +
      Number(priceList[i].textContent.match(/[0-9.]+/)) *
        Number(
          priceList[i].parentElement.nextElementSibling.querySelector("h3")
            .textContent,
        );
  }

  const totalField = document.getElementById("totalPrice");
  totalField.innerHTML = `<span id="totalPrice"><h3>Total: £${price.toFixed(2)}</h3></span>`;
}

function goToCart() {
  document.getElementById("shoppingCart").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function scrollToTop() {
  document.getElementById("banner").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function purchase() {
  const itemsType = document.querySelectorAll(`#cartHeaderRow ~ .cartRows`);
  const itemsTypeCount = itemsType.length;
  for (i = 0; i < itemsTypeCount; i++) {
    itemsType[i].remove();
  }
  totalPrice();
}

const searchBar = document.getElementById("searchBar");
function searchItems() {
  const text = searchBar.value.toLowerCase();
  console.log(`Searching for: ${text}`);

  const items = document.querySelectorAll(`.galleryUnitDiv`);
  let visibleCount = 0;

  items.forEach((item) => {
    const name = item.querySelector("h3").textContent.toLowerCase();
    if (name.includes(text)) {
      item.style.display = "";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });
  const noResults = document.getElementById("noResultsWrapper");
  const labels = document.querySelectorAll(".volumeLabel");
  if (visibleCount === 0) {
    noResults.style.display = "flex";
    window.scroll(0, 270);
  } else {
    noResults.style.display = "none";
  }
}

searchBar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchItems();
  }
});

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
  searchItems();
});
