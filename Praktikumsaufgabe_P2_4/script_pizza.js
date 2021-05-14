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
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = Praktikumsaufgabe_P2_4.myObject.groesseArray.toString();
        button.innerText = "Option: " + _pPizzapart.option;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.groesseArray.length; i++) {
        let x = generatePizzapart(Praktikumsaufgabe_P2_4.myObject.groesseArray[i]);
        document.body.appendChild(x);
    }
    localStorage.setItem("image", "pizza_groesse.png");
    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function showDurchmesser(_pEvent) {
        console.log(_pEvent.target);
        let target = _pEvent.target;
        console.log(target.dataset.durchmesser);
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.groesseArray.length; i++) {
            if (Praktikumsaufgabe_P2_4.myObject.groesseArray[i].toString() == target.dataset.durchmesser) {
                console.log(Praktikumsaufgabe_P2_4.myObject.groesseArray[i]);
            }
        }
    }
    function serviceAufrufen() {
        location.assign("./pizza_service.html");
    }
    let serviceButton = document.getElementById("serviceButton");
    serviceButton.addEventListener("click", serviceAufrufen);
    function toppingsAufrufen() {
        location.assign("./pizza_topping.html");
    }
    let toppingButton = document.getElementById("toppingButton");
    toppingButton.addEventListener("click", toppingsAufrufen);
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=script_pizza.js.map