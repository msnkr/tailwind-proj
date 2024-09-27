const burgerIcon = document.querySelector(".burger-icon");
const navItems = document.querySelector(".nav-list");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const images = document.querySelectorAll(".img");
const leftBtn2 = document.querySelector(".left-2");
const rightBtn2 = document.querySelector(".right-2");
let idx = 0;

// Functions

// Events
burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
});

rightBtn.addEventListener("click", () => {
    if (idx < images.length - 1) {
        images[idx].classList.toggle("hidden");
        idx++;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden");
        idx = 0;
        images[idx].classList.toggle("hidden");
    }
})

leftBtn.addEventListener("click", () => {
    if (idx == 0) {
        images[idx].classList.toggle("hidden");
        idx = images.length - 1;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden");
        idx--;
        images[idx].classList.toggle("hidden");
    }
})

rightBtn2.addEventListener("click", () => {
    if (idx < images.length - 1) {
        images[idx].classList.toggle("hidden");
        idx++;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden");
        idx = 0;
        images[idx].classList.toggle("hidden");
    }
})

leftBtn2.addEventListener("click", () => {
    if (idx == 0) {
        images[idx].classList.toggle("hidden");
        idx = images.length - 1;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden");
        idx--;
        images[idx].classList.toggle("hidden");
    }
})