"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Praktikumsaufgabe_P3_2;
(function (Praktikumsaufgabe_P3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
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
        let url = Url.parse(_request.url, true);
        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + ", " + " ");
            }
        }
        if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            console.log(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Praktikumsaufgabe_P3_2 = exports.Praktikumsaufgabe_P3_2 || (exports.Praktikumsaufgabe_P3_2 = {}));
//# sourceMappingURL=server.js.map