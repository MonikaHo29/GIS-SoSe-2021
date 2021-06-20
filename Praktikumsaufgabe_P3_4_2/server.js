"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_4_2 = void 0;
const Http = require("http");
const URL = require("url");
const Mongo = require("mongodb");
var Praktikumsaufgabe_P3_4_2;
(function (Praktikumsaufgabe_P3_4_2) {
    let studentsCollection;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseURL = "mongodb+srv://monika_ho:zgHxU74hnaeWkiEy@cluster0.xnkfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //let databaseURL: string = "mongodb://localhost:27017";
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Starting server");
        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        studentsCollection = mongoClient.db("test").collection("students");
        console.log("Database conncetion", studentsCollection != undefined);
    }
    connectToDatabase(databaseURL);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        let url = URL.parse(_request.url, true);
        if (url.pathname == "/insert") {
            studentsCollection.insertOne(url.query);
        }
        if (url.pathname == "/show") {
            _response.setHeader("content-type", "application/json");
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        if (url.pathname == "/delete") {
            let id = new Mongo.ObjectID();
            studentsCollection.deleteOne(id);
        }
        _response.end();
    }
})(Praktikumsaufgabe_P3_4_2 = exports.Praktikumsaufgabe_P3_4_2 || (exports.Praktikumsaufgabe_P3_4_2 = {}));
//# sourceMappingURL=server.js.map