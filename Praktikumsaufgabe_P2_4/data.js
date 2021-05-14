"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    Praktikumsaufgabe_P2_4.myJSON = `
    {
    "groesseArray":[
        {
            "option":"20cm",
            "image": "pizza_groesse.png" 
        },
        {
            "option":"25cm",
            "image": "pizza_groesse.png"
        },
        {
            "option":"30cm",
            "image": "pizza_groesse.png"
        }
    ],

    "toppingsArray":[
        {
            "option":"Salami",
            "image": "salami.png"
        },
        {
            "option":"Mais",
            "image": "mais.png"
        },
        {
            "option":"Champignions",
            "image": "champignions.png"
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