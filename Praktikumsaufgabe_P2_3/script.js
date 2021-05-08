"use strict";
var Praktikumsaufgabe_P2_3;
(function (Praktikumsaufgabe_P2_3) {
    /* Aufgabe 1 */
    function rectangle() {
        let div = document.createElement("div");
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 600).toString() + "px";
        div.style.width = (Math.random() * 500).toString() + "px";
        div.style.backgroundColor = "black";
        div.style.position = "relative";
        div.style.marginLeft = (Math.random() * 100).toString() + "px";
        div.style.marginTop = (Math.random() * 100).toString() + "px";
        div.style.marginRight = (Math.random() * 100).toString() + "px";
        div.style.marginBottom = (Math.random() * 100).toString() + "px";
    }
    for (let i = 0; i < 0; i++) {
        rectangle();
    }
    function seiteZurücksetzen(_load) {
        location.reload();
    }
    document.querySelector("#loadButton").addEventListener("click", seiteZurücksetzen);
    document.querySelector("#addButton").addEventListener("click", rectangle);
    /* Aufgabe 2 */
    //a)
    //Aufgabe 2
    function chooseSize() {
        let imageSmall = document.createElement("img");
        imageSmall.src = Praktikumsaufgabe_P2_3.größen[0].image;
        document.querySelector("#small").addEventListener("click", chooseSize);
        let imageMedium = document.createElement("img");
        imageMedium.src = Praktikumsaufgabe_P2_3.größen[1].image;
        document.querySelector("#medium").addEventListener("click", chooseSize);
        let imageLarge = document.createElement("img");
        imageLarge.src = Praktikumsaufgabe_P2_3.größen[2].image;
        document.querySelector("#large").addEventListener("click", chooseSize);
    }
    console.log(Praktikumsaufgabe_P2_3.größen[0]);
    console.log(Praktikumsaufgabe_P2_3.größen[1]);
    console.log(Praktikumsaufgabe_P2_3.größen[2]);
    for (let i = 0; i < Praktikumsaufgabe_P2_3.größen.length; i++) {
        chooseSize();
    }
})(Praktikumsaufgabe_P2_3 || (Praktikumsaufgabe_P2_3 = {}));
//# sourceMappingURL=script.js.map