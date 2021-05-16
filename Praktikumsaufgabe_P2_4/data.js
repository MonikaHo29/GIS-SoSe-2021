"use strict";
var Praktikumsaufgabe_P2_4;
(function (Praktikumsaufgabe_P2_4) {
    //Aufgabe 1a)
    Praktikumsaufgabe_P2_4.myJSON = `
    {
    "groesseArray":[
        {
            "option": "20 cm",
            "image": "pizza_klein.png"
        },
        {
            "option": "25 cm",
            "image": "pizza_medium.png"
        },
        {
            "option": "30 cm",
            "image": "pizza_gross.png"
        }
    ],

    "sorteArray":[
        {
            "option": "Pizza Vegetarisch",
            "image": "vegetarisch.png"
        },
        {
            "option": "Pizza Hawaii-Chicken",
            "image": "hawaii.png"
        },
        {
            "option": "Pizza Marokkan",
            "image": "marokkan.png"
        }
    ],

    "serviceArray":[
        {
            "option": "Lieferung",
            "image": "lieferung.png"
        },
        {
            "option": "Abholung",
            "image": "abholung.png"
        },
        {
            "option": "Vorort",
            "image": "vorort.png"
        }
    ]
        {
            "image":"fragezeichen.png"
        }
    }`;
    console.log(Praktikumsaufgabe_P2_4.myJSON);
    Praktikumsaufgabe_P2_4.myObject = JSON.parse(Praktikumsaufgabe_P2_4.myJSON);
})(Praktikumsaufgabe_P2_4 || (Praktikumsaufgabe_P2_4 = {}));
//# sourceMappingURL=data.js.map