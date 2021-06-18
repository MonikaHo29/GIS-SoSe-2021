"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_3_4 = void 0;
const Mongo = require("mongodb");
var Praktikumsaufgabe_3_4;
(function (Praktikumsaufgabe_3_4) {
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let students = mongoClient.db("Test").collection("Students");
        let cursor = students.find();
        let result = await cursor.toArray();
        console.log(result);
    }
    connectToDB("mongodb://localhost27017");
})(Praktikumsaufgabe_3_4 = exports.Praktikumsaufgabe_3_4 || (exports.Praktikumsaufgabe_3_4 = {}));
//# sourceMappingURL=dbtest.js.map