"use strict";
const button1 = document.getElementById("cir-1");
const button2 = document.getElementById("cir-2");
const button3 = document.getElementById("cir-3");
const button4 = document.getElementById("cir-4");
const button5 = document.getElementById("cir-5");
const value = document.getElementById("value");
const secondHeader = document.getElementById("second-header");
const secondP = document.getElementById("second-p");
const sub = document.getElementById("sub");
const hide = document.getElementById("hide");
const phone = document.getElementById("phone");
const rating = document.getElementById("rating");
const arr = [button1, button2, button3, button4, button5];

const assignClass = function (buttons) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      for (let j = 0; j < buttons.length; j++) {
        if (buttons[j] === buttons[i]) {
          buttons[j].classList.add("button-clicked");
        } else {
          buttons[j].classList.remove("button-clicked");
        }
      }
    });
  }
};

assignClass(arr);

sub.addEventListener("click", function () {
  hide.classList.add("hidden");
  phone.classList.remove("hidden");
  secondHeader.classList.remove("hidden");
  secondP.classList.remove("hidden");
  rating.style.backgroundColor = "hsl(216, 16%, 18%)";
  value.classList.remove("hidden");
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
