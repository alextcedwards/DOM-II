// Your code goes here
// Your code goes here
const header = document.querySelector(".main-navigation");
const links = document.querySelectorAll(".nav");
const img = document.querySelectorAll("img");
const button = document.querySelectorAll(".btn");
const para = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");
const intro = document.querySelector(".intro");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

button[0].addEventListener("click", function (event) {
  button[0].style.background = "red";
});

header.addEventListener("mouseover", function (event) {
  header.style.border = "thick dotted #ff9966";
});
header.addEventListener("mouseleave", function (event) {
  header.style.border = "white";
});

h2[1].addEventListener("copy", function (event) {
  alert("DONT BE A THIEF.");
});

document.addEventListener("mouseup", function (event) {
  para[1].style.color = "purple";
});

document.addEventListener("contextmenu", function (event) {
  alert("I DONT THINK SO");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    h2[2].style.fontSize = "5rem";
  }
});

document.addEventListener("keyup", function (event) {
  h2[2].style.fontSize = "3.5rem";
});

document.addEventListener("dblclick", function (event) {
  body.style.backgroundColor = "gray";
});

document.addEventListener("mouseout", function (event) {
  body.style.backgroundColor = "white";
  event.stopPropagation();
});

Array.from(document.links).forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
