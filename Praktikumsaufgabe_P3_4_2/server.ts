import * as Http from "http";
import * as URL from "url";
import * as Mongo from "mongodb";


export namespace Praktikumsaufgabe_P3_4_2 {

    interface Students {
        [key: string]: string | string[];
    }

    let studentsCollection: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb://localhost:27017";



    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting server");

        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);



    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        studentsCollection = mongoClient.db("test").collection("students");
        console.log("Database conncetion", studentsCollection != undefined);
    }
    connectToDatabase(databaseURL);



    function handleListen(): void {
        console.log("Listening");
    }



    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        let url: URL.UrlWithParsedQuery = URL.parse(_request.url, true);

        if (url.pathname == "/send") {

            for (let key in url.query) {
                _response.write("<p>" + key + ":" + url.query[key]);
            }
        }

        if (url.pathname == "/show") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeStudent(url.query);
        }

        if (url.pathname == "/delete") {
            let id: Mongo.ObjectID = new Mongo.ObjectID();
            studentsCollection.deleteOne(id);
        }

        _response.end();
    }


    function storeStudent(_student: Students): void {
        studentsCollection.insertOne(_student);
    }

}
