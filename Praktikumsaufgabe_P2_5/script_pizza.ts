 namespace Praktikumsaufgabe_P2_5 {

    //Aufgabe b)

    //Funktion um Daten über fetch (im Internet) zu laden

    async function communicate(_pURL: RequestInfo): Promise<void> {

        let response: Response = await fetch(_pURL);
        console.log("Response:", response);
        let myObject: Pizza = await response.json();
        aktuelleSeite(myObject);
    }
    communicate("https://monikaho29.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2_5/data.json");


    //Funktion um die Optionen der Seite, auf welcher man sich aktuell befindet anzuzeigen  
    
    function aktuelleSeite (_partArray: Pizza): void {

        if (document.querySelector("title").getAttribute("id") == "seite1") {               //Welche Seite?
            for (let i: number = 0; i < _partArray.groesseArray.length; i++) {
                let x: HTMLElement = generatePizzaOption(_partArray.groesseArray[i]);

                document.body.appendChild(x);
            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i: number = 0; i < _partArray.sorteArray.length; i++) {
                let x: HTMLElement = generatePizzaOption(_partArray.sorteArray[i]);

                document.body.appendChild(x);
            }
        }

        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i: number = 0; i < _partArray.serviceArray.length; i++) {
                let x: HTMLElement = generatePizzaOption(_partArray.serviceArray[i]);

                document.body.appendChild(x);
            }
        }
    }

    
    //allgemeine Funktion um eine Option zur generieren 

    function generatePizzaOption(_pPizzapart: Pizzapart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _pPizzapart.image;
        div.appendChild(image);


        let button: HTMLButtonElement = document.createElement("button");
        let buttonText: Text = document.createTextNode(_pPizzapart.option);
        button.appendChild(buttonText);
        button.addEventListener("click", saveInlocalStorage);
        button.dataset.option = _pPizzapart.option;
        button.dataset.image = _pPizzapart.image;
        div.appendChild(button);

        return div;
    }


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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "Bilder/fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);

        let defaultBild3: HTMLImageElement = document.createElement("img");
        defaultBild3.src = "Bilder/fragezeichen.png";
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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "Bilder/fragezeichen.png";
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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
    }


    //Vorschau Übersicht, alle vorherigen gewählten Optionen (Display Seite)

    //Seite: Bestellübersicht
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        div.appendChild(bildGroesse);

        let bildSorte: HTMLImageElement = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        div.appendChild(bildSorte);

        let bildService: HTMLImageElement = document.createElement("img");
        bildService.src = localStorage.getItem("ausgewaelteServiceBild");
        div.appendChild(bildService);

    }

    //Aufgabe c)

    //Funktion um zwischen Daten die im Browsercache gespeichert sind, an einer URL zu verschicken + Rückantwort
    
    async function sendData(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);

        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let antwort: ServerAntwort = await response.json();
        let display: HTMLDivElement = <HTMLParagraphElement> document.getElementById("display");

        if (antwort.error) {
            display.className = "Error";
            display.innerText = antwort.error;
            display.classList.add ("error");
        }
        else {
            display.className = "Message";
            display.innerText = antwort.message;
            display.classList.add ("message");
        }
    }
    sendData("https://gis-communication.herokuapp.com");

}









