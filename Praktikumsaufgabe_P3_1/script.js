"use strict";
var Praktikumsaufgabe_3_1;
(function (Praktikumsaufgabe_3_1) {
    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole
    // !Anmerkung: Funktion funktioniert nicht, ich weißt nicht wo der Fehler oder ob die Funktion so richtig ist. 
    async function sendDatatoServer(_pURL) {
        let response = await fetch(_pURL);
        console.log("Response", response);
        let formData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("femail"));
        console.log(formData.get("fbetreff"));
        console.log(formData.get("fdatum"));
        console.log(formData.get("ftextfeld"));
    }
    sendDatatoServer("https://monikagissose2021.herokuapp.com");
    function submitButton(_load) {
        location.reload();
    }
    document.querySelector("button").addEventListener("click", submitButton);
})(Praktikumsaufgabe_3_1 || (Praktikumsaufgabe_3_1 = {}));
//# sourceMappingURL=script.js.map