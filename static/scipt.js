"use strict"

const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    console.log("Button clicked!");
  });
}