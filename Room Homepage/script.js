burgerIcon = document.querySelector(".burger-icon");
navItems = document.querySelector(".nav-list");
leftBtn = document.querySelector(".left");
rightBtn = document.querySelector(".right");
imgs = document.querySelectorAll(".carousel-img");

// Functions

// Events

burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
});
