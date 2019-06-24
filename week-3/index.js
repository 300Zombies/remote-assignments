const express = require("express");
const app = express();
const port = 3000;

function sum(number) {
    let realNumber = parseInt(number);
    return result = ((1 + realNumber) * realNumber) / 2;
}

app.get("/", (req, res) => {
    res.send("Hello appworks school!");
});

app.get("/getData", (req, res) => {
    let number = req.query.number;
    if (!number) {
        res.send("Lack of Parameter.<br>Please enter an integer.")
    } else if (parseFloat(number) === NaN || parseFloat(number) % 1 !== 0) {
        // the float type is not a valid input too
        res.send(`Wrong Parameter.<br>${number} is not an integer.`)
    } else if (parseFloat(number) !== NaN && parseFloat(number) % 1 === 0) {
        res.send(`You entered ${number}.<br>The result is ${String(sum(number))}.`)
    }
});


app.listen(port, () => {
    console.log(`server launched at port: ${port}`)
});