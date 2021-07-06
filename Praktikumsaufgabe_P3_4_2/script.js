"use strict";
var Praktikumsaufgabe_P3_4_2;
(function (Praktikumsaufgabe_P3_4_2) {
    let buttonAbsenden = document.getElementById("buttonAbsenden");
    buttonAbsenden.addEventListener("click", dataSenden);
    let buttonAnzeigen = document.getElementById("buttonAnzeigen");
    buttonAnzeigen.addEventListener("click", dataAnzeigen);
    //Asynchrone Funktion um die Daten global an den Server Heroku zu schicken 
    async function dataSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/insert";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    //Asynchrone Funktion um Daten als Serverantwort anzeigen zu lassen
    async function dataAnzeigen() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/show";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        let display = document.getElementById("serverantwort");
        display.innerHTML = answer;
    }
})(Praktikumsaufgabe_P3_4_2 || (Praktikumsaufgabe_P3_4_2 = {}));
//# sourceMappingURL=script.js.map