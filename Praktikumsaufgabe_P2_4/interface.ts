namespace Praktikumsaufgabe_P2_4 {


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
}