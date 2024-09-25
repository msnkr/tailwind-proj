burgerIcon = document.querySelector(".burger-icon");
navItems = document.querySelector(".nav-list");

burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})