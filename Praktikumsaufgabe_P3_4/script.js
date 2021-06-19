"use strict";
var Praktikumsaufgabe_3_4;
(function (Praktikumsaufgabe_3_4) {
    let buttonHTML = document.getElementById("buttonAbsenden"); // Buttons um die Daten zu versenden
    buttonHTML.addEventListener("click", dataSenden);
    let buttonJSON = document.getElementById("buttonAnzeigen");
    buttonJSON.addEventListener("click", dataAnzeigen);
    // Funktion um die eingegebene Daten (im Formular) auf der HTML-Seite ausgeben zu können 
    async function dataSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        //url += "/html";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    // Funktion um die eingegebene Daten (im Formular) in der Konsole als JSON Objekt ausgeben zu können 
    async function dataAnzeigen() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.json();
        console.log(answer);
        let display = document.getElementById("serverantwort");
        display.innerHTML = JSON.stringify(answer);
    }
})(Praktikumsaufgabe_3_4 || (Praktikumsaufgabe_3_4 = {}));
//# sourceMappingURL=script.js.map