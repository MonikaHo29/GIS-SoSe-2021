namespace Praktikumsaufgabe_P2_3 {

    
    //Aufgabe 2c)

    //Größen
    export let größen: Pizzagröße[] = [];

    größen.push({ durchmesser: 20, bild: "pizza_groesse.png" });

    größen.push({ durchmesser: 25, bild: "pizza_groesse.png" });

    größen.push({ durchmesser: 30, bild: "pizza_groesse.png" });


    //Toppings                                                      // die zwei Unterseiten sollen erst nächste Woche erstellt werden 
    export let belag: Zutate[] = [];

    belag.push({ zutate: "salami", bild: "bild.png" });

    belag.push({ zutate: "Mais", bild: "bild.png" });

    belag.push({ zutate: "Champignions", bild: "bild.png" });


    //Bestelloptionen
    export let service: Bestelloptionen[] = [];

    service.push({ service: "Lieferung", bild: "bild.png" });

    service.push({ service: "Abholung", bild: "bild.png" });

    service.push({ service: "Vorort", bild: "bild.png" });

}