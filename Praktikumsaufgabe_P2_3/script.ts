namespace Praktikumsaufgabe_P2_3 {

    /* Aufgabe 1 */

    function rectangle(): void {

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);                                             /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 600).toString() + "px";
        div.style.width = (Math.random() * 500).toString() + "px";
        div.style.backgroundColor = "black";
        div.style.position = "relative";
        div.style.marginLeft = (Math.random() * 100).toString() + "px";
        div.style.marginTop = (Math.random() * 100).toString() + "px";
        div.style.marginRight = (Math.random() * 100).toString() + "px";
        div.style.marginBottom = (Math.random() * 100).toString() + "px";

    }

    for (let i: number = 0; i < 0; i++) {
        rectangle();
    }

    function seiteZurücksetzen(_load: Event): void {
        location.reload();
    }
    document.querySelector("#loadButton").addEventListener("click", seiteZurücksetzen);


    document.querySelector("#addButton").addEventListener("click", rectangle);

    /* Aufgabe 2 */

    //a)

    function array(..._leerArray: string[]): void {   //string Rückgabe?

        let allesZusammen: string[] = [];
        let auswahl: string;
        for (let i: number = 0; i < _leerArray.length; i++) {
            allesZusammen.push(auswahl[i]);
        }
    }
    console.log(array);


    interface Größe {

        durchmesserKlein: number;
        durchmesserMitte: number;
        durchmesserGroß: number;
    }

    let klein: Größe = create(22, 0, 0);
    let mitte: Größe = create(0, 24, 0);
    let groß: Größe = create(0, 0, 30);

    function create(_durchmesserKlein: number, _durchmesserMitte: number, _durchmesserGroß: number): Größe {
        let durchmesserWählen: Größe = {durchmesserKlein: _durchmesserKlein, durchmesserMitte: _durchmesserMitte, durchmesserGroß: _durchmesserGroß};
        return durchmesserWählen;
    }


    /*interface Größe {

        klein: string;
        mittel: string;
        groß: string;

    }
    array();
    document.getSelection();
    document.querySelector("#saveKlein").addEventListener("click", getSelection);
    */


    interface Toppings {

        mozzarella: string;
        mais: string;
        salami: string;
        champignions: string;
        ruccola: string;

    }
    document.getSelection();

    interface Service {

        lieferung: string;
        abholung: string;
        vorort: string;

    }
    document.getSelection();





}







