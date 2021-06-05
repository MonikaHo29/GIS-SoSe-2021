namespace Praktikumsaufgabe_3_2 {

    interface Person {
        [key: string]: string;
    }

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");       
    buttonHTML.addEventListener("click", dataHTML);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", dataJSON);



    //Funktion um Daten auslesen zu können + asnycron an Server zu schicken 
    async function dataHTML(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);                               
        console.log(":" + formData.get("fname"));                                               

        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }

        // tslint:disable-next-line: no-any                                                     
        let query: URLSearchParams = new URLSearchParams(<any>formData);                        
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url: RequestInfo = "http://localhost:8100";
        url += "/html";

        url = url + "?" + query.toString();
        console.log(url);

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
        let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
        displayResponse.innerText = answer;
    }



    async function dataJSON(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }

        // tslint:disable-next-line: no-any                                                     
        let query: URLSearchParams = new URLSearchParams(<any>formData);                        
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url: RequestInfo = "http://localhost:8100";
        url = "/json";

        url = url + "?" + query.toString();
        console.log(url);

        let response: Response = await fetch(url);
        let myJSON: Person = await response.json();
        console.log(myJSON);
    }
}