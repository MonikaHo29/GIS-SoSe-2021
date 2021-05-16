"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    //Aufgabe 1
    //allgemeine Funktion um eine Option zur generieren 
    function generatePizzaOption(_pPizzapart) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _pPizzapart.image;
        image.style.width = "30%";
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
    //Vorschau für gewählte Optionen aus den vorherigen Seiten/Schritte
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Deine Auswahl bis jetzt:");
        beschreibung.style.fontSize = "1.5em";
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "20%";
        div.appendChild(bildGroesse);
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Deine Auswahl bis jetzt:");
        beschreibung.style.fontSize = "1.5em";
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "20%";
        div.appendChild(bildGroesse);
        let bildSorte = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.style.width = "20%";
        div.appendChild(bildSorte);
    }
    //Aufgabe 2
    //Vorschau Übersicht, alle vorherigen gewählten Optionen 
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let bildGroesse = document.createElement("img");
        bildGroesse.src = localStorage.getItem("ausgewaelteGroesseBild");
        bildGroesse.style.width = "30%";
        div.appendChild(bildGroesse);
        let bildSorte = document.createElement("img");
        bildSorte.src = localStorage.getItem("ausgewaelteSorteBild");
        bildSorte.style.width = "30%";
        div.appendChild(bildSorte);
        let bildService = document.createElement("img");
        bildService.src = localStorage.getItem("ausgewaelteServiceBild");
        bildService.style.width = "30%";
        div.appendChild(bildService);
    }
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=script_pizza.js.map