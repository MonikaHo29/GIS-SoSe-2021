"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe_3_2;
(function (Aufgabe_3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
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
})(Aufgabe_3_2 = exports.Aufgabe_3_2 || (exports.Aufgabe_3_2 = {}));
//# sourceMappingURL=server.js.map