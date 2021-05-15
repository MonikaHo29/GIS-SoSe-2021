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
        button.dataset.option = _pPizzapart.option;
        button.dataset.image = _pPizzapart.image;
        button.innerText = "Option: " + _pPizzapart.option;
        div.appendChild(button);

        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        for (let i: number = 0; i < myObject.groesseArray.length; i++) {
            let x: HTMLElement = generatePizzapart(myObject.groesseArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i: number = 0; i < myObject.toppingArray.length; i++) {
            let x: HTMLElement = generatePizzapart(myObject.toppingArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i: number = 0; i < myObject.serviceArray.length; i++) {
            let x: HTMLElement = generatePizzapart(myObject.serviceArray[i]);

            document.body.appendChild(x);
        }


        //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
        function showDurchmesser(_pEvent: MouseEvent): void {

            if (document.querySelector("title").getAttribute("id") == "seite1") {
                let target: HTMLElement = <HTMLElement>_pEvent.target;
                localStorage.setItem("gewaelteGroesse", target.dataset.option);
                localStorage.setItem("gewaelteGroesse", target.dataset.image);
            }

            if (document.querySelector("title").getAttribute("id") == "seite2") {
                let target: HTMLElement = <HTMLElement>_pEvent.target;
                localStorage.setItem("gewaelteTopping", target.dataset.option);
                localStorage.setItem("gewaelteTopping", target.dataset.image);
            }

            if (document.querySelector("title").getAttribute("id") == "seite3") {
                let target: HTMLElement = <HTMLElement>_pEvent.target;
                localStorage.setItem("gewaelteService", target.dataset.option);
                localStorage.setItem("gewaelteService", target.dataset.image);
            }
        }









        function toppingsAufrufen(): void {
            location.assign("./pizza_topping.html");
        }
        let toppingButton: HTMLElement = document.getElementById("toppingButton");
        toppingButton.addEventListener("click", toppingsAufrufen);
    }








