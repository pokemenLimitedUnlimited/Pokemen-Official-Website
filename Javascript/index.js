const hamburger = document.getElementById("hamburgerMenuDiv");
const sidebar = document.getElementById("sideBarDiv");

// Click to open and click again to close
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
