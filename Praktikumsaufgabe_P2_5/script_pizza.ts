 namespace Praktikumsaufgabe_P2_5 {

    //Aufgabe 1
    //allgemeine Funktion um eine Option zur generieren 

    async function generatePizzaOption(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        console.log("Response:", response);
        let myObject: Pizza = await response.json();
        console.log(myObject);

        if (document.querySelector("title").getAttribute("id") == "seite1") {               //Welche Seite?
            for (let i: number = 0; i < myObject.groesseArray.length; i++) {
                let x: Pizzapart = myObject.groesseArray[i];

                console.log(x);
            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i: number = 0; i < myObject.sorteArray.length; i++) {
                let x: Pizzapart = myObject.sorteArray[i];

                console.log(x);
            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i: number = 0; i < myObject.serviceArray.length; i++) {
                let x: Pizzapart = myObject.serviceArray[i];

                console.log(x);
            }
        }

    }
    generatePizzaOption("https://monikaho29.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2_5/data.json");





    //b)
    //Funktion um Auswahl in localStorage zu speichern  

    function saveInlocalStorage(_pEvent: MouseEvent): void {

        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("ausgewaelteGroesse", target.dataset.option);
            localStorage.setItem("ausgewaelteGroesseBild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("ausgewaelteSorte", target.dataset.option);
            localStorage.setItem("ausgewaelteSorteBild", target.dataset.image);
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target: HTMLElement = <HTMLElement>_pEvent.target;
            localStorage.setItem("ausgewaelteService", target.dataset.option);
            localStorage.setItem("ausgewaelteServiceBild", target.dataset.image);
        }

    }
    
    //d)
    //Vorschau für gewählte Optionen aus den vorherigen Seiten/Schritte

    //Seite: Pizzagröße
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let beschreibung: HTMLElement = document.createElement("p");
        let beschreibungText: Text = document.createTextNode("Bisher wurde gewählt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let defaultBild: HTMLImageElement = document.createElement("img");    //noch keine Option gewählt
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);

        let defaultBild3: HTMLImageElement = document.createElement("img");
        defaultBild3.src = "fragezeichen.png";
        defaultBild3.classList.add("vorschau");
        div.appendChild(defaultBild3);
    }

    //Seite: Pizzasorte
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let beschreibung: HTMLElement = document.createElement("p");
        let beschreibungText: Text = document.createTextNode("Bisher wurde gewählt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.classList.add("vorschau");
        div.appendChild(bildGroesse);

        let defaultBild: HTMLImageElement = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);

    }

    //Seite: Service
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let beschreibung: HTMLElement = document.createElement("p");
        let beschreibungText: Text = document.createTextNode("Bisher wurde gewählt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.classList.add("vorschau");
        div.appendChild(bildGroesse);

        let bildSorte: HTMLImageElement = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.classList.add("vorschau");
        div.appendChild(bildSorte);

        let defaultBild: HTMLImageElement = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
    }

    async function displaySeite(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>saveInlocalStorage);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        console.log(response);

         // Komplette Auswahl anzeigen 
        if (document.querySelector("title").getAttribute("id") == "seite4") {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
    
            let saveGroesse: HTMLImageElement = document.createElement("img");
            saveGroesse.src = localStorage.getItem("chooseGroessebild");
            saveGroesse.style.margin = "15px";
            saveGroesse.style.width = "30%";
    
            div.appendChild(saveGroesse);
    
            let saveTopping: HTMLImageElement = document.createElement("img");
            saveTopping.src = localStorage.getItem("chooseToppingbild");
            saveTopping.style.margin = "15px";
            saveTopping.style.width = "30%";
    
            div.appendChild(saveTopping);
    
            let saveService: HTMLImageElement = document.createElement("img"); // leeres bild anlegen
            saveService.src = localStorage.getItem("chooseServicebild"); // ausgewähltes bild speichern
            saveService.style.margin = "15px";
            saveService.style.width = "30%";
    
            div.appendChild(saveService);
        }
    }
    displaySeite("https://gis-communication.herokuapp.com");
}








