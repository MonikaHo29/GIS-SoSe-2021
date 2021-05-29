namespace Praktikumsaufgabe_P3_1 {

    //Teilaufgabe 2
    //FUnktion um Anfragen an Server zu schicken + Antwort (vom Server) in der Konsole 

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
    sendDatatoServer("https://testgissose2021.herokuapp.com"); 
    //Link um Daten an Server zu schicken (Heroku Deploy -> Deploy a GitHub branch

}


