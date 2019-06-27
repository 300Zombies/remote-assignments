const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.set("view engine", "pug");

function sum(number) {
    let realNumber = parseInt(number);
    return result = ((1 + realNumber) * realNumber) / 2;
}

/*** Allow CORS ***/
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
/*** on top of any other middleware ***/

app.use(cookieParser());

/*** Assignment 3: Connect API by AJAX ***/

app.use(express.static("public"));

/*** Assignment 1: My First Web Server ***/

app.get("/", (req, res) => {
    // res.locals.method = "locals";
    // res.render("index");
    res.render("index", {
        method: "object"
    });
});

/*** Assignment 2: Backend API for Front-End ***/

app.get("/getData", (req, res) => {
    let number = req.query.number;
    let parsedNumber = parseFloat(number);
    if (!number) {
        res.send("Lack of Parameter.<br>Please enter an integer.");
    } else if (parsedNumber === NaN || parsedNumber % 1 !== 0 || parsedNumber < 0) {
        // rule out float and negative integer
        res.send(`Wrong Parameter.<br>${number} is not a positive integer.`);
    } else if (parsedNumber !== NaN && parsedNumber % 1 === 0) {
        res.send(`You entered ${number}.<br>The result is ${String(sum(number))}.`);
    }
});

/*** Assignment 4: HTTP Cookies ***/

app.get("/myname", (req, res) => {
    // res.locals.name = req.cookies.name;
    res.render("myname", {
        name: req.cookies.name
    });
});

app.get("/trackname", (req, res) => {
    let options = {
        httpOnly: true, // only accessible by server, for security reasons
        maxAge: 300000, // expire afer 5 minutes, based on client time
    }
    res.cookie("name", req.query.name, options);
    res.redirect("/myname");
});

app.listen(port, () => {
    console.log(`server launched at port: ${port}`);
});