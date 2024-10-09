const navItems = document.querySelector(".navbar-container-items");
const burgerIcon = document.querySelector(".burger-icon");

const arrows = document.querySelectorAll(".arrow");
const faqitem = document.querySelectorAll(".faq-item");

function toggleFade(index) {
    faqitem[index].classList.toggle('animate-fadeIn')
}

arrows.forEach((element, index) => {
    element.addEventListener("click", () => {
        faqitem[index].classList.toggle("hidden");
        toggleFade(index);

    })
})

burgerIcon.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
})