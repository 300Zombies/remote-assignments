/*** requires ***/
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const app = express();
const port = 3000;

/*** db connection ***/
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "a02750687138",
    database: "assignment"
});

con.connect((error) => {
    if (error) throw error;
    console.log("Database Connected!");
    // con.query("SELECT * FROM user WHERE username = 'normal_user' AND password = 'banana';", function (err, result, fields) {
    //     // fields hold detail info but not necessary
    //     if (err) throw err;
    //     console.log(result);
    //     console.log(result[0].username);
    //     // result is an []
    //     console.log(result.length);
    // }); // some little tests that would help
});

/*** middlewares ***/
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.use(express.static("public"));

/*** templates ***/
app.set("view engine", "pug");

/*** routes ***/
app.get("/", (req, res) => {
    if (req.cookies.status) {
        res.render("index", {
            status: req.cookies.status
        });
    } else {
        res.render("index", {
            status: "sign in or sign up to get a cookie free!"
        });
    }
});

app.get("/members", (req, res) => {
    if (req.cookies.status) {
        res.render("members", {
            status: req.cookies.status
        });
    } else {
        // no cookies for those didn't sign-in
        res.redirect("/");
    }
});

app.post("/sign-in", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    con.query(`SELECT * FROM user WHERE e_mail = "${email}" AND password = "${password}"`, function (err, result) {
        console.log(result);
        if (err) throw err;

        let target = result[0];
        if (result.length === 0) {
            console.log("wrong e-mail or password!");
            res.cookie("status", "wrong e-mail or password!!");
            res.redirect("/");
        } else if (target.e_mail === email && target.password === password) {
            let options = {
                httpOnly: true,
                maxAge: 300000,
            }
            res.cookie("status", `Hello! ${target.e_mail}! You've got a free cookie!`, options);
            res.redirect("/members");
        }
    });
});

app.post("/sign-up", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    con.query(`SELECT * FROM user WHERE e_mail = "${email}"`, function (err, result) {
        console.log(result);
        if (err) throw err;

        let target = result[0];
        if (result.length === 0) {
            con.query(`INSERT INTO user (e_mail, password) VALUES ("${email}", "${password}")`, function (err, result) {
                if (err) throw err;
                console.log("new user registered");
            });
            let options = {
                httpOnly: true,
                maxAge: 300000,
            }
            res.cookie("status", `Welcome aboard ${email}! Here is a free cookie!`, options);
            res.redirect("/members");
        } else if (target.e_mail === email) {
            let options = {
                httpOnly: true,
                maxAge: 300000,
            }
            console.log("this email has been regitered");
            res.cookie("status", "This email has been regitered!", options);
            res.redirect("/");
        }
    });
});

app.listen(port, () => {
    console.log(`server launched at port: ${port}`);
});