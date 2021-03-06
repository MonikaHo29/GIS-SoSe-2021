namespace Praktikumsaufgabe_2_2 {

    /* Aufgabe 1 - Mehr “langweilige” Konsolenausgaben*/

    // a)
    function min(_leerArray: number[]): number {
        let minimum: number = _leerArray[0];

        for (let i: number = 0; i < _leerArray.length; i++) {
            if (minimum > _leerArray[i]) {
                minimum = _leerArray[i];
            }
        }
        return minimum;
    }
    console.log(min([5, 42, 17, 2018, -10, 60, -10010]));


    // b)
    let randomZahl: number = 75;                             

    function isEven(_zahl: number): boolean {
        if (_zahl == 0) {
            return true;
        }
        if (_zahl == 1) {
            return false;
        }
        return isEven(_zahl - 2);
    }
    console.log(isEven(randomZahl));

    /*  Die Funktion bricht bei -1 zusammen. Bei Negative Zahlen wird es nie 0 oder 1 werden, weil die Bedingung 
        in Zeile 29 immer ausgeführt wird.
        Vielleicht kann man in die Funktion ein Exception einfügen.? 
    */

    //c)

    /*
    //c-5
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

    //c-1 und 2
    interface Student {
        name: string;
        alter: number;
        matrikelnummer: number;
        studiengang: string;
    }

    let s1: Student = creatStudent("Monika Ho", 21, 24563, "OMB");
    let s2: Student = creatStudent("Lena Haigis", 20, 27869, "MKB");
    let s3: Student = creatStudent("Luis Gustavo ", 25, 23648, "MIB");

    function creatStudent(_name: string, _alter: number, _matrikelnummer: number, _studiengang: string): Student {
        let s: Student = { name: _name, alter: _alter, matrikelnummer: _matrikelnummer, studiengang: _studiengang };
        return s;
    }

    let studentArray: Student[] = [];
    studentArray.push(s1);
    studentArray.push(s2);
    studentArray.push(s3);
    studentArray.push({ name: "Otto Werner", alter: 28, matrikelnummer: 24869, studiengang: "OMB" });

    //c-3
    console.log(s1.name);
    console.log(s2.matrikelnummer);
    console.log(s3.name + ", " + s3.studiengang);
    console.log(studentArray[3].name);

    //c-4
    function showInfo(s: Student): void {
        console.log(s.name);
        console.log(s.matrikelnummer);
    }
    showInfo(studentArray[0]);
    showInfo(studentArray[1]);
    showInfo(studentArray[2]);
    showInfo(studentArray[3]);

    //c-5 (siehe Zeile 39)



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
    let zweitesArray: number[] = [15, 9001, -440];

    function join(_array1: number[], _array2: number[]): void {
        let arrayZusammenfügen: number[] = _array1.concat(_array2);
        console.log(arrayZusammenfügen);
    }
    join(arr, zweitesArray);


    //c)
    let index1: number = 0;
    let index2: number = 4;
    function split(_arr: number[], _index1: number, _index2: number): number[] {
        return _arr.slice(_index1, _index2);
    }
    console.log(split(arr, index1, index2));



    /* Aufgabe 3 - Endlich was visuelles!*/

    //a)
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    context.lineWidth = 5;

    //Himmel und Boden
    context.fillStyle = "#C2F2F1";
    context.fillRect(5, 5, 600, 300);
    context.fillStyle = "#2A5737";
    context.fillRect(5, 300, 600, 80);

    //Haus mit Dach
    context.fillStyle = "#A6A6A6";
    context.fillRect(100, 150, 150, 150);

    context.beginPath();
    context.fillStyle = "#B04238";
    context.moveTo(175, 50);
    context.lineTo(100, 150);
    context.lineTo(250, 150);
    context.closePath();
    context.strokeStyle = "#B04238";
    context.stroke();
    context.fill();

    //Baum
    context.fillStyle = "#453214";
    context.fillRect(350, 200, 30, 150);
    context.beginPath();
    context.arc(365, 200, 60, 0, Math.PI * 2);
    context.fillStyle = "#549C6E";
    context.fill();

    //Wolke
    context.beginPath();                                //links oben
    context.arc(320, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();                                //rechts oben
    context.arc(360, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();                                //links unten                    
    context.arc(300, 80, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();                                //links mitte 
    context.arc(340, 80, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();                                //links unten
    context.arc(380, 80, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    //Sonne
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2);
    context.fillStyle = "#FFF200";
    context.fill();


    //b)
    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
    let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

    class Rechteck {
        xKoordinate: number;
        yKoordinate: number;
        breite: number;
        höhe: number;


    //c)
        constructor() {
            this.createRect();
        }

        createRect(): void {
            this.xKoordinate = Math.random() * 400;
            this.yKoordinate = Math.random() * 500;
            this.breite = Math.random() * 200;
            this.höhe = Math.random() * 200;
        }

     
    //d)    
        drawRect(): void {      
            context2.fillRect(this.xKoordinate, this.yKoordinate, this.breite, this.höhe);
        }
    }


    //e)                                                            
    let rechteckArray: Rechteck[] = [];

    for (let i: number = 0; i < 10; i++) {
        rechteckArray.push(new Rechteck);
        rechteckArray[i].drawRect();
    }

    
}




