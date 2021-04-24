"use strict";
/*Praktikumsaufgabe 2.1 Einführung TypeScript*/
/* Aufgabe 1 - Basics*/
/*  a)  Es wird "Alles Klar? Logo!" in der Konsole ausgegeben   */
function a1() {
    let x = "Alles";
    console.log(x);
    func1();
    console.log(x);
    func2();
    console.log(x);
    func3();
}
a1();
function func1() {
    console.log("Gute!");
}
function func2() {
    console.log("klar?");
}
function func3() {
    console.log("Logo!");
}
/*  a)  Zulässige Variablennamen sind können Ziffer, Buchstaben oder Sonderzeichen haben.
        
        Nicht zulässige Variablennamen dürfen nicht mit Ziffer beginnen, keine Leerzeichen oder Bindestrich haben
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
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/* Aufgabe 3 - Fehler erkennen und vermeiden lernen */
/*  a) siehe oben im Code */
/* Aufgabe 4 - Gobal vs Lokal*/
/*
    a)  In der Konsole wird folgendes ausgegeben: "Hallo Bla Hallo Blubb Test Hallo" (untereinander)
        Bei function func2 wird nicht Hallo sondern Blubb ausgegeben, weil func2 eine lokale Variable ist.
        Hier ist die lokale Variable vorrangig und dadurch wird die globale Variable überschireben.
*/
let x = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x); /*Wieso wird diese Zeile nicht ausgegeben*/
function func4(y) {
    y = "Bla";
    console.log(y);
}
function func5() {
    let x = "Blubb";
    console.log(x);
}
function func6() {
    x = "Test";
}
/*
    b)  Globale Variablen sind überall sichtbar und können auch von überall zugegriffen werden.
        Lokale Variablen existieren nur innerhalb einer Funktion.
        Außerdem kann man eine lokale Variable deklarieren, welches die globale Variable überschreiben wird, da es vorrangig ist.
        Jedoch gilt es nur innerhalb dessen Funktion und dannch nicht mehr.
*/
/* Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen*/
//a)
let xa = 8;
let ya = 9;
function multiply(x1, y1) {
    let ergebnis = x1 * y1;
    return ergebnis;
}
console.log(multiply(xa, ya));
//b)
function max(x1, y1) {
    if (x1 > y1) {
        return x1;
    }
    else {
        return y1;
    }
}
console.log(max(xa, ya));
//c)
let i = 1;
let ergebnis = 0;
while (i <= 100) {
    ergebnis += i;
    ++i;
}
console.log(ergebnis);
//d)
let xd = 0;
let yd = 100;
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
for (let i = 0; i < 10; i++) {
    console.log(getRandomArbitrary(xd, yd));
}
//e)
function factorial(fakultät) {
    let faktor = 1;
    let ergebnis = 1;
    do {
        ergebnis = ergebnis * faktor;
        faktor++;
    } while (faktor < fakultät + 1);
    return ergebnis;
}
console.log(factorial(7));
//f)
let anfangsjahr = 1900;
let endjahr = 2021;
leapyear(anfangsjahr, endjahr);
function leapyear(anfang, ende) {
    for (let i = anfang; i < ende + 1; i++) {
        if (i % 100 != 0 && i % 4 == 0 || i % 400 == 0) {
            console.log(i);
        }
    }
}
//6a
let zeichen = " ";
for (let i = 0; i < 7; i++) {
    zeichen = zeichen + "#";
    console.log(zeichen);
}
//6b
for (let i = 1; i < 100; i++) {
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
//# sourceMappingURL=script.js.map