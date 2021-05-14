namespace Praktikumsaufgabe_P2_4 {



    export interface Pizzapart {
        option: string;
        image: string;
    }


    export interface Pizza {

        groesseArray: Pizzapart[];
        toppingArray: Pizzapart[];
        serviceArray: Pizzapart[];
    }


    export let allPizzapart: Pizza = {

        groesseArray: [
            { option: "20cm", image: "pizza_groesse.png" },
            { option: "25cm", image: "pizza_groesse.png" },
            { option: "30cm", image: "pizza_groesse.png" }
        ],

        toppingArray: [
            { option: "Salami", image: "salami.png" },
            { option: "Mais", image: "mais.png" },
            { option: "Champignions", image: "champignions.png" }
        ],

        serviceArray: [
            { option: "Lieferung", image: "lieferung.png" },
            { option: "Abholung", image: "abholung.png" },
            { option: "Vorort", image: "vorort.png" }
        ]
    };



    /*
    //Aufgabe 2a)
    
    export interface Pizzagröße {

        durchmesser: number;
        bild: string;
    }

    export interface Zutate {

        zutate: string;
        bild: string;
    }

    export interface Bestelloptionen {

        service: string;
        bild: string;

    }
    
    
    export interface Pizza {     //2b) --> wird erst nächste Woche gebraucht

        pizzagröße: Pizzagröße;
        zutate: Zutate;
        bestelloptionen: Bestelloptionen;
    }
    */
}