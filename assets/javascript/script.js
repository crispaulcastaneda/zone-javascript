"use strict";

// Changing text

const h1 = (document.querySelector(".text__paragraph").textContent =
  "Output Changes");

const addNum = document.querySelector(".add__num").value;

// EVENT LISTENER
document.querySelector(".button").addEventListener("click", function () {
  const addNum = Number(document.querySelector(".add__num").value);
  console.log(addNum, typeof addNum);

  if (!addNum) {
    // It will execute when the whole condition is true
    document.querySelector(".text__paragraph").textContent = "No Number 🤔";
  } else {
    document.querySelector(".text__paragraph").textContent =
      "Value Added! " + addNum;
  }
});
