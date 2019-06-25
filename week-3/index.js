const express = require("express");
const app = express();
const port = 3000;

function sum(number) {
    let realNumber = parseInt(number);
    return result = ((1 + realNumber) * realNumber) / 2;
}

/*** Allow CORS ***/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/*** on top of any other middleware ***/

app.get("/", (req, res) => {
    res.send("Hello appworks school!");
});

app.get("/getData", (req, res) => {
    let number = req.query.number;
    let parsedNumber = parseFloat(number);
    if (!number) {
        res.send("Lack of Parameter.<br>Please enter an integer.")
    } else if (parsedNumber === NaN || parsedNumber % 1 !== 0 || parsedNumber < 0) {
        // rule out float and negative integer
        res.send(`Wrong Parameter.<br>${number} is not a positive integer.`)
    } else if (parsedNumber !== NaN && parsedNumber % 1 === 0) {
        res.send(`You entered ${number}.<br>The result is ${String(sum(number))}.`)
    }
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`server launched at port: ${port}`)
});