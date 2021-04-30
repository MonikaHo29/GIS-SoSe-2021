"use strict";
var Praktikumsaufgabe_2_2;
(function (Praktikumsaufgabe_2_2) {
    /* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben*/
    // a)
    let xa = 5;
    let ya = 9;
    function min(x1, y1) {
        if (x1 < y1) {
            return x1;
        }
        else {
            return y1;
        }
    }
    console.log(min(xa, ya));
})(Praktikumsaufgabe_2_2 || (Praktikumsaufgabe_2_2 = {}));
let s1 = erschaffeStudent("Monika", "Ho", 21, 42264);
let s2 = erschaffeStudent("Timo", "Werner", 26, 56335);
let s3 = erschaffeStudent("Hanna", "Hanz", 22, 46945);
console.log(s1.vorname);
console.log(s2.alter);
console.log(s3.nachname);
function erschaffeStudent(_vorname, _nachname, _alter, _matrikelnummer) {
    let s = { vorname: _vorname, nachname: _nachname, alter: _alter, matrikelnummer: _matrikelnummer };
    return s;
}
let studentenArray = [];
studentenArray.push(s1);
studentenArray.push(s2);
studentenArray.push(s3);
studentenArray.push({ vorname: "Otto", nachname: "Heinz", alter: 25, matrikelnummer: 46984 });
//4
function showInfo(s) {
    console.log(s.nachname);
    console.log(s.matrikelnummer);
}
showInfo(s1);
showInfo(s2);
showInfo(s3);
showInfo(studentenArray[3]);
//5
class Student {
    constructor(_vorname, _nachname, _alter, _matrikelnummer) {
        this.vorname = _vorname;
        this.nachname = _nachname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }
    showInfo(_vorname, _nachname, _alter, _matrikelnummer) {
        console.log(this.vorname);
    }
}
//# sourceMappingURL=script.js.map