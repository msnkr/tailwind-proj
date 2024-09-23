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
        console.log("pass")
    } else {
        errorMessage.classList.toggle("opacity-100");
        inputBorder.classList.toggle("border-red-100");
        inputBorder.classList.toggle("bg-red-100");
        inputText.classList.toggle("bg-red-100");
        inputText.classList.toggle("text-red-400");
    }
});

