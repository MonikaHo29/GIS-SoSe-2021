namespace Praktikumsaufgabe_2_2 {

    /* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben*/

    // a)

    let xa: number = 8;
    let ya: number = 9;

    function min(_x1: number, _x2: number): number {
        if (_x1 < _x2) {
            return _x1;
        } else {
            return _x2;
        }

    }
    console.log(min(xa, ya));


    // b)
    /*
        let zahl: number;
    
        function isEven(_n: number): number {
            
            let gerade: number = 0;
            while (_n == 0) {
                gerade = 0; 
            }
            return gerade;
    
            }
            console.log()
    
        }
    */


    //c)
    /*
    class Student {
        name: string;
        alter: number;
        matrikelnummer: number;
        studiengang: string;

        constructor(_name: string, _alter: number, _matrikelnummer: number, _studiengang: string): void {
            this.name = _name;
            this.alter = _alter;
            this.matrikelnummer = _matrikelnummer;
            this.studiengang = _studiengang;
        }

        public showInfo(_student: Student): void {
            console.log(_student.name, _student.alter, _student.matrikelnummer, _student.studiengang);
        }

    }
    */

    interface Student {
        name: string;
        alter: number;
        matrikelnummer: number;
        studiengang: string;
    }


    let s1: Student = erschaffeStudent("Monika Ho", 21, 24563, "OMB");
    let s2: Student = erschaffeStudent("Lena Haigis", 20, 27869, "MKB");
    let s3: Student = erschaffeStudent("Luis Gustavo ", 25, 23648, "MIB");

    function erschaffeStudent(_name: string, _alter: number, _matrikelnummer: number, _studiengang: string): Student {
        let s: Student = { name: _name, alter: _alter, matrikelnummer: _matrikelnummer, studiengang: _studiengang };
        return s;
    }

    let studentArray: Student[] = [];
    studentArray.push(s1);
    studentArray.push(s2);
    studentArray.push(s3);
    studentArray.push({ name: "Otto Werner", alter: 28, matrikelnummer: 24869, studiengang: "OMB" });

    console.log(s1.name);
    console.log(s2.matrikelnummer);
    console.log(s3.studiengang);


    function showInfo(s: Student): void {
        console.log(s.name);
        console.log(s.matrikelnummer);
    }
    showInfo(s1);
    showInfo(s2);
    showInfo(s3);
    showInfo(studentArray[3]);



    /* Aufgabe 2 - Arrays*/

    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];

    //a)
    function backwards(_input: number[]): number[] {
        let arr: number[] = new Array;
        for (let i: number = _input.length - 1; i >= 0; i--) {
            arr.push(_input[i]);
        }
        return arr;
    }
    console.log(backwards(arr));


    //b)
    let gerade: number[] = [12, 14, 16, 18];
    let ungerade: number[] = [11, 23, 35, 47];

    function join(_array1: number[], _array2: number[]): void {
        let zahlenZusammen: number[] = _array1.concat(_array2);
        console.log(zahlenZusammen);
    }
    join(gerade, ungerade);


    //c)

    let index1: number = 0;
    let index2: number = 4;
    function split (_arr: number[], _index1: number, _index2: number): number[] {
        return _arr.slice(_index1, _index2);    
    }
    console.log(split(arr, index1, index2));


     /* Aufgabe 3 - Endlich was visuelles!*/







}
