namespace Praktikumsaufgabe_P2_3 {

    //Größen
    export let größen: Größe[] = [];
    größen.push({ durchmesser: 20, image: "pizza_groesse.png" });

    größen.push({ durchmesser: 25, image: "pizza_groesse.png" });

    größen.push({ durchmesser: 30, image: "pizza_groesse.png" });

    //Toppings
    export let toppings: Toppings[] = [];
    toppings.push({ toppings: "salami", image: "bild.jpeg" });

    toppings.push({ toppings: "Mais", image: "bild.jpeg" });

    toppings.push({ toppings: "Champignions", image: "bild.jpeg" });

    //Bestelloption
    export let service: Order[] = [];
    service.push({ service: "Lieferung", image: "bild.jepg" });

    service.push({ service: "Abholung", image: "bild.jepg" });

    service.push({ service: "Vorort", image: "bild.jepg" });

}