const burgerIcon = document.querySelector(".button");
const menu = document.querySelector(".nav-items");

burgerIcon.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden")
    }
})