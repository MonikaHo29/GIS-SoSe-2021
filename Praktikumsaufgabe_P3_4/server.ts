import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Praktikumsaufgabe_3_4 {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    async function connectToDBMongo(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
        let cursor: Mongo.Cursor = students.find({name: "Andreas Reich hallo"});
        let result: Students[] = await cursor.toArray();
        console.log(result);
    }
    connectToDBMongo("");

    interface Students {
        name: string;
        matrikel: string; 
        studiengang: string;
        semester: number;
        beginn: number; 
        farbe: string; 
    }





    function handleListen(): void {
        console.log("Listening");
    }


    // Funktion, die Daten aus der URL ausliest und auf zwei verschiedene Weise zurückgibt (/html oder /json)
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);                                //Daten werden aus der URL ausgelesen (mit Zeile 2)

        if (url.pathname == "/html") {
            for (let key in url.query) {
                //_response.write("<p>" + key + ":" + url.query[key] + "</p>");
                _response.write("<ul>" + "<li>" + key + ":" + url.query[key] + "</li>" + "</ul>");
            }
        }

        if (url.pathname == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            console.log(url.query);
            _response.write(jsonString);

        }

        _response.end();
    }
}
