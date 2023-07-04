"use strict";
const button1 = document.getElementById("cir-1");
const button2 = document.getElementById("cir-2");
const button3 = document.getElementById("cir-3");
const button4 = document.getElementById("cir-4");
const button5 = document.getElementById("cir-5");
const value = document.getElementById("value");
const secondHeader = document.getElementById("second-header");
const secondP = document.getElementById("second-p");
button1.addEventListener("click", function () {
  button1.classList.add("button-clicked");
  button2.classList.remove("button-clicked");
  button3.classList.remove("button-clicked");
  button4.classList.remove("button-clicked");
  button5.classList.remove("button-clicked");
});
button2.addEventListener("click", function () {
  button2.classList.add("button-clicked");
  button3.classList.remove("button-clicked");
  button4.classList.remove("button-clicked");
  button5.classList.remove("button-clicked");
  button1.classList.remove("button-clicked");
});
button3.addEventListener("click", function () {
  button3.classList.add("button-clicked");
  button1.classList.remove("button-clicked");
  button2.classList.remove("button-clicked");
  button4.classList.remove("button-clicked");
  button5.classList.remove("button-clicked");
});
button4.addEventListener("click", function () {
  button4.classList.add("button-clicked");
  button1.classList.remove("button-clicked");
  button2.classList.remove("button-clicked");
  button3.classList.remove("button-clicked");
  button5.classList.remove("button-clicked");
});
button5.addEventListener("click", function () {
  button5.classList.add("button-clicked");
  button1.classList.remove("button-clicked");
  button2.classList.remove("button-clicked");
  button3.classList.remove("button-clicked");
  button4.classList.remove("button-clicked");
});

document.getElementById("sub").addEventListener("click", function () {
  document.getElementById("hide").classList.add("hidden");
  document.getElementById("phone").classList.remove("hidden");
  secondHeader.classList.remove("hidden");
  secondP.classList.remove("hidden");
  document.getElementById("rating").style.backgroundColor =
    "hsl(216, 16%, 18%)";
  document.getElementById("value").classList.remove("hidden");
  if (button1.classList.contains("button-clicked")) {
    value.textContent = "You selected 1 out of 5";
  } else if (button2.classList.contains("button-clicked")) {
    value.textContent = "You selected 2 out of 5";
  } else if (button3.classList.contains("button-clicked")) {
    value.textContent = "You selected 3 out of 5";
  } else if (button4.classList.contains("button-clicked")) {
    value.textContent = "You selected 4 out of 5";
  } else if (button5.classList.contains("button-clicked")) {
    value.textContent = "You selected 5 out of 5";
  } else value.textContent = "You selected 0 out of 5";
});
