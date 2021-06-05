"use strict";
var Praktikumsaufgabe_3_1;
(function (Praktikumsaufgabe_3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", dataSenden);
    async function dataSenden() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("fname"));
        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
        let display = document.getElementById("answer");
        display.innerText = answer;
    }
})(Praktikumsaufgabe_3_1 || (Praktikumsaufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map