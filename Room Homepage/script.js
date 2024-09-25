iconBtn = document.querySelector(".burger-icon");
navItems = document.querySelector(".navbar");

iconBtn.addEventListener("click", () => {
    navItems.classList.toggle("hidden")
})