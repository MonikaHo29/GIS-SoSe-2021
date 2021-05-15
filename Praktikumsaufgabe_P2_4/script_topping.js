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
        button.dataset.option = Praktikumsaufgabe_P2_4.myObject.toppingArray.toString();
        button.innerText = "Option: " + _pPizzapart.option;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.toppingArray.length; i++) {
        let x = generatePizzapart(Praktikumsaufgabe_P2_4.myObject.toppingArray[i]);
        document.body.appendChild(x);
    }
    localStorage.setItem("image", "pizza");
    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function showDurchmesser(_pEvent) {
        console.log(_pEvent.target);
        let target = _pEvent.target;
        console.log(target.dataset.durchmesser);
        for (let i = 0; i < Praktikumsaufgabe_P2_4.myObject.toppingArray.length; i++) {
            if (Praktikumsaufgabe_P2_4.myObject.toppingArray[i].toString() == target.dataset.durchmesser) {
                console.log(Praktikumsaufgabe_P2_4.myObject.toppingArray[i]);
            }
        }
    }
    function serviceAufrufen() {
        location.assign("./pizza_service.html");
    }
    let serviceButton = document.getElementById("serviceButton");
    serviceButton.addEventListener("click", serviceAufrufen);
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=script_topping.js.map