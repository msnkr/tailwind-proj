emailButton = document.querySelector(".btn");
inputValue = document.querySelector(".emailInput");

successButton = document.querySelector(".success");
failButton = document.querySelector(".failure");

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

function showToast(x) {
    x.classList.add("opacity-0");
    x.classList.add("opacity-100");
}

emailButton.addEventListener("click", () => {
    if (isValidEmail(inputValue.value)) {
        showToast(successButton);
    } else {
        showToast(failButton);
    }
})