"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    //Aufgabe 1
    //allgemeine Funktion um eine Option zur generieren 
    function generatePizzaOption(_pPizzapart) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _pPizzapart.image;
        div.appendChild(image);
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_pPizzapart.option);
        button.appendChild(buttonText);
        button.addEventListener("click", saveInlocalStorage);
        button.dataset.option = _pPizzapart.option;
        button.dataset.image = _pPizzapart.image;
        div.appendChild(button);
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "seite1") { //Welche Seite?
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.groesseArray.length; i++) {
            let x = generatePizzaOption(Praktikumsaufgabe_P2_4.myObject.groesseArray[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.sorteArray.length; i++) {
            let x = generatePizzaOption(Praktikumsaufgabe_P2_4.myObject.sorteArray[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.serviceArray.length; i++) {
            let x = generatePizzaOption(Praktikumsaufgabe_P2_4.myObject.serviceArray[i]);
            document.body.appendChild(x);
        }
    }
    //b)
    //Funktion um Auswahl in localStorage zu speichern  
    function saveInlocalStorage(_pEvent) {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target = _pEvent.target;
            localStorage.setItem("ausgewaelteGroesse", target.dataset.option);
            localStorage.setItem("ausgewaelteGroesseBild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target = _pEvent.target;
            localStorage.setItem("ausgewaelteSorte", target.dataset.option);
            localStorage.setItem("ausgewaelteSorteBild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target = _pEvent.target;
            localStorage.setItem("ausgewaelteService", target.dataset.option);
            localStorage.setItem("ausgewaelteServiceBild", target.dataset.image);
        }
    }
    //d)
    //Vorschau f??r gew??hlte Optionen aus den vorherigen Seiten/Schritte
    //Seite: Pizzagr????e
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Bisher wurde gew??hlt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let defaultBild = document.createElement("img"); //noch keine Option gew??hlt
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);
        let defaultBild3 = document.createElement("img");
        defaultBild3.src = "fragezeichen.png";
        defaultBild3.classList.add("vorschau");
        div.appendChild(defaultBild3);
    }
    //Seite: Pizzasorte
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Bisher wurde gew??hlt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.classList.add("vorschau");
        div.appendChild(bildGroesse);
        let defaultBild = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img");
        defaultBild2.src = "fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);
    }
    //Seite: Service
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Bisher wurde gew??hlt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.classList.add("vorschau");
        div.appendChild(bildGroesse);
        let bildSorte = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.classList.add("vorschau");
        div.appendChild(bildSorte);
        let defaultBild = document.createElement("img");
        defaultBild.src = "fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
    }
    //Aufgabe 2
    //Vorschau ??bersicht, alle vorherigen gew??hlten Optionen 
    //Seite: Bestell??bersicht
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        div.appendChild(bildGroesse);
        let bildSorte = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        div.appendChild(bildSorte);
        let bildService = document.createElement("img");
        bildService.src = localStorage.getItem("ausgewaelteServiceBild");
        div.appendChild(bildService);
    }
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=script_pizza.js.map