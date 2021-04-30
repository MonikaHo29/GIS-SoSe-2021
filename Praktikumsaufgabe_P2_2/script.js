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
    /*
        let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
        let input: number = backwards(arr);
        function backwards(input: number[]): number {
            let arr: number[] = new Array;
            for (let i: number = input.length - 1; i >= 0; i--) {
                arr.push(input[i]);
            }
            return backwards(arr);
        }
    
        console.log(input);
    */
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let input = backwards(arr);
    function backwards(input) {
        let arr = new Array;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[(arr.length - 1) - i];
            // for (let i: number = input.length - 1; i >= 0; i--) {
            // arr.push(input[i]);
            // }
            return i;
        }
        console.log(input);
    }
    // b)
    //c)
    /*
    interface Student {
        vorname: string;
        nachname: string;
        alter: number;
        matrikelnummer: number;
    }
    */
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
    /* Aufgabe 2 - Arrays*/
})(Praktikumsaufgabe_2_2 || (Praktikumsaufgabe_2_2 = {}));
/* Aufgabe 2 - Arrays*/
//# sourceMappingURL=script.js.map