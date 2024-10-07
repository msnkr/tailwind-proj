const btn = document.querySelector(".btn");
const textH1 = document.querySelector(".text-h1");

btn.addEventListener("click", () => {
    setInterval(()=> {
        textH1.classList.remove("opacity-100");
    }, 3000);
    textH1.classList.add("opacity-100");
})

