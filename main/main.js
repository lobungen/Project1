// it highlights, but it doesn't save?
// needs to still hover
// needs to save? or stay on the screen.. is that save?
// eventListner?
// needs the button click
// dropdownn needs to work? events? targets?
//jsfiddle.net super helpful!
// make  it pretty? prettier doesn't work??

function toggleDropdown() {
  const dropwdownMenu = document.getElementById("dropdownMenu");
  dropwdownMenu.classList.toggle("active");
}
window.onclick = function (event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  if (!event.target.matches(".dropbtn")) {
    dropdownMenu.classList.remove("active");
  }
};

function filterContent(genre) {
  console.log(`Filtering content by: ${genre}`);
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    if (item.classList.contains(genre)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function rateItem(rating, itemId) {
  const stars = document.querySelectorAll(
    `.stars[data-item="${itemId}"] .star`
  );
  stars.forEach((star) => {
    star.classList.remove("lit");
  });
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("lit");
    }
  });
  localStorage.setItem(`rating-${itemId}`, rating);
}
function loadRating(itemId) {
  const savedRating = localStorage.getItem(`rating-${itemId}`);
  if (savedRating) {
    const stars = document.querySelectorAll(
      `.stars[data-item="${itemId}"] .star`
    );
    stars.forEach((star, index) => {
      if (index < savedRating) {
        star.classList.add("lit");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const allItems = document.querySelectorAll(".stars");
  allItems.forEach((item) => {
    const itemId = item.getAttribute("data-item");
    loadRating(itemId);
  });
});
