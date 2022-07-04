let searchArea = document.querySelector(".search");
let searchInput = document.querySelector(".search input");
let searchIcon = document.querySelector(".search input i");

searchArea.onclick = function () {
  searchInput.classList.add("active");
  searchArea.classList.add("active");
};

document.onclick = function (e) {
  if (e.target === searchArea || e.target === searchInput) {
  } else {
    searchInput.classList.remove("active");
    searchArea.classList.remove("active");
  }
};

// cards filtering

let planType = document.querySelectorAll(".internet-plan-type");
let planCard = document.querySelectorAll(".internet-plan-card");

for (let i = 0; i < planType.length; i++) {
  planType[i].addEventListener("click", function () {
    for (let j = 0; j < planType.length; j++) {
      planType[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < planCard.length; k++) {
      planCard[k].classList.remove("active");
      planCard[k].classList.add("hide");

      if (planCard[k].getAttribute("data-item") == dataFilter) {
        planCard[k].classList.remove("hide");
        planCard[k].classList.add("active");
      }
    }
  });
}

window.onload = function () {
  planType[0].click();
};

// Navbar toggler
let navbarBottom = document.querySelector(".navbar-bottom");
let menu = document.querySelector("#menu");
let header = document.querySelector(".header");

menu.addEventListener("click", () => {
  navbarBottom.classList.toggle("active");
  header.classList.toggle("active");
  menu.classList.toggle("fa-times");
});

// Filter cards with combo box

var searchFilter = () => {
  let selectedPlans = document.getElementById("selectPlans").value;
  console.log(selectedPlans);
  const cards = document.getElementsByClassName("internet-plan-card");

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains(selectedPlans) || selectedPlans == "") {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
};
