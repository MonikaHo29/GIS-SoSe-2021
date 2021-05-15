namespace Praktikumsaufgabe_P2_4 {

    //Aufgabe 3

    //b)
    function generatePizzapart(_pPizzapart: Pizzapart): HTMLElement {              //allgemeine Funktion um die Pizzagröße zu bestimmen 
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _pPizzapart.image;
        div.appendChild(image);

        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.option = myObject.toppingArray.toString();
        button.innerText = "Option: " + _pPizzapart.option;
        div.appendChild(button);

        return div;
    }
    for (let i: number = 0; i < myObject.toppingArray.length; i++) {
        let x: HTMLElement = generatePizzapart(myObject.toppingArray[i]);

        document.body.appendChild(x);
    }
    localStorage.setItem("image", "pizza");



    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function showDurchmesser(_pEvent: MouseEvent): void {


        console.log(_pEvent.target);

        let target: HTMLElement = <HTMLElement>_pEvent.target;
        console.log(target.dataset.durchmesser);


        for (let i: number = 0; i < myObject.toppingArray.length; i++) {

            if (myObject.toppingArray[i].toString() == target.dataset.durchmesser) {
                console.log(myObject.toppingArray[i]);

            }

        }
    }

    function serviceAufrufen(): void {
        location.assign("./pizza_service.html");
    }
    let serviceButton: HTMLElement = document.getElementById("serviceButton");
    serviceButton.addEventListener("click", serviceAufrufen);
}