"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_1 = void 0;
const Http = require("http");
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT); // Port erstellen, um eine Verbindung zum Server zu erstellen -> "Hafen"                            
    if (!port) // If-Bedingung,    
        port = 8100;
    let server = Http.createServer(); // Server erstellen
    server.addListener("request", handleRequest); // Listner für Abfrage und Listen + Funktionaufruf 
    server.addListener("listening", handleListen);
    server.listen(port);
    // Funktion, Konsoleausgabe wird gemacht 
    function handleListen() {
        console.log("Listening");
    }
    //Funktion um Anfrage über die Eingabeleiste im Browser zu verschicken + Rückantwort bzw Nachricht in der Konsole (in VS) 
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
        console.log(_request.url); // Antwort (query/path string) wird in der Konsole ausgegeben
    }
})(Praktikumsaufgabe_P3_1 = exports.Praktikumsaufgabe_P3_1 || (exports.Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=server.js.map