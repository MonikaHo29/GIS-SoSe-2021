namespace Praktikumsaufgabe_P2_4 {

    export let myJSON: string = 
    `
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

    console.log(myJSON);

    export let myObject: Pizza = JSON.parse(myJSON);

}