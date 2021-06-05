namespace Praktikumsaufgabe_3_2 {

    interface Data {
        [key: string]: string;
    }


    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", dataHTMLsenden);

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", dataJSONsenden);



    async function dataHTMLsenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://salinasapp.herokuapp.com";
        let url: RequestInfo = "http://localhost:8100";
        url += "/html";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwortServer");
        display.innerText = answer;
    }



    async function dataJSONsenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url: RequestInfo = "https://salinasapp.herokuapp.com";
        let url: RequestInfo = "http://localhost:8100";
        url += "/json";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let myJSON: Data = await response.json();
        console.log(myJSON);
    }

}