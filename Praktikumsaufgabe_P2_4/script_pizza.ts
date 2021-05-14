namespace Praktikumsaufgabe_P2_4 {

    // Aufgabe 1

    //a)

    function generatePizzateil(_teil: Pizzateil): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        let image: HTMLImageElement = document.createElement("img");
        image.src = _teil.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showDurchmesser);
        button.dataset.option = myObj.groesse.toString();
        button.innerText = "option: " + _teil.option;
        div.appendChild(button);

        return div;
    }
    for (let i: number = 0; i < myObj.groesse.length; i++) {
        let x: HTMLElement = generatePizzateil(myObj.groesse[i]);

        document.getElementById("anhängen").appendChild(x);
    }

    for (let i: number = 0; i < myObj.toppings.length; i++) {
        let y: HTMLElement = generatePizzateil(myObj.toppings[i]);
        document.getElementById("anhängen2").appendChild(y);


    }
    for (let i: number = 0; i < myObj.service.length; i++) {
        let x: HTMLElement = generatePizzateil(myObj.service[i]);

        document.getElementById("anhängen3").appendChild(x);
    }


    function showDurchmesser(_event: MouseEvent): void {
        console.log(_event.target);

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.dataset.option);

        for (let i: number = 0; i < myObj.groesse.length; i++) {
            if (myObj.groesse[i].toString() == target.dataset.option) {
                console.log(myObj.groesse[i]);
            }
        }
    }
























    /*
        //let myJSON: string = '{"durchmesser": 20, "image": "pizza_groesse.png"}';
        //let myPizzaObject: groesse = JSON.parse("durchmesser": 20, "image": "pizza_groesse.png"); 
        
        export let pizzaObject: string = JSON.parse(partsJSON);
    
        function convertObject(): HTMLElement {
    
            let div: HTMLDivElement = document.createElement("div");
            let button: HTMLButtonElement = document.createElement("button");
            button.addEventListener("click", showDurchmesser);
            button.innerText = "Durchmesser: " + pizzaObject.durchmesser;
            div.appendChild(button);
    
            return div;
    
    
        }
    
        for (let i: number = 0; i < "groesse".length; i++) {
    
            document.getElementsByName("durchmesser");
            document.getElementsByTagName("image");
        }
        convertObject();
    
    
        /*    let div: HTMLDivElement = document.createElement("div");
    
            let image: HTMLImageElement = document.createElement("img");
            image.src = _pizzaObject.image;
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
        //     let groesse1: groesse = JSON.parse(myJSON1);
        //     document.getElementById("small").innerHTML = groesse1.durchmesser;
    
        //     let myJSON2: string = {"durchmesser": "25", "image": "pizza_groesse.png"};
        //     let groesse2: groesse = JSON.parse(myJSON2);
        //     document.getElementById("medium").innerHTML = groesse2.durchmesser;
    
        //     return ; 
        // }
        // datenKonvertieren();
    
    
    
    
    
    
    
    
    
    
    
    
        /*function generateSizeElement(_groesse: Pizzagroesse): HTMLElement {              //allgemeine Funktion um die Pizzagroesse zu bestimmen 
            let div: HTMLDivElement = document.createElement("div");
    
            let image: HTMLImageElement = document.createElement("img");
            image.src = _groesse.bild;
            div.appendChild(image);
            let button: HTMLButtonElement = document.createElement("button");
            button.addEventListener("click", showDurchmesser);
            button.dataset.durchmesser = _groesse.durchmesser.toString();
            button.innerText = "Durchmesser: " + _groesse.durchmesser;
            div.appendChild(button);
    
            return div;
        }
        for (let i: number = 0; i < groessen.length; i++) {
            let x: HTMLElement = generateSizeElement(groessen[i]);
    
            document.body.appendChild(x);
        }
    */




}
