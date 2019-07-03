function delayedResult(n1, n2, delayTime, callback) {
    window.setTimeout((result) => {
        result = n1 + n2;
        callback(result);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

/*** window.alter will pause the outcome but not the delayTime ***/

function ajax(src, callback) {
    fetch(src).then(res => {
        // console.log(res.text()); -> cause error
        /*** Response methode like 'json', 'text'
         can be called ONLY ONCE ***/
        return res.text();
    }).then((text) => {
        const products = JSON.parse(text);
        // console.log(products);
        callback(products);
    }).catch((error) => {
        console.error(`Looks like something went wrong while fetching or rendering content. ${error}`);
    });
}

function render(data) {
    if (data) {
        let tags = [];
        for (let attr in data[0]) {
            tags.push(attr);
        }
        let tbody = document.querySelector("#tbody");
        let fragment = document.createDocumentFragment();
        for (let row = 0; row < data.length; row++) {
            let tr = document.createElement("tr");
            for (column = 0; column < tags.length; column++) {
                let td = document.createElement("td");
                let text = document.createTextNode(data[row][tags[column]]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            fragment.appendChild(tr);
        }
        tbody.appendChild(fragment);
    } else {
        alert("Oops! There are no data to render.");
    }
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
});