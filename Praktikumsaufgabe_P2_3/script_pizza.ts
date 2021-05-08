namespace Praktikumsaufgabe_P2_3 {

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







