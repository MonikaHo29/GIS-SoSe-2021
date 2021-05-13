namespace Praktikumsaufgabe_P2_4 {

  export let partsJSON: string =
    `
    {
    "Größe": [
    {
      "durchmesser": "20", 
      "bild": "pizza_groesse.png"
    },
    {
      "durchmesser": "25", 
      "bild": "pizza_groesse.png"
    },
    {
      "durchmesser": "30", 
      "bild": "pizza_groesse.png"
    }
  ],

  "Toppings": [
    {
    "toppings": "salami", 
    "image": "bild.jpeg"
    },
    {
      "toppings": "mais", 
      "image": "bild.jpeg"
      },

    {
        "toppings": "champignions",
        "image": "bild.jpeg   
    }
  ],

  "Bestelloptionen": [
    {
    "service": "Lieferung", 
    "image": "bild.jpeg"
    },
    {
      "service": "Abholung", 
      "image": "bild.jpeg"
      },

    {
        "service": "Vorort",
        "image": "bild.jpeg   
    }
  ]


}
`;
  export let pizzaObject: string = JSON.parse(partsJSON);

}




