"use strict";
var Praktikumsaufgabe_3_2;
(function (Praktikumsaufgabe_3_2) {
    let buttonHTML = document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", dataHTML);
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", dataJSON);
    //Funktion um Daten auslesen zu können + asnycron an Server zu schicken 
    async function dataHTML() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("fname"));
        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any                                                     
        let query = new URLSearchParams(formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url = "http://localhost:8100";
        url += "/html";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
        let displayResponse = document.getElementById("answer");
        displayResponse.innerText = answer;
    }
    async function dataJSON() {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any                                                     
        let query = new URLSearchParams(formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url = "http://localhost:8100";
        url = "/json";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let myJSON = await response.json();
        console.log(myJSON);
    }
})(Praktikumsaufgabe_3_2 || (Praktikumsaufgabe_3_2 = {}));
//# sourceMappingURL=script.js.map