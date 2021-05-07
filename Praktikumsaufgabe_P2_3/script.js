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
    function array(..._leerArray) {
        let allesZusammen = [];
        let auswahl;
        for (let i = 0; i < _leerArray.length; i++) {
            allesZusammen.push(auswahl[i]);
        }
    }
    console.log(array);
    let klein = create(22, 0, 0);
    let mitte = create(0, 24, 0);
    let groß = create(0, 0, 30);
    function create(_durchmesserKlein, _durchmesserMitte, _durchmesserGroß) {
        let durchmesserWählen = { durchmesserKlein: _durchmesserKlein, durchmesserMitte: _durchmesserMitte, durchmesserGroß: _durchmesserGroß };
        return durchmesserWählen;
    }
    document.getSelection();
    document.getSelection();
})(Praktikumsaufgabe_P2_3 || (Praktikumsaufgabe_P2_3 = {}));
//# sourceMappingURL=script.js.map