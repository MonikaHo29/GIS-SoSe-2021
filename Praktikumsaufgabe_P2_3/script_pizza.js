"use strict";
var Praktikumsaufgabe_P2_3;
(function (Praktikumsaufgabe_P2_3) {
    //Aufgabe 3
    //b)
    function generateSizeElement(_größe) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = _größe.bild;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = _größe.durchmesser.toString();
        button.innerText = "Durchmesser: " + _größe.durchmesser;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < Praktikumsaufgabe_P2_3.pizzagröße.length; i++) {
        let x = generateSizeElement(Praktikumsaufgabe_P2_3.pizzagröße[i]);
        document.body.appendChild(x);
    }
    //c)                                                                    //Funktion um gespeicherte Auswahl in Konsole auszugeben 
    function showDurchmesser(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.durchmesser);
        for (let i = 0; i < Praktikumsaufgabe_P2_3.pizzagröße.length; i++) {
            if (Praktikumsaufgabe_P2_3.pizzagröße[i].durchmesser.toString() == target.dataset.durchmesser) {
                console.log(Praktikumsaufgabe_P2_3.pizzagröße[i]);
            }
        }
    }
})(Praktikumsaufgabe_P2_3 || (Praktikumsaufgabe_P2_3 = {}));
//# sourceMappingURL=script_pizza.js.map