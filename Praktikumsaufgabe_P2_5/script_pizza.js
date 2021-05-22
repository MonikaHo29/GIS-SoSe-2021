"use strict";
var Praktikumsaufgabe_P2_5;
(function (Praktikumsaufgabe_P2_5) {
    //Aufgabe 1
    //allgemeine Funktion um eine Option zur generieren 
    async function generatePizzaOption(_url) {
        let response = await fetch(_url);
        console.log("Response:", response);
        let myObject = await response.json();
        console.log(myObject);
        if (document.querySelector("title").getAttribute("id") == "seite1") { //Welche Seite?
            for (let i = 0; i < myObject.groesseArray.length; i++) {
                let x = myObject.groesseArray[i];
                console.log(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i = 0; i < myObject.sorteArray.length; i++) {
                let x = myObject.sorteArray[i];
                console.log(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i = 0; i < myObject.serviceArray.length; i++) {
                let x = myObject.serviceArray[i];
                console.log(x);
            }
        }
    }
    generatePizzaOption("https://monikaho29.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2_5/data.json");
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
    //Seite: Pizzagröße
    if (document.querySelector("title").getAttribute("id") == "seite1") {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let beschreibung = document.createElement("p");
        let beschreibungText = document.createTextNode("Bisher wurde gewählt:");
        div.appendChild(beschreibung);
        beschreibung.appendChild(beschreibungText);
        let defaultBild = document.createElement("img"); //noch keine Option gewählt
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
        let beschreibungText = document.createTextNode("Bisher wurde gewählt:");
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
        let beschreibungText = document.createTextNode("Bisher wurde gewählt:");
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
    async function displaySeite(_url) {
        let query = new URLSearchParams(saveInlocalStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        console.log(response);
        // Komplette Auswahl anzeigen 
        if (document.querySelector("title").getAttribute("id") == "seite4") {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let saveGroesse = document.createElement("img");
            saveGroesse.src = localStorage.getItem("chooseGroessebild");
            saveGroesse.style.margin = "15px";
            saveGroesse.style.width = "30%";
            div.appendChild(saveGroesse);
            let saveTopping = document.createElement("img");
            saveTopping.src = localStorage.getItem("chooseToppingbild");
            saveTopping.style.margin = "15px";
            saveTopping.style.width = "30%";
            div.appendChild(saveTopping);
            let saveService = document.createElement("img"); // leeres bild anlegen
            saveService.src = localStorage.getItem("chooseServicebild"); // ausgewähltes bild speichern
            saveService.style.margin = "15px";
            saveService.style.width = "30%";
            div.appendChild(saveService);
        }
    }
    displaySeite("https://gis-communication.herokuapp.com");
})(Praktikumsaufgabe_P2_5 || (Praktikumsaufgabe_P2_5 = {}));
//# sourceMappingURL=script_pizza.js.map