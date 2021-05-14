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
        button.dataset.durchmesser = myObject.groesseArray.toString();
        button.innerText = "Option: " + _pPizzapart.option;
        div.appendChild(button);

        return div;
    }
    for (let i: number = 0; i < myObject.groesseArray.length; i++) {
        let x: HTMLElement = generatePizzapart(myObject.groesseArray[i]);

        document.body.appendChild(x);
    }
    localStorage.setItem("image", "pizza_groesse.png");



    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function showDurchmesser(_pEvent: MouseEvent): void {


        console.log(_pEvent.target);

        let target: HTMLElement = <HTMLElement>_pEvent.target;
        console.log(target.dataset.durchmesser);


        for (let i: number = 0; i < myObject.groesseArray.length; i++) {

            if (myObject.groesseArray[i].toString() == target.dataset.durchmesser) {
                console.log(myObject.groesseArray[i]);

            }

        }
    }
    
    function serviceAufrufen(): void {
        location.assign("./pizza_service.html");
    }
    let serviceButton: HTMLElement = document.getElementById("serviceButton");
    serviceButton.addEventListener("click", serviceAufrufen);

    function toppingsAufrufen(): void {
        location.assign("./pizza_topping.html");
    }
    let toppingButton: HTMLElement = document.getElementById("toppingButton");
    toppingButton.addEventListener("click", toppingsAufrufen);
}







