namespace Praktikumsaufgabe_P2_4 {

    // Aufgabe 1

    //a)

    let pizzaObject = JSON.parse(partsJSON);


    function convertObject(): HTMLElement {

        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = pizzaObject.bild;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.durchmesser = pizzaObject.durchmesser.toString();
        button.innerText = "Durchmesser: " + pizzaObject.durchmesser;
        div.appendChild(button);

        return div;
    }
    convertObject();


    function showDurchmesser(_event: MouseEvent): void {


        console.log(_event.target);

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.dataset.durchmesser);


        for (let i: number = 0; i < pizzaObject.length; i++) {

            if (pizzaObject[i] == target.dataset.durchmesser) {
                console.log(pizzaObject[i]);

            }

        }
    }

}







    /*function convertObject(): HTMLElement {
        //let myObject: string = JSON.parse(partsJSON);
        //document.getElementsByName("durchmesser").innerHTML = myObject.durchmesser.toString();

        let div: HTMLDivElement = document.createElement("div");
     
        let umfang: Pizza = JSON.parse(partsJSON);
        document.getElementsByName("durchmesser");

        return div;

    }
    for (let i: number = 0; i < partsJSON.length; i++) {
        let x: HTMLElement = convertObject([i]);

        document.body.appendChild(x);
    }

    // function datenKonvertieren(): HTMLDocument {
    //     let myJSON1: string = ``{"durchmesser": "20", "image": "pizza_groesse.png"};
    //     let größe1: Größe = JSON.parse(myJSON1);
    //     document.getElementById("small").innerHTML = größe1.durchmesser;

    //     let myJSON2: string = {"durchmesser": "25", "image": "pizza_groesse.png"};
    //     let größe2: Größe = JSON.parse(myJSON2);
    //     document.getElementById("medium").innerHTML = größe2.durchmesser;

    //     return ; 
    // }
    // datenKonvertieren();












    /*function generateSizeElement(_größe: Pizzagröße): HTMLElement {              //allgemeine Funktion um die Pizzagröße zu bestimmen 
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _größe.bild;
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
*/





