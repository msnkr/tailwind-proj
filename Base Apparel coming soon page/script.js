emailButton = document.querySelector(".btn");
successButton = document.querySelector(".success");
failButton = document.querySelector(".failure");

emailButton.addEventListener("click", () => {
    successButton.classList.toggle("opacity-0");
    successButton.classList.toggle("opacity-100");
})