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
