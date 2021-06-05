"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_1 = void 0;
const Http = require("http");
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT); // Port erstellen, um Anfrage zu versenden und zu erhalten -> "Hafen"                            
    if (!port) // If-Bedingung, wenn port nicht existiert, wird es auf 8100 gestellt    
        port = 8100;
    let server = Http.createServer(); // HTTP Server erstellen
    server.addListener("request", handleRequest); // Listener, bei einer Anfrage wird die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen); // Listener, Bei Listen(zuhören) wird die FUnktion hnadleListen aufgerufen   
    server.listen(port);
    // Funktion, wenn die Funktion aufgerufen wird (Zeile 11), wird "Listening" in der Konsole ausgegeben 
    function handleListen() {
        console.log("Listening");
    }
    //Funktion um Anfrage über die Eingabeleiste im Browser zu verschicken + Rückantwort bzw Nachricht in der Konsole (in VS) 
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Wer darf auf dem Server zugreifen
        _response.write(_request.url);
        _response.end(); // Ende, Anfrage wurde erhalten, Antwort wird versendet 
        console.log(_request.url); // Antwort (query/path string) wird in der Konsole ausgegeben
    }
})(Praktikumsaufgabe_P3_1 = exports.Praktikumsaufgabe_P3_1 || (exports.Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=server.js.map