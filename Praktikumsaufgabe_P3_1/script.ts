namespace Praktikumsaufgabe_P3_1 {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let _url: RequestInfo = "https://dbgissose2021.herokuapp.com/";
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
        displayResponse.innerText = output;
    }
    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    sendButton.addEventListener("click", sendData);
}






    /*

    async function sendDatatoServer(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }

        let url: string = "https://monikagissose2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    document.querySelector("#button").addEventListener("click", sendDatatoServer);
    

*/




    //FUnktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole 
    /*
        async function sendDatatoServer(_pURL: RequestInfo): Promise<void> {
            let response: Response = await fetch(_pURL);
            console.log("Response", response);
            let formData: FormData = await response.formData();
            console.log(formData.get("fname"));
            console.log(formData.get("femail"));
            console.log(formData.get("fbetreff"));
            console.log(formData.get("fdatum"));
            console.log(formData.get("ftextfeld"));
            console.log(formData.get("fdokument"));
            
        }
        sendDatatoServer("https://monikagissose2021.herokuapp.com");
        //Link um Daten an Server zu schicken (Heroku Deploy -> Deploy a GitHub branch
    
        function submitButton(_load: Event): void {                                       
        location.reload();
        }
        document.querySelector("#button").addEventListener("click", submitButton);
    */



