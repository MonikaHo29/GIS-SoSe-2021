namespace Praktikumsaufgabe_P2_4 {

    //Aufgabe 1a)

    export let myJSON: string = 
    `
    {
    "groesseArray":[
        {
            "option": "20cm",
            "image": "pizza_klein.png" 
        },
        {
            "option": "25cm",
            "image": "pizza_medium.png"
        },
        {
            "option": "30cm",
            "image": "pizza_gross.png"
        }
    ],

    "toppingArray":[
        {
            "option": "Mais",
            "image": "mais.png"
        },
        {
            "option": "Salami",
            "image": "salami.png"
        },
        {
            "option": "Champignions",
            "image": "champignions.png"
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
    }`;

    console.log(myJSON);
    export let myObject: Pizza = JSON.parse(myJSON);

}