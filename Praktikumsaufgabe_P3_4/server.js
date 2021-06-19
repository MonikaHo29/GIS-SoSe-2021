"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Praktikumsaufgabe_3_4;
(function (Praktikumsaufgabe_3_4) {
    let students; // Collection anlegen 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseURL = "mongodb://localhost:27017";
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Starting server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; // sonstige optionen für die Parameter aus Zeile 29
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("test").collection("students"); //collection im Datenbank finden --> mongoclient anfragen   
        console.log("Database conncetion", students != undefined); // Konsoleausgabe um zu schauen ob eine Verbindung zum Datenbank enstanden ist oder nicht, mit true od false 
        //let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
        //let cursor: Mongo.Cursor = students.find();
        //let result: Students[] = await cursor.toArray();
        //console.log(result);
    }
    connectToDatabase(databaseURL);
    function handleListen() {
        console.log("Listening");
    }
    // Funktion, die Daten aus der URL ausliest und auf zwei verschiedene Weise zurückgibt (/html oder /json)
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url = Url.parse(_request.url, true); //Daten werden aus der URL ausgelesen (mit Zeile 2)
        if (url.pathname == "/html") { //???
            for (let key in url.query) {
                _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                //_response.write("<ul>" + "<li>" + key + ":" + url.query[key] + "</li>" + "</ul>");
                storeStudent({ name: "Max Mustermann", matrikel: 12345, studiengang: "OMB", semester: 1, beginn: 1 });
            }
        }
        if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            //console.log(url.query);
            _response.write(jsonString);
        }
        if (url.pathname == "/delete") {
            let id = new Mongo.ObjectID();
            students.deleteOne(id);
        }
        _response.end();
    }
    function storeStudent(_student) {
        students.insertOne(_student);
    }
})(Praktikumsaufgabe_3_4 = exports.Praktikumsaufgabe_3_4 || (exports.Praktikumsaufgabe_3_4 = {}));
//# sourceMappingURL=server.js.map