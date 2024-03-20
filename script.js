"use strict";

const btns = document.querySelectorAll(".btn-nav");
const blocks = document.querySelectorAll(".block");
const header = document.getElementById("header");

btns.forEach((el) =>
  el.addEventListener("click", (e) => {
    for (let i = 0; btns.length > i; i++) {
      if (btns[i] == e.target) {
        window.scrollTo({
          top:
            blocks[i].getBoundingClientRect().top +
            scrollY -
            header.offsetHeight,
          behavior: "smooth",
        });
      }
    }
  })
);
