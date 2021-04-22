/*Praktikumsaufgabe zur 2.1 EInführung TypeScript*/


/* Aufgabe 1 - Basics*/

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log(x);
    func2();
    console.log(x);
    func3();
}

a1();

function func1(): void {
    console.log("Gute!");
}

function func2(): void {
    console.log("klar?");
}

function func3(): void {
    console.log("Logo!");
}

/*  a)   Es wird "Alles Klar? Logo!" in der Konsole ausgegeben
        
        zulässige Variablennamen sind mit Ziffer, Buchstaben oder Sonderzeichen
        
        nicht zulässige Variablennamen dürfen nicht mit Ziffer beginnen, keine Leerzeichen od. Bindestrich haben 
        oder Schlüsselwörter wie string, boolean, number etc.

     b) Mit dem Schalter "Schritt darüber" werden nur die Zeile von 4-7 nacheinander durchgeführt. 
        Jedoch überspringt es die Zeilen, indem sich die Funktion befindet
        Mit dem Schalter "Schritt hinein" werden alle Zeilen durchlaufen. Jedoch nicht nach der Reihenfolge.
        --> nach der Zeile 4 springt es in die Funktion a1 zur Zeile 11

    c)  siehe Konsole im Browser
*/



/* Aufgabe 2 - Kontinuierliche Variablenmanipulation*/

/*  
In der FUnktion a2 ist eine Variable i, welches den Anfangswert 9 besitzt. Diese Variable wird im folgenden eine Do-While-Schleife durchlaufen. Vorher  
I wird dabei immer um 1 subtrahiert. Die Schleife läuft solange bis i nicht mehr größer als 0 ist --> while (i > 0). 
In der Konsole wird dann alle Zahlen von 9 bis 1 ausgegeben. Dannach wird das Programm beendet. 
*/


function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();



/* Aufgabe 3 - Fehler erkennen und vermeiden lernen */

/* a) siehe oben im Code */



/* Aufgabe 4 - Gobal vs Lokal*/

