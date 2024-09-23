btn = document.querySelector(".button");
inputText = document.querySelector(".input");
inputBorder = document.querySelector(".input-div");
errorMessage = document.querySelector(".wrong-email");

mainContainer = document.querySelector(".container");
successContainer = document.querySelector(".success-container");
userEmail = document.querySelector(".email-name");
dismissBtn = document.querySelector(".dissmiss-btn");


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


btn.addEventListener("click", () => {
    if (isValidEmail(inputText.value)) {
        mainContainer.classList.toggle("hidden");
        successContainer.classList.toggle("hidden");
        userEmail.textContent = inputText.value;
    } else {
        errorMessage.classList.toggle("opacity-100");
        inputBorder.classList.toggle("border-red-100");
        inputBorder.classList.toggle("bg-red-100");
        inputText.classList.toggle("bg-red-100");
        inputText.classList.toggle("text-red-400");
    }
});

dismissBtn.addEventListener("click", () => {
    window.location.reload();
})