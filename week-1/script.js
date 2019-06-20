// week-2 scripts

function init() {

    const message = document.querySelector(".welcome h1");
    const burger = document.querySelector(".burger");
    const items = document.querySelector(".items");

    message.addEventListener("click", () => {
        if (message.textContent !== "Have a Good Time!") {
            message.textContent = "Have a Good Time!";
        } else {
            message.textContent = "Welcome to my week 1 assignment!"
        }
    });

    burger.addEventListener("click", () => {
        items.classList.toggle("items-activate");
        // TODO: burger -> cross
    });
}

function action() {
    console.log("function not completed yet haha!")
}