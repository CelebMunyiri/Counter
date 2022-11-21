"use strict";
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const count = document.querySelector(".count");
let current = 0;
const inn = function () {
  increase.style.backgroundColor = "#fff";
  increase.style.color = "black";
};

const dec = function () {
  decrease.style.backgroundColor = "#fff";
  decrease.style.color = "black";
};
increase.addEventListener("click", function () {
  count.style.color = "green";
  increase.style.color = "#fff";
  increase.style.backgroundColor = "black";

  current += 1;
  count.textContent = current;
  dec();
});
decrease.addEventListener("click", function () {
  decrease.style.color = "#fff";
  decrease.style.backgroundColor = "black";
  current = current - 1;
  count.textContent = current;
  inn();
});
reset.addEventListener("click", function () {
  current = 0;
  count.textContent = current;
  count.style.color = "black";

  inn();
  dec();
});
