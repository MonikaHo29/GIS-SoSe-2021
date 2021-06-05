namespace Praktikumsaufgabe_3_2 {
 
    interface Person {
        [key: string]: string;
    }


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    button.addEventListener("click", DataHTML);
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", DataJSON);

    async function DataHTML(): Promise<void> {


        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url: RequestInfo = "http://localhost:8100/";
        url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverantwort");
        display.innerText = answer;
    }

    async function DataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";
        let url: RequestInfo = "http://localhost:8100/";
        url += "/json";

        url = url + "?" + query.toString();


        let response: Response = await fetch(url);
        
        let myJSON: Person = await response.json();
        console.log(myJSON);
        
    }
}