"use strict";
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole 
    async function sendDatatoServer(_pURL) {
        let response = await fetch(_pURL);
        console.log("Response", response);
        let formData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("femail"));
        console.log(formData.get("fbetreff"));
        console.log(formData.get("fdatum"));
        console.log(formData.get("ftextfeld"));
        console.log(formData.get("fdokument"));
    }
    sendDatatoServer("https://monikagissose2021.herokuapp.com");
    //Link um Daten an Server zu schicken (Heroku Deploy -> Deploy a GitHub branch
    function submitButton(_load) {
        location.reload();
    }
    document.querySelector("#button").addEventListener("click", submitButton);
})(Praktikumsaufgabe_P3_1 || (Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=script.js.map