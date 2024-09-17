const submitButton = document.querySelector(".button");
const email = document.querySelector("input[type='email']")
const success = document.querySelector(".success");
const failure = document.querySelector(".failure");

// Events 
submitButton.addEventListener("click", () => {

    const emailInput = email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(emailInput);

    if (isValid) {
        success.classList.remove("hidden")
        fade(success);
    } else {
        failure.classList.remove("hidden")
        fade(failure);
    };
})