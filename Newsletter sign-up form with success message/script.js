btn = document.querySelector(".button");
inputText = document.querySelector(".input");
inputBorder = document.querySelector(".input-div");
errorMessage = document.querySelector(".wrong-email");


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


btn.addEventListener("click", () => {
    const toggleClasses = (add) => {
        errorMessage.classList.toggle("opacity-100", add);
        inputText.classList.toggle("bg-red-100", add);
        inputText.classList.toggle("text-red-400", add);
        inputBorder.classList.toggle("bg-red-100", add);
        inputBorder.classList.toggle("border-red-100", add);
    };

    toggleClasses(!isValidEmail(inputText.value));
});
