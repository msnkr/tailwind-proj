const burgerIcon = document.querySelector(".burger-icon"),
    navItems = document.querySelector(".nav-items");



burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})