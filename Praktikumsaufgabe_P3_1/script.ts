namespace Praktikumsaufgabe_3_1 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", dataSenden);

    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        console.log(":" + formData.get("fname"));

        for (let entry of formData) {
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "";

        url = url + "?" + query.toString();
        console.log(url);

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        console.log(answer);
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("answer");
        display.innerText = answer;
    }
}