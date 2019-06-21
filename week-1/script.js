// week-2 scripts

function init() {

    const message = document.querySelector(".welcome h1");
    const burger = document.querySelector(".burger");
    const items = document.querySelector(".items");
    const hiddenBoxes = document.querySelector(".hidden-boxes");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", () => {
        hiddenBoxes.classList.toggle("hidden-boxes");
    });

    message.addEventListener("click", () => {
        if (message.textContent !== "Have a Good Time!") {
            message.textContent = "Have a Good Time!";
        } else {
            message.textContent = "Welcome to my week 1 assignment!"
        }
    });

    burger.addEventListener("click", () => {
        items.classList.toggle("items-activate");
        burger.classList.toggle("burger-activate");
    });
}