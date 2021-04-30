namespace Praktikumsaufgabe_2_2 {

    /* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben*/

    // a)

    let xa: number = 5;
    let ya: number = 9;

    function min(x1: number, y1: number): number {
        if (x1 < y1) {
            return x1;
        } else {
            return y1;
        }
    }
    console.log(min(xa, ya));
}

// b)

//c)

interface Student {
    vorname: string;
    nachname: string;
    alter: number;
    matrikelnummer: number;
}
let s1: Student = erschaffeStudent("Monika", "Ho", 21, 42264);
let s2: Student = erschaffeStudent("Timo", "Werner", 26, 56335);
let s3: Student = erschaffeStudent("Hanna", "Hanz", 22, 46945);

console.log(s1.vorname);
console.log(s2.alter);
console.log(s3.nachname);

function erschaffeStudent(_vorname: string, _nachname: string, _alter: number, _matrikelnummer: number): Student {
    let s: Student = { vorname: _vorname, nachname: _nachname, alter: _alter, matrikelnummer: _matrikelnummer };
    return s;
}

let studentenArray: Student[] = [];
studentenArray.push(s1);
studentenArray.push(s2);
studentenArray.push(s3);
studentenArray.push({ vorname: "Otto", nachname: "Heinz", alter: 25, matrikelnummer: 46984 });

//4
function showInfo(s: Student): void {
    console.log(s.nachname);
    console.log(s.matrikelnummer);

}
showInfo(s1);
showInfo(s2);
showInfo(s3);
showInfo(studentenArray[3]);

//5
class Student {
    vorname: string;
    nachname: string;
    alter: number;
    matrikelnummer: number;

    constructor(_vorname: string, _nachname: string, _alter: number, _matrikelnummer: number) {
        this.vorname = _vorname;
        this.nachname = _nachname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }

    showInfo(_vorname: string, _nachname: string, _alter: number, _matrikelnummer: number): void {
    console.log(this.vorname);
}

/* Aufgabe 2 - Arrays*/

    // a)




}

