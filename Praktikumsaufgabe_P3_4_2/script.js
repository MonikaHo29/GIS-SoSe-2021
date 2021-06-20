"use strict";
var Praktikumsaufgabe_P3_4_2;
(function (Praktikumsaufgabe_P3_4_2) {
    let buttonAbsenden = document.getElementById("buttonAbsenden");
    buttonAbsenden.addEventListener("click", dataSenden);
    let buttonAnzeigen = document.getElementById("buttonAnzeigen");
    buttonAnzeigen.addEventListener("click", dataAnzeigen);
    async function dataSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        url += "/send";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
    async function dataAnzeigen() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "http://localhost:8100";
        url += "/show";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.json();
        console.log(answer);
        let display = document.getElementById("serverantwort");
        display.innerHTML = JSON.stringify(answer);
    }
})(Praktikumsaufgabe_P3_4_2 || (Praktikumsaufgabe_P3_4_2 = {}));
//# sourceMappingURL=script.js.map