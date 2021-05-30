"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_1 = void 0;
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole 
    async function sendDatatoServer(_pURL) {
        let response = await fetch(_pURL);
        let request;
        console.log("Response", response);
        let formData = await response.formData();
        formData.get("fname");
        formData.get("femail");
        formData.get("fbetreff");
        formData.get("fdatum");
        formData.get("ftextfeld");
        console.log(request.url);
        /*let formData: FormData = await fetch(_pURL);
        formData.get("fname");
        formData.get("femail");
        formData.get("fbetreff");
        formData.get("fdatum");
        formData.get("ftextfeld");

        let url: string = "node Praktikumsaufgabe_P3_1/server.js";
        let query: URLSearchParams = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);*/
    }
    sendDatatoServer("node Praktikumsaufgabe_P3_1/server.js");
    //Link um Daten an Server zu schicken (Heroku Deploy -> Deploy a GitHub branch
    /*let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    sendButton.addEventListener("click", sendDatatoServer);*/
})(Praktikumsaufgabe_P3_1 = exports.Praktikumsaufgabe_P3_1 || (exports.Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=script.js.map