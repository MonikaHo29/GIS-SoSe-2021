"use strict";
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    async function formData(_pURL) {
        let response = await fetch(_pURL);
        console.log("Response", response);
        let formData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("fwohnort"));
    }
    formData("https://testgissose2021.herokuapp.com"); //Link App und Github
    function handleSubmit(_pSubmit) {
        console.log(_pSubmit.target);
    }
    document.querySelector("#submitButton").addEventListener("click", handleSubmit);
})(Praktikumsaufgabe_P3_1 || (Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=script.js.map