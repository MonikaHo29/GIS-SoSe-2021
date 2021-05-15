"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    //Aufgabe 1a)
    Praktikumsaufgabe_P2_4.myJSON = `
    {
    "groesseArray":[
        {
            "option":"20cm",
            "image": "pizza_klein.png" 
        },
        {
            "option":"25cm",
            "image": "pizza_medium.png"
        },
        {
            "option":"30cm",
            "image": "pizza_gross.png"
        }
    ],

    "toppingsArray":[
        {
            "option":"Salami",
            "image": "salami.jpg"
        },
        {
            "option":"Mais",
            "image": "mais.jpg"
        },
        {
            "option":"Champignions",
            "image": "champignions.jpg"
        }
    ],

    "serviceArray":[
        {
            "option":"Lieferung",
            "image": "lieferung.png"
        },
        {
            "option":"Abholung",
            "image": "abholung.png"
        },
        {
            "option":"Vorort",
            "image": "vorort.png"
        }
    ]
    }`;
    console.log(Praktikumsaufgabe_P2_4.myJSON);
    Praktikumsaufgabe_P2_4.myObject = JSON.parse(Praktikumsaufgabe_P2_4.myJSON);
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=data.js.map