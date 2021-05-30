import * as Http from "http";

export namespace Praktikumsaufgabe_P3_1 {


    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole 

    async function sendDatatoServer(_pURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_pURL);
        let request: Http.IncomingMessage;
        console.log("Response", response);
        let formData: FormData = await response.formData();
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

}


