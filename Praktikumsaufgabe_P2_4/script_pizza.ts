namespace Praktikumsaufgabe_P2_4 {


    //Aufgabe 1
    //allgemeine Funktion um eine Option zur generieren 

    function generatePizzaOption(_pPizzapart: Pizzapart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _pPizzapart.image;
        image.style.width = "30%";
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


    if (document.querySelector("title").getAttribute("id") == "seite1") {               //Welche Seite?
        for (let i: number = 0; i < myObject.groesseArray.length; i++) {
            let x: HTMLElement = generatePizzaOption(myObject.groesseArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i: number = 0; i < myObject.sorteArray.length; i++) {
            let x: HTMLElement = generatePizzaOption(myObject.sorteArray[i]);

            document.body.appendChild(x);
        }
    }

    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i: number = 0; i < myObject.serviceArray.length; i++) {
            let x: HTMLElement = generatePizzaOption(myObject.serviceArray[i]);

            document.body.appendChild(x);
        }
    }


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
        beschreibung.style.fontSize = "1.5em";
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let defaultBild: HTMLImageElement = document.createElement("img");    //noch keine Option gewählt
        defaultBild.src = "fragezeichen.png";
        defaultBild.style.width = "20%";
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.style.width = "20%";
        div.appendChild(defaultBild2);

        let defaultBild3: HTMLImageElement = document.createElement("img");
        defaultBild3.src = "fragezeichen.png";
        defaultBild3.style.width = "20%";
        div.appendChild(defaultBild3);
    }

    //Seite: Pizzasorte
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let beschreibung: HTMLElement = document.createElement("p");
        let beschreibungText: Text = document.createTextNode("Bisher wurde gewählt:");
        beschreibung.style.fontSize = "1.5em";
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "20%";
        div.appendChild(bildGroesse);

        let defaultBild: HTMLImageElement = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.style.width = "20%";
        div.appendChild(defaultBild);

        let defaultBild2: HTMLImageElement = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.style.width = "20%";
        div.appendChild(defaultBild2);

    }

    //Seite: Service
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let beschreibung: HTMLElement = document.createElement("p");
        let beschreibungText: Text = document.createTextNode("Bisher wurde gewählt:");
        beschreibung.style.fontSize = "1.5em";
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "20%";
        div.appendChild(bildGroesse);

        let bildSorte: HTMLImageElement = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.style.width = "20%";
        div.appendChild(bildSorte);

        let defaultBild: HTMLImageElement = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.style.width = "20%";
        div.appendChild(defaultBild);
    }

    //Aufgabe 2
    //Vorschau Übersicht, alle vorherigen gewählten Optionen 

    //Seite: Bestellübersicht
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let bildGroesse: HTMLImageElement = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "30%";
        div.appendChild(bildGroesse);

        let bildSorte: HTMLImageElement = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.style.width = "30%";
        div.appendChild(bildSorte);

        let bildService: HTMLImageElement = document.createElement("img");
        bildService.src = localStorage.getItem("ausgewaelteServiceBild");
        bildService.style.width = "30%";
        div.appendChild(bildService);
    }

}










