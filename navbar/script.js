const burgerIcon = document.querySelector(".burger-icon");
const navItems = document.querySelector(".nav-items");


// Events
burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})