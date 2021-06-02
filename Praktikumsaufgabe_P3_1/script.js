"use strict";
var Praktikumsaufgabe_3_1;
(function (Praktikumsaufgabe_3_1) {
    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole
    // !Anmerkung: Funktion funktioniert nicht, ich weißt nicht wo der Fehler oder ob die Funktion so richtig ist. 
    let button = document.getElementById("button"); //Button erstellen und mit der Funktion dataSenden 
    button.addEventListener("click", dataSenden);
    async function dataSenden() {
        let formData = new FormData(document.forms[0]); // FormData anlegen + Formular im index 
        console.log(":" + formData.get("fname"));
        for (let entry of formData) { // 
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let query = new URLSearchParams(formData); //
        let url = "https://salinasapp.herokuapp.com";
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let answer = await response.text();
        console.log(answer);
    }
})(Praktikumsaufgabe_3_1 || (Praktikumsaufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map