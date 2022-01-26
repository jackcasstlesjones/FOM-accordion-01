"use strict";

const btnOne = document.getElementById("button-one");
const btnTwo = document.getElementById("button-two");
const btnThree = document.getElementById("button-three");
const btnFour = document.getElementById("button-four");
const btnFive = document.getElementById("button-five");

const contOne = document.getElementById("content-one");
const contTwo = document.getElementById("content-two");
const contThree = document.getElementById("content-three");
const contFour = document.getElementById("content-four");
const contFive = document.getElementById("content-five");

const titleOne = document.getElementById("title-one");
const titleTwo = document.getElementById("title-two");
const titleThree = document.getElementById("title-three");
const titleFour = document.getElementById("title-four");
const titleFive = document.getElementById("title-five");

btnOne.addEventListener("click", function () {
  contOne.classList.toggle("open");
  titleOne.classList.toggle("bold");
  console.log(contOne);
});

btnTwo.addEventListener("click", function () {
  contTwo.classList.toggle("open");
  titleTwo.classList.toggle("bold");
});

btnThree.addEventListener("click", function () {
  contThree.classList.toggle("open");
  titleThree.classList.toggle("bold");
});

btnFour.addEventListener("click", function () {
  contFour.classList.toggle("open");
  titleFour.classList.toggle("bold");
});

btnFive.addEventListener("click", function () {
  contFive.classList.toggle("open");
  titleFive.classList.toggle("bold");
});

console.log();
