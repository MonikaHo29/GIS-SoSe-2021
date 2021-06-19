"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Praktikumsaufgabe_3_4;
(function (Praktikumsaufgabe_3_4) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    let databaseURL = "mongodb://localhost:27017";
    async function connectToDBMongo(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let students = mongoClient.db("Test").collection("Students");
        let cursor = students.find();
        let result = await cursor.toArray();
        console.log(result);
    }
    Praktikumsaufgabe_3_4.connectToDBMongo = connectToDBMongo;
    connectToDBMongo(databaseURL);
    function handleListen() {
        console.log("Listening");
    }
    // Funktion, die Daten aus der URL ausliest und auf zwei verschiedene Weise zurückgibt (/html oder /json)
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url = Url.parse(_request.url, true); //Daten werden aus der URL ausgelesen (mit Zeile 2)
        if (url.pathname == "/html") {
            for (let key in url.query) {
                //_response.write("<p>" + key + ":" + url.query[key] + "</p>");
                _response.write("<ul>" + "<li>" + key + ":" + url.query[key] + "</li>" + "</ul>");
            }
        }
        if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            console.log(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(Praktikumsaufgabe_3_4 = exports.Praktikumsaufgabe_3_4 || (exports.Praktikumsaufgabe_3_4 = {}));
//# sourceMappingURL=server.js.map