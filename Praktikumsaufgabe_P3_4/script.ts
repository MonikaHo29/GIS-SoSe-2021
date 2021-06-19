namespace Praktikumsaufgabe_3_4 {

    interface Data {                                                                                // Um die Daten als JSON Objekt auszugeben 
        [key: string]: string;
    }

    
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");   // Buttons um die Daten zu versenden
    buttonHTML.addEventListener("click", dataSenden);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", dataJSONsenden);


    // Funktion um die eingegebene Daten (im Formular) auf der HTML-Seite ausgeben zu können 
    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com"; >> mongo
        let url: RequestInfo = "mongodb://localhost:27017";
        url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwortServer");
        display.innerHTML = answer;
    }


    // Funktion um die eingegebene Daten (im Formular) in der Konsole als JSON Objekt ausgeben zu können 
    async function dataJSONsenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com"; >> mongo
        let url: RequestInfo = "mongodb://localhost:27017";
        url += "/json";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);                                                     
        let myJSON: Data = await response.json();                                                      
        console.log(myJSON);
    }

}