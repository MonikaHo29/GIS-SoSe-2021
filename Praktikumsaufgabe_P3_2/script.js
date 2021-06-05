"use strict";
var Praktikumsaufgabe_3_2;
(function (Praktikumsaufgabe_3_2) {
    let buttonHTML = document.getElementById("buttonHTML"); //Button um die Daten an den Server zu schicken  
    buttonHTML.addEventListener("click", dataSenden);
    let buttonJSON = document.getElementById("buttonJSON"); //Button um die Daten an den Server zu schicken  
    buttonJSON.addEventListener("click", dataSenden);
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
        let displayRueckgabe = document.getElementById("antwort");
        displayRueckgabe.innerText = antwort;
    }
})(Praktikumsaufgabe_3_2 || (Praktikumsaufgabe_3_2 = {}));
//# sourceMappingURL=script.js.map