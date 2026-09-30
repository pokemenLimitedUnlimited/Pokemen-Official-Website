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
