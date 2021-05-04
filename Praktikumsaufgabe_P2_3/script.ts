namespace Praktikumsaufgabe_P2_3 {

    function rechteck(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = "200px";
        Math.floor (Math.random() * 200);
        div.style.width = Math.random() * 100;
        div.style.backgroundColor = "black";
        div.style.position = "absolute";
        
    }
    for (let i: number = 0; i < 5; i++) {
        rechteck();
    }

    

}