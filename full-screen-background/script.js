const images = document.querySelectorAll(".image"),
    rightBtn = document.querySelector(".right"),
    leftBtn = document.querySelector(".left"),
    burgerIcon = document.querySelector(".burger-div"),
    navList = document.querySelector(".ul-items");

let idx = 0;

rightBtn.addEventListener("click", () => {
    if (idx < images.length - 1) {
        images[idx].classList.toggle("hidden");
        idx++;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden")
        idx = 0;
        images[idx].classList.toggle("hidden")
    }
})

leftBtn.addEventListener("click", () => {
    if (idx != 0) {
        images[idx].classList.toggle("hidden");
        idx--;
        images[idx].classList.toggle("hidden");
    } else {
        images[idx].classList.toggle("hidden");
        idx = images.length - 1;
        images[idx].classList.toggle("hidden");
    }
})

burgerIcon.addEventListener("click", () => {
    navList.classList.toggle("hidden");
})