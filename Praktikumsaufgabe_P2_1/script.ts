namespace Praktikumsaufgabe_2_2{

/* Praktikumsaufgabe 2.1 Einführung TypeScript */

// Aufgabe 1 - Basics

//  a)  In der Konsole wird "Alles Klar? Logo!" ausgegeben  

/* function a$(): void {
    let x.1: string = "Alles";
    console.log(x);
    func0();
    console.log("Logo!");
}

a1();

function func 0(): void {
    console.log("Klar?");
} 
*/
/*  a)  Zulässige Variablennamen können Ziffer, Buchstaben oder Sonderzeichen haben. -> z.B. a$
        
        Nicht zulässige Variablennamen dürfen keine Leerzeichen, Bindestrich und Punkte haben, nicht mit einem Ziffer beginnen 
        oder als string, boolean, number, etc. heißen.

    b)  Mit der Schaltfläche "Schritt darüber", wird der Debugger alle Zeile durchlaufen. Jedoch wird die innere Funktion nicht aufgerufen,
        sondern springt zur nächste Funktion.

        Mit der Schaltfläche "Schritt hinein", wird der Debugger alle Zeile nacheinander durchlaufen mit der innere Funktion.  

*/

//c) 

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



/* Aufgabe 2 - Kontinuierliche Variablenmanipulation */

/*  
In der Funktion a2 durchläuft die Varibale i eine Do-While-Schleife. ES werden alle Zahlen von 9 bis 1 in der Konsole 
ausgegeben. Die Variable i verändert sich nach jeder Ausgabe, denn es wird immer um 1 subtrahiert. Die Anweisung der Schleife wird 
so lange ausgeführt bzw. wiederholt bis i nicht mehr größer als null ist (siehe Bedingung in der While Schleife).  

*/


function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}

a2();



/* Aufgabe 3 - Fehler erkennen und vermeiden lernen */

/* a)

function a3(): void {                       //A1
    let x: string = "Alles";
    console.log();
    func4();
    console.log("Logo!");
}

a3();

function func4(): number {
    console.log("Klar?");
}



function a3a(): void {                       //A2
    let i = 9;

    do {
        console.log(i);
        i = i - 1;
        while (i > 0);
    }
}

a2();

    Ja, durch die Fehlermeldungen wird es angezeigt, was der Fehler ist. 
    Wenn man mit Maus über die Fehler drüber bewegt erscheint eine Meldung, wie man es beheben kann. 

*/

//b) ---> Code von eine Kommilitonin

/*  function g1(): void {
        let a: string = "Alles"; 
        console.log(a);
        funktion1(); 
        console.log("Logo!"); 
    }

    g1();

    function funktion2(): void {   --> Fehler! Der Variablename von Funktion g1 stimmt nicht. Es muss function function1 heißen. (siehe Zeile 120)     
        console.log("Klar?");
    }

    //A2
    function funktion2(): void {
        console.log("Alles Klar?");
    }

    function d2(): number {        --> Fehler! Rückgabetyp ist falsch. Es musst void sein, da die Funktion nichts in der Konsole ausgegebn wird. 
        let i: number = 9;


        do {
            console.log(i);
            i = i - 1;
        } while ( i > 0);
    }

    d2(); 

/* Aufgabe 4 - Gobal vs Lokal*/

//  a)  In der Konsole wird folgendes ausgegeben: "Hallo Bla Hallo Blubb Test Hallo" 


let x: string = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x); //Wieso wird diese Zeile nicht ausgegeben?

function func4(y: string): void {
    y = "Bla";
    console.log(y);
}

function func5(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func6(): void {
    x = "Test";
}

/*
    b)  Die Variablen haben verschiednene Geltungsbereiche und dadurch werden sie unterschiedlich aufgerufen. Variablen  
        die außerhalb einer Funktion stehen, nennt man globale Variablen. Sie können überall im Programm aufgerufen und verwendet werden.
        Hingegen werden lokale Variablen nur innerhalb einer Funktion deklariert und können nur innerhalb einer FUnktion aufgerufen 
        werden. Die Übergabeparameter verwendet man um eine Funktion aufzurufen. Sie werden zwischen () defniert.

        Variablen dienen als Platzhalter, damit man bestimmte Werte zuweisen kann. Mit Funktionen kann man verschiedene Anweisungen 
        durchführen wie z.B. mit Kontrollstrukturen. Außerdem kann man Funktionen im Programm wiederverwenden, indem man den Namen 
        der Funktion aufruft. Sowohl Variablen als auch FUnktionen, werden mit einem Namen und Typ deklariert. 
*/


/* Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen*/

// a)
let xa: number = 8;
let ya: number = 9;

function multiply(x1: number, y1: number): number {
    let ergebnis: number = x1 * y1;
    return ergebnis;
}

console.log(multiply(xa, ya));


// b)
function max(x1: number, y1: number): number {
    if (x1 > y1) {
        return x1;
    } else {
        return y1;
    }
}
console.log(max(xa, ya));


//c)
let i: number = 1;
let ergebnis: number = 0;
while (i <= 100) {

    ergebnis += i;
    ++i;
}

console.log(ergebnis);


//d)
let xd: number = 0;
let yd: number = 100;

function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

for (let i: number = 0; i < 10; i++) {
    console.log(getRandomArbitrary(xd, yd));
}


//e)
function factorial(fakultät: number): number {

    let faktor: number = 1;
    let ergebnis: number = 1;

    do {
        ergebnis = ergebnis * faktor;
        faktor++;
    }
    while (faktor < fakultät + 1);
    return ergebnis;
}
console.log(factorial(7));


//f)
let anfangsjahr: number = 1900;
let endjahr: number = 2021;
leapyear(anfangsjahr, endjahr);

function leapyear(anfang: number, ende: number): void {

    for (let i: number = anfang; i < ende + 1; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }

}

/* Aufgabe 6 - Mehr Schleifen und Funktionen */

//a)
let zeichen: string = " ";

for (let i: number = 0; i < 7; i++) {
    zeichen = zeichen + "#";
    console.log(zeichen);
}

//b
for (let i: number = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//c
for (let i: number = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else {
        console.log(i);
    }
}

//d)
let zeichen1: string = "#";
schachbrett();

function schachbrett(): void {
    for (let i: number = 0; i < 8; i++) {
        if (i % 2 == 0) {
            console.log(" " + zeichen1 + " " + zeichen1 + " " + zeichen1 + " " + zeichen1 + "\n");
        }
        else {
            console.log(zeichen1 + " " + zeichen1 + " " + zeichen1 + " " + zeichen1 + "\n");
        }
    }
}

//e) 

let hashtag: string = "#";
let leer: string = " ";
let schachbrett1: string = "";

function schachbrett2(seitenlänge: number): void {

    for (let i: number = 0; i < seitenlänge; i++) {

        if (i % 2 == 0) {
            for (let i: number = 0; i < seitenlänge / 2; i++) {
                schachbrett1 = schachbrett1 + leer;
                schachbrett1 += hashtag;
            }
        }
        else {
            for (let i: number = 0; i < seitenlänge / 2; i++) {
                schachbrett1 += hashtag;
                schachbrett1 = schachbrett1 + leer;
            }
            }
        schachbrett1 = schachbrett1 + "\n";
    }
    console.log(schachbrett1);
}
schachbrett2(5);

}