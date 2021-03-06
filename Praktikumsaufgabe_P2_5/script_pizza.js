"use strict";
var Praktikumsaufgabe_P2_5;
(function (Praktikumsaufgabe_P2_5) {
    //Aufgabe b)
    //Funktion um Daten über fetch (im Internet) zu laden
    async function communicate(_pURL) {
        let response = await fetch(_pURL);
        console.log("Response:", response);
        let myObject = await response.json();
        aktuelleSeite(myObject);
    }
    communicate("https://monikaho29.github.io/GIS-SoSe-2021/Praktikumsaufgabe_P2_5/data.json");
    //Funktion um die Optionen der Seite, auf welcher man sich aktuell befindet anzuzeigen  
    function aktuelleSeite(_partArray) {
        if (document.querySelector("title").getAttribute("id") == "seite1") { //Welche Seite?
            for (let i = 0; i < _partArray.groesseArray.length; i++) {
                let x = generatePizzaOption(_partArray.groesseArray[i]);
                document.body.appendChild(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite2") {
            for (let i = 0; i < _partArray.sorteArray.length; i++) {
                let x = generatePizzaOption(_partArray.sorteArray[i]);
                document.body.appendChild(x);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "seite3") {
            for (let i = 0; i < _partArray.serviceArray.length; i++) {
                let x = generatePizzaOption(_partArray.serviceArray[i]);
                document.body.appendChild(x);
            }
        }
    }
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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img");
        defaultBild2.src = "Bilder/fragezeichen.png";
        defaultBild2.classList.add("vorschau");
        div.appendChild(defaultBild2);
        let defaultBild3 = document.createElement("img");
        defaultBild3.src = "Bilder/fragezeichen.png";
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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
        let defaultBild2 = document.createElement("img");
        defaultBild2.src = "Bilder/fragezeichen.png";
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
        defaultBild.src = "Bilder/fragezeichen.png";
        defaultBild.classList.add("vorschau");
        div.appendChild(defaultBild);
    }
    //Vorschau Übersicht, alle vorherigen gewählten Optionen (Display Seite)
    //Seite: Bestellübersicht
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
    //Aufgabe c)
    //Funktion um zwischen Daten die im Browsercache gespeichert sind, an einer URL zu verschicken + Rückantwort
    async function sendData(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let antwort = await response.json();
        let display = document.getElementById("display");
        if (antwort.error) {
            display.className = "Error";
            display.innerText = antwort.error;
            display.classList.add("error");
        }
        else {
            display.className = "Message";
            display.innerText = antwort.message;
            display.classList.add("message");
        }
    }
    sendData("https://gis-communication.herokuapp.com");
})(Praktikumsaufgabe_P2_5 || (Praktikumsaufgabe_P2_5 = {}));
//# sourceMappingURL=script_pizza.js.map