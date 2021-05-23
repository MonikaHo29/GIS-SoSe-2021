namespace Praktikumsaufgabe_P2_5 {


    export interface Pizzapart {
        option: string;
        image: string;
    }


    export interface Pizza {
        groesseArray: Pizzapart[];
        sorteArray: Pizzapart[];
        serviceArray: Pizzapart[];
    }

    export interface ServerAntwort {
        [key: string]: string;                      
    }

}