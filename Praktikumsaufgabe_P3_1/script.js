"use strict";
var Praktikumsaufgabe_3_1;
(function (Praktikumsaufgabe_3_1) {
    let button = document.getElementById("button"); //Button um die Daten an den Server zu schicken  
    button.addEventListener("click", dataSenden);
    //Funktion um Daten auslesen zu können + asnycron an Server zu schicken 
    async function dataSenden() {
        let formData = new FormData(document.forms[0]); // FormData anlegen (Formular im index) 
        console.log(":" + formData.get("fname")); // Daten auslesen 
        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any                                                         // asnycron an Server versenden 
        let query = new URLSearchParams(formData); // Form Data Objekt generieren                     
        let url = "https://monikagissose2021.herokuapp.com/";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let antwort = await response.text();
        console.log(antwort);
        let displayRueckgabe = document.getElementById("serverantwort");
        displayRueckgabe.innerText = antwort;
    }
})(Praktikumsaufgabe_3_1 || (Praktikumsaufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map