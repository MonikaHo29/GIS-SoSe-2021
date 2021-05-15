"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    //Aufgabe 3
    //b)
    function generatePizzapart(_pPizzapart) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _pPizzapart.image;
        div.appendChild(image);
        let button = document.createElement("button");
        let buttonText = document.createTextNode(_pPizzapart.option);
        button.appendChild(buttonText);
        button.addEventListener("click", auswahlSpeichern);
        button.dataset.option = _pPizzapart.option;
        button.dataset.image = _pPizzapart.image;
        div.appendChild(button);
        return div;
    }
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.groesseArray.length; i++) {
            let x = generatePizzapart(Praktikumsaufgabe_P2_4.myObject.groesseArray[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.toppingArray.length; i++) {
            let x = generatePizzapart(Praktikumsaufgabe_P2_4.myObject.toppingArray[i]);
            document.body.appendChild(x);
        }
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.serviceArray.length; i++) {
            let x = generatePizzapart(Praktikumsaufgabe_P2_4.myObject.serviceArray[i]);
            document.body.appendChild(x);
        }
    }
    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function auswahlSpeichern(_pEvent) {
        if (document.querySelector("title").getAttribute("id") == "seite1") {
            let target = _pEvent.target;
            localStorage.setItem("gewaelteGroesse", target.dataset.option);
            localStorage.setItem("gewaelteGroessebild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            let target = _pEvent.target;
            localStorage.setItem("gewaelteTopping", target.dataset.option);
            localStorage.setItem("gewaelteToppingbild", target.dataset.image);
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            let target = _pEvent.target;
            localStorage.setItem("gewaelteService", target.dataset.option);
            localStorage.setItem("gewaelteServicebild", target.dataset.image);
        }
    }
    // Vorschau
    if (document.querySelector("title").getAttribute("id") == "seite2") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let gewaehlteBeschreibung = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine Auswahl bis jetzt:"); // p-Element befüllen
        div.appendChild(gewaehlteBeschreibung);
        gewaehlteBeschreibung.appendChild(text);
        let gespeicherteGroesse = document.createElement("img"); //bild anlegen
        gespeicherteGroesse.src = localStorage.getItem("gewaelteGroessebild"); //bild aufrufen
        div.appendChild(gespeicherteGroesse);
    }
    if (document.querySelector("title").getAttribute("id") == "seite3") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let gewaehlteBeschreibung = document.createElement("p"); // p-Element anlegen
        let text = document.createTextNode("Deine Auswahl bis jetzt:"); // p-Element befüllen
        div.appendChild(gewaehlteBeschreibung);
        gewaehlteBeschreibung.appendChild(text);
        let gespeicherteTopping = document.createElement("img"); //bild anlegen
        gespeicherteTopping.src = localStorage.getItem("gewaelteToppingbild"); //bild speichern
        div.appendChild(gespeicherteTopping);
    }
    if (document.querySelector("title").getAttribute("id") == "seite4") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let gespeicherteService = document.createElement("img"); //bild anlegen
        gespeicherteService.src = localStorage.getItem("gewaelteServicebild"); //bild speichern
        div.appendChild(gespeicherteService);
        let gespeicherteTopping = document.createElement("img"); //bild anlegen
        gespeicherteTopping.src = localStorage.getItem("gewaelteToppingbild"); //bild speichern
        div.appendChild(gespeicherteTopping);
        let gespeicherteGroesse = document.createElement("img"); //bild anlegen
        gespeicherteGroesse.src = localStorage.getItem("gewaelteGroessebild"); //bild aufrufen
        div.appendChild(gespeicherteGroesse);
    }
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=script_pizza.js.map