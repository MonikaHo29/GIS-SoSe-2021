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

    //Aufgabe 2

    function chooseSize(): void {
        let imageSmall: HTMLImageElement = document.createElement("img");
        imageSmall.src = größen[0].image;
        document.querySelector("#small").addEventListener("click", chooseSize);

        let imageMedium: HTMLImageElement = document.createElement("img");
        imageMedium.src = größen[1].image;
        document.querySelector("#medium").addEventListener("click", chooseSize);

        let imageLarge: HTMLImageElement = document.createElement("img");
        imageLarge.src = größen[2].image;
        document.querySelector("#large").addEventListener("click", chooseSize);

    } 
    console.log(größen[0]);
    console.log(größen[1]);
    console.log(größen[2]);
   

    for (let i: number = 0; i < größen.length; i++) {
        chooseSize();
    }
}







