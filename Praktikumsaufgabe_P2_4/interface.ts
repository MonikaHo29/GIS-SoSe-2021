namespace Praktikumsaufgabe_P2_4 {


    //Aufgabe 2a)
    
    export interface Groesse {

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

        groesse: Groesse[];
        zutate: Zutate[];
        bestelloptionen: Bestelloptionen[];
    }
}