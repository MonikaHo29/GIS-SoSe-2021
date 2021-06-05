namespace Praktikumsaufgabe_3_2 {
 

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHTML");           //Button um die Daten an den Server zu schicken  
    buttonHTML.addEventListener("click", dataSenden);
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJSON");           //Button um die Daten an den Server zu schicken  
    buttonJSON.addEventListener("click", dataSenden);


    //Funktion um Daten auslesen zu können + asnycron an Server zu schicken 
    async function dataSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);                                   // FormData anlegen (Formular im index) 
        console.log(":" + formData.get("fname"));                                                   // Daten auslesen 

        for (let entry of formData) {                                                        

            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any                                                         // asnycron an Server versenden 
        let query: URLSearchParams = new URLSearchParams(<any>formData);                            // Form Data Objekt generieren                     
        let url: RequestInfo = "https://monikagissose2021.herokuapp.com/";                          

        url = url + "?" + query.toString();
        console.log(url);

        let response: Response = await fetch(url);
        let antwort: string = await response.text();                     

        console.log(antwort);
        let displayRueckgabe: HTMLParagraphElement = <HTMLDivElement>document.getElementById("antwort");
        displayRueckgabe.innerText = antwort;
    }
}

