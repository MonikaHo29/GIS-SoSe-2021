namespace Praktikumsaufgabe_P2_3 {

    /* Aufgabe 1 - Rechtecke (Buttons sind im Dokument aufgabe_rechteck.html) */

    function rechteckEinfügen(): void {

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);                                             /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 600).toString() + "px";                 /* Rechteck - Css */
        div.style.width = (Math.random() * 500).toString() + "px";
        div.style.backgroundColor = "black";
        div.style.position = "relative";
        div.style.marginLeft = (Math.random() * 100).toString() + "px";
        div.style.marginTop = (Math.random() * 100).toString() + "px";
        div.style.marginRight = (Math.random() * 100).toString() + "px";
        div.style.marginBottom = (Math.random() * 100).toString() + "px";

    }
    for (let i: number = 0; i < 0; i++) {
        rechteckEinfügen();
    }

    function seiteZurücksetzen(_load: Event): void {                                // Buttons
        location.reload();
    }
    document.querySelector("#loadButton").addEventListener("click", seiteZurücksetzen);


    document.querySelector("#addButton").addEventListener("click", rechteckEinfügen);       

}