"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_2 = void 0;
const Http = require("http");
const URL = require("url");
var Praktikumsaufgabe_P3_2;
(function (Praktikumsaufgabe_P3_2) {
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
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = URL.parse(_request.url, true);
        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
        }
        if (url.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.pathname);
            console.log(jsonString);
        }
    }
})(Praktikumsaufgabe_P3_2 = exports.Praktikumsaufgabe_P3_2 || (exports.Praktikumsaufgabe_P3_2 = {}));
//# sourceMappingURL=server.js.map