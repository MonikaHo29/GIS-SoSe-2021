namespace Praktikumsaufgabe_3_4 {

    interface Data {                                                                                // Um die Daten als JSON Objekt auszugeben 
        name: string;
        matrikel: number;
        studiengang: string;
        semester: number;
        beginn: number;
    }


    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAbsenden");   // Buttons um die Daten zu versenden
    buttonHTML.addEventListener("click", dataSenden);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAnzeigen");
    buttonJSON.addEventListener("click", dataAnzeigen);


    // Funktion um die eingegebene Daten (im Formular) auf der HTML-Seite ausgeben zu können 
    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com"; 
        //let url: RequestInfo = "http://localhost:8100";
        //url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }


    // Funktion um die eingegebene Daten (im Formular) in der Konsole als JSON Objekt ausgeben zu können 
    async function dataAnzeigen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/json";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: Data = await response.json();
        console.log(answer);

        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverantwort");
        display.innerHTML = JSON.stringify(answer);
    }
}