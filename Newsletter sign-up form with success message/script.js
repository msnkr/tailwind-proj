btn = document.querySelector(".button");
inputText = document.querySelector(".input");
inputBorder = document.querySelector(".input-div");
errorMessage = document.querySelector(".wrong-email");


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


btn.addEventListener("click", () => {
    if (isValidEmail(inputText.value)) {
        errorMessage.classList.remove("opacity-100");
        inputText.classList.remove("bg-red-100", "text-red-400")
        inputBorder.classList.remove("bg-red-100", "border-red-100")
    } else {
        errorMessage.classList.add("opacity-100");
        inputText.classList.add("bg-red-100", "text-red-400")
        inputBorder.classList.add("bg-red-100", "border-red-100")
    }
})