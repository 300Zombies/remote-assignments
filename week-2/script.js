/*** Assignment 1: Function and Array ***/

function findMax(...numbers) {
    let max = numbers[0];
    // for (i = 1; i < numbers.length; i++) {
    //     if (numbers[i] > max) {
    //         max = numbers[i]
    //     }
    // }
    numbers.forEach((number) => {
        if (number > max) {
            max = number
        }
    });
    return max
}

/*** Assignment 2: Object ***/

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
// Try to call calculate function correctly

let args1 = {
    op: "+",
    n1: 7,
    n2: 11
}

let args2 = {
    op: "-",
    n1: -2,
    n2: -5
}

let args3 = {
    op: "*",
    n1: 3,
    n2: 4
}

function superCall(...args) {
    args.forEach((arg) => {
        console.log(calculate(arg));
    });
}

superCall(args1, args2, args3);
// 18, 3, Not supported

function Arugments(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2
}

let args4 = new Arugments("+", -18, 3)
let args5 = new Arugments("-", 55, 42)
let args6 = new Arugments("/", 99, 11)

superCall(args4, args5, args6);
// -15, 13, Not supported

/*** Assignment 3: Function, Array, and Object ***/
// Complete the function below to calculate the average price of all the products.

function avg(data) {
    totalPrice = 0
    data.products.forEach((product) => {
        totalPrice += product.price
    });
    avgPrice = totalPrice / data.size
    console.log(avgPrice)
    return avgPrice
}

avg({
    size: 3,
    products: [{
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});

// 350