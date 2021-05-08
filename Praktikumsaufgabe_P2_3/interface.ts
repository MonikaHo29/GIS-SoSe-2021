namespace Praktikumsaufgabe_P2_3 {


    //Aufgabe 2a

    export interface Größe {

        durchmesser: number;
        image: string;

    }
    export interface Toppings {

        toppings: string;
        image: string;


    }
    export interface Order {

        service: string;
        image: string;

    }
    export interface Pizza {     //2b) wird erst nächste Woche gebraucht
        größe: Größe;
        toppings: Toppings;
        order: Order;
    }
}