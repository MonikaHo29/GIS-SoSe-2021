namespace Praktikumsaufgabe_P2_4 {

    //Aufgabe 3

    //b)
    function generatePizza(_pPizzapart: Pizzapart): HTMLElement {              //allgemeine Funktion um die Pizzagröße zu bestimmen 
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _pPizzapart.image;
        div.appendChild(image);

        let button: HTMLButtonElement = document.createElement("button");
        let buttonText: Text = document.createTextNode(_pPizzapart.option);
        button.appendChild(buttonText);
        button.addEventListener("click", saveLocalstorage);
        button.dataset.option = _pPizzapart.option;
        button.dataset.image = _pPizzapart.image;
        div.appendChild(button);

        return div;
    }

    if (document.querySelector("title").getAttribute("id") == "seite1") {
        for (let i: number = 0; i < myObject.groesseArray.length; i++) {
            let x: HTMLElement = generatePizza(myObject.groesseArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i: number = 0; i < myObject.toppingArray.length; i++) {
            let x: HTMLElement = generatePizza(myObject.toppingArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i: number = 0; i < myObject.serviceArray.length; i++) {
            let x: HTMLElement = generatePizza(myObject.serviceArray[i]);

            document.body.appendChild(x);
        }
    }

    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function saveLocalstorage(_pEvent: MouseEvent): void {

        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("gewaelteGroesse", target.dataset.option);
            localStorage.setItem("gewaelteGroessebild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("gewaelteTopping", target.dataset.option);
            localStorage.setItem("gewaelteToppingbild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("gewaelteService", target.dataset.option);
            localStorage.setItem("gewaelteServicebild", target.dataset.image);
        }
    }

    // Vorschau

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let gewaehlteBeschreibung: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine Auswahl bis jetzt:"); // p-Element befüllen
        div.appendChild(gewaehlteBeschreibung);
        gewaehlteBeschreibung.appendChild(text);

        let gespeicherteGroesse: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteGroesse.src = localStorage.getItem("gewaelteGroessebild"); //bild aufrufen
        div.appendChild(gespeicherteGroesse);
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let gewaehlteBeschreibung: HTMLElement = document.createElement("p"); // p-Element anlegen
        let text: Text = document.createTextNode("Deine Auswahl bis jetzt:"); // p-Element befüllen
        div.appendChild(gewaehlteBeschreibung);
        gewaehlteBeschreibung.appendChild(text);

        let gespeicherteGroesse: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteGroesse.src = localStorage.getItem("gewaelteGroessebild"); //bild aufrufen
        div.appendChild(gespeicherteGroesse);

        let gespeicherteTopping: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteTopping.src = localStorage.getItem("gewaelteToppingbild"); //bild speichern
        div.appendChild(gespeicherteTopping);
    }




    
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let gespeicherteService: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteService.src = localStorage.getItem("gewaelteServicebild"); //bild speichern
        div.appendChild(gespeicherteService);


        let gespeicherteTopping: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteTopping.src = localStorage.getItem("gewaelteToppingbild"); //bild speichern
        div.appendChild(gespeicherteTopping);


        let gespeicherteGroesse: HTMLImageElement = document.createElement("img"); //bild anlegen
        gespeicherteGroesse.src = localStorage.getItem("gewaelteGroessebild"); //bild aufrufen
        div.appendChild(gespeicherteGroesse);
    }


}










