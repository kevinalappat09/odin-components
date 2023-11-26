import "./style.css";

const dropdownElement = document.querySelector(".dropdown");
const dropdownContainer = document.querySelector(".dropdown-option-container");

function makeVisible() {
  dropdownContainer.style.visibility = "visible";
}

function makeHidden() {
  dropdownContainer.style.visibility = "hidden";
}

dropdownElement.addEventListener("mouseover", makeVisible);
dropdownElement.addEventListener("mouseout", makeHidden);
