namespace Praktikumsaufgabe_3_1 {

    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole
    // !Anmerkung: Funktion funktioniert nicht, ich weißt nicht wo der Fehler oder ob die Funktion so richtig ist. 

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");          //Button erstellen und mit der Funktion dataSenden 
    button.addEventListener("click", dataSenden);


    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);                                   // FormData anlegen + Formular im index 
        console.log(":" + formData.get("fname"));

        for (let entry of formData) {                                                               // 

            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        let query: URLSearchParams = new URLSearchParams(<any>formData);                            //
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";

        url = url + "?" + query.toString();
        console.log(url);


        let response: Response = await fetch(url);
        let answer: string = await response.text();

        console.log(answer);
    }
}
