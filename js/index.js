var popupModalCont = document.querySelector(".modal-container");
var modal = document.querySelector(".modal");
var cardBody = document.querySelectorAll(".package-title");
var btnClosePopupModal = document.querySelector(".close");
var cardPackageName = document.querySelector(
  ".package-card .package-name-card"
);

// !1st method when clicked on every specific card open the popup modal
cardBody.forEach((card) => {
  card.addEventListener("click", (e) => {
    popupModalCont.classList.add("active");

    // console.log(
    //   card.parentElement.children[0].children[0].children[0].innerText
    // );
    var cardPackageName =
      card.parentElement.children[0].children[0].children[0].innerText;
    modal.querySelector("h1").innerHTML = cardPackageName;
  });
});

//close the popup modal
btnClosePopupModal.onclick = function () {
  popupModalCont.classList.remove("active");
};

//When clicked outside of the modal then close it
popupModalCont.addEventListener("click", (e) => {
  if (e.target === popupModalCont) {
    popupModalCont.classList.remove("active");
  }
});

// Navbar toggler
let navbarBottom = document.querySelector(".navbar-bottom");
let menu = document.querySelector("#menu");
let header = document.querySelector(".header");

menu.addEventListener("click", () => {
  navbarBottom.classList.toggle("active");
  header.classList.toggle("active");
  menu.classList.toggle("fa-times");
});

// Popup for plan Selectors
let modalPlanSelector = document.querySelector(".modal-plan-container");
let viewAllPlans = document.getElementById("viewAllPlans");
let closePlanSelectorModal = document.getElementById(
  "close-modal-plan-selector"
);

viewAllPlans.onclick = function () {
  modalPlanSelector.classList.add("active");
};

closePlanSelectorModal.onclick = function () {
  modalPlanSelector.classList.remove("active");
};
