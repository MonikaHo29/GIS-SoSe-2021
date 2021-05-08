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

    //Aufgabe 3

    //b)
    function generateSizeElement(_größe: Größe): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _größe.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = _größe.durchmesser.toString();
        button.innerText = "Durchmesser: " + _größe.durchmesser;
        div.appendChild(button);

        return div;
    }
    for (let i: number = 0; i < größen.length; i++) {
        let x: HTMLElement = generateSizeElement(größen[i]);

        document.body.appendChild(x);
    }

    //c)
    function showDurchmesser(_event: MouseEvent): void {


        console.log(_event.target);

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.dataset.durchmesser);



        for (let i: number = 0; i < größen.length; i++) {

            if (größen[i].durchmesser.toString() == target.dataset.durchmesser) {
                console.log(größen[i]);

            }

        }
    }
}







