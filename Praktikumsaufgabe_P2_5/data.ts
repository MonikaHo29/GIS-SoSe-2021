namespace Praktikumsaufgabe_P2_5 {

    
    //Aufgabe 1a)

    export let myJSON: string = 
    `
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
    }`;

    console.log(myJSON);
    export let myObject: Pizza = JSON.parse(myJSON);

}