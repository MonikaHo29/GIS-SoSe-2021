import * as Http from "http";
import * as URL from "url";
import * as Mongo from "mongodb";



export namespace Praktikumsaufgabe_P3_4_2 {

    let studentsCollection: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb+srv://monika_ho:zgHxU74hnaeWkiEy@cluster0.xnkfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //let databaseURL: string = "mongodb://localhost:27017";




    async function startServer(_port: number | string): Promise<void> {
        let server: Http.Server = Http.createServer();
        console.log("Starting server");

        await connectToDatabase(databaseURL);

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



    function handleListen(): void {
        console.log("Listening");
    }



    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        let url: URL.UrlWithParsedQuery = URL.parse(_request.url, true);

        if (url.pathname == "/insert") {

            studentsCollection.insertOne(url.query);
        }

        // if (url.pathname == "/find") {

        //     studentsCollection.findOne({"name": url.query ["name"], "E-Mail": url.query ["email"], "Nachricht": url.query ["message"]});
        // }


        if (url.pathname == "/show") {

            _response.setHeader("content-type", "application/json");

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

        }


        if (url.pathname == "/delete") {

            studentsCollection.deleteOne({ "name": url.query["name"], "E-Mail": url.query["email"], "Nachricht": url.query["message"] });
        }

        _response.end();
    }



}

