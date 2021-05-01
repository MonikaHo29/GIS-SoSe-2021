"use strict";
var Praktikumsaufgabe_2_2;
(function (Praktikumsaufgabe_2_2) {
    /* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben*/
    // a)
    let xa = 8;
    let ya = 9;
    function min(_x1, _x2) {
        if (_x1 < _x2) {
            return _x1;
        }
        else {
            return _x2;
        }
    }
    console.log(min(xa, ya));
    let s1 = erschaffeStudent("Monika Ho", 21, 24563, "OMB");
    let s2 = erschaffeStudent("Lena Haigis", 20, 27869, "MKB");
    let s3 = erschaffeStudent("Luis Gustavo ", 25, 23648, "MIB");
    function erschaffeStudent(_name, _alter, _matrikelnummer, _studiengang) {
        let s = { name: _name, alter: _alter, matrikelnummer: _matrikelnummer, studiengang: _studiengang };
        return s;
    }
    let studentArray = [];
    studentArray.push(s1);
    studentArray.push(s2);
    studentArray.push(s3);
    studentArray.push({ name: "Otto Werner", alter: 28, matrikelnummer: 24869, studiengang: "OMB" });
    console.log(s1.name);
    console.log(s2.matrikelnummer);
    console.log(s3.studiengang);
    function showInfo(s) {
        console.log(s.name);
        console.log(s.matrikelnummer);
    }
    showInfo(s1);
    showInfo(s2);
    showInfo(s3);
    showInfo(studentArray[3]);
    /* Aufgabe 2 - Arrays*/
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    //a)
    function backwards(_input) {
        let arr = new Array;
        for (let i = _input.length - 1; i >= 0; i--) {
            arr.push(_input[i]);
        }
        return arr;
    }
    console.log(backwards(arr));
    //b)
    let gerade = [12, 14, 16, 18];
    let ungerade = [11, 23, 35, 47];
    function join(_array1, _array2) {
        let zahlenZusammen = _array1.concat(_array2);
        console.log(zahlenZusammen);
    }
    join(gerade, ungerade);
    //c)
    let index1 = 0;
    let index2 = 4;
    function split(_arr, _index1, _index2) {
        return _arr.slice(_index1, _index2);
    }
    console.log(split(arr, index1, index2));
    /* Aufgabe 3 - Endlich was visuelles!*/
})(Praktikumsaufgabe_2_2 || (Praktikumsaufgabe_2_2 = {}));
//# sourceMappingURL=script.js.map