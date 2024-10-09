const navItems = document.querySelector(".navbar-container-items");
const burgerIcon = document.querySelector(".burger-icon");

const arrows = document.querySelectorAll(".arrow");
const faqitem = document.querySelectorAll(".faq-item");



burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})