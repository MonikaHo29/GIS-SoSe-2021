 namespace Praktikumsaufgabe_3_1 {
     
    //Funktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole
    // !Anmerkung: Funktion funktioniert nicht, ich weißt nicht wo der Fehler ist 

    async function sendDatatoServer(_pURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_pURL);
        console.log("Response", response);
        let formData: FormData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("femail"));
        console.log(formData.get("fbetreff"));
        console.log(formData.get("fdatum"));
        console.log(formData.get("ftextfeld"));
    }
    sendDatatoServer("https://monikagissose2021.herokuapp.com");

    function submitButton(_load: Event): void {
        location.reload();
    }
    document.querySelector("button").addEventListener("click", submitButton);
 }


