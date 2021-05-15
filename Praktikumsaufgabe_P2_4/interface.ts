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


    /*export let allPizzapart: Pizza = {

        groesseArray: [
            { option: "20cm", image: "pizza_klein.png" },
            { option: "25cm", image: "pizza_medium.png" },
            { option: "30cm", image: "pizza_gross.png" }
        ],

        toppingArray: [
            { option: "Salami", image: "salami.jpg" },
            { option: "Mais", image: "mais.jpg" },
            { option: "Champignions", image: "champignions.jpg" }
        ],

        serviceArray: [
            { option: "Lieferung", image: "lieferung.png" },
            { option: "Abholung", image: "abholung.png" },
            { option: "Vorort", image: "vorort.png" }
        ]
    };
    */

}