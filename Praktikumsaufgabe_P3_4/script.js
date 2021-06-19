"use strict";
var Praktikumsaufgabe_3_4;
(function (Praktikumsaufgabe_3_4) {
    let buttonHTML = document.getElementById("buttonHTML"); // Buttons um die Daten zu versenden
    buttonHTML.addEventListener("click", dataHTMLsenden);
    let buttonJSON = document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", dataJSONsenden);
    // Funktion um die eingegebene Daten (im Formular) auf der HTML-Seite ausgeben zu können 
    async function dataHTMLsenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com"; >> mongo
        let url = "https://localhost";
        url += "/html";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        let display = document.getElementById("antwortServer");
        display.innerHTML = answer;
    }
    // Funktion um die eingegebene Daten (im Formular) in der Konsole als JSON Objekt ausgeben zu können 
    async function dataJSONsenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://monikagissose2021.herokuapp.com"; //>> mongo
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let myJSON = await response.json();
        console.log(myJSON);
    }
})(Praktikumsaufgabe_3_4 || (Praktikumsaufgabe_3_4 = {}));
//# sourceMappingURL=script.js.map