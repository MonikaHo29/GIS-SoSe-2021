namespace Praktikumsaufgabe_P2_3 {

    /* Aufgabe 1 */

    function rectangle(): void {

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div); /* Eltern - Kindbeziehung */
        div.style.height = (Math.random() * 400).toString() + "px";
        div.style.width = (Math.random() * 200).toString() + "px";
        div.style.backgroundColor = "blue";
        div.style.position = "absolute";
    }
    for (let i: number = 0; i < 0; i++) {
        rectangle();
    }

    function handleLoad(_load: Event): void {
        location.reload();
    }
    document.querySelector("#loadButton").addEventListener("click", handleLoad);
    document.querySelector("#addButton").addEventListener("click", rectangle);
}



