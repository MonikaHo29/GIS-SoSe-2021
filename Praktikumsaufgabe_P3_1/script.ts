namespace Praktikumsaufgabe_P3_1 {

    async function formData(_pURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_pURL);
        console.log("Response", response);
        let formData: FormData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("fwohnort"));

    }
    formData(""); //Link App und Github


    function handleSubmit(_pSubmit: Event): void {
        console.log(_pSubmit.target);
    }
    document.querySelector("#submitButton").addEventListener("click", handleSubmit);


}


