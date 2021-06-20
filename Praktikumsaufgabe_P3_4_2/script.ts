namespace Praktikumsaufgabe_P3_4_2 {

    interface Data {
        name: string;
        matrikel: number;
        studiengang: string; 
        semester: number; 
        studienbeginn: number; 
    }

    let buttonAbsenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAbsenden"); 
    buttonAbsenden.addEventListener("click", dataSenden);

    let buttonAnzeigen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonAnzeigen"); 
    buttonAnzeigen.addEventListener("click", dataAnzeigen);


    
    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/insert";

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
    }

    

    async function dataAnzeigen(): Promise<void> {
        
        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com";
        //let url: RequestInfo = "http://localhost:8100";
        url += "/show"; 

        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: Data = await response.json();
        console.log(answer);

        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverantwort");
        display.innerHTML = JSON.stringify(answer);
    }


}