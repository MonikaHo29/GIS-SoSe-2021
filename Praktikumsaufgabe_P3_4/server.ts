import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Praktikumsaufgabe_3_4 {

    interface Students {
        name: string;
        matrikel: number;
        studiengang: string;
        semester: number;
        beginn: number;
    }

    let students: Mongo.Collection;                                                                        // Collection anlegen 

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb://localhost:27017";



    function startServer(_port: number | string): void {                                                // Funktion um Server zu starten 
        let server: Http.Server = Http.createServer();
        console.log("Starting server");

        server.listen(_port);
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    startServer(port);



    async function connectToDatabase(_url: string): Promise <void> {                                      // Funktion um mit dem Datenbank zu verbinden 
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };     // sonstige optionen für die Parameter aus Zeile 29
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);  
        await mongoClient.connect();                                                

        students =  mongoClient.db("test").collection("students");                                      //collection im Datenbank finden --> mongoclient anfragen   
        console.log("Database conncetion", students != undefined);                                      // Konsoleausgabe um zu schauen ob eine Verbindung zum Datenbank enstanden ist oder nicht, mit true od false 

        //let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
        //let cursor: Mongo.Cursor = students.find();
        //let result: Students[] = await cursor.toArray();
        //console.log(result);
    }
    connectToDatabase(databaseURL);
    

    function handleListen(): void {
        console.log("Listening");
    }



    // Funktion, die Daten aus der URL ausliest und auf zwei verschiedene Weise zurückgibt (/html oder /json)
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);                                //Daten werden aus der URL ausgelesen (mit Zeile 2)

        if (url.pathname == "/html") { //???
            for (let key in url.query) {
                _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                //_response.write("<ul>" + "<li>" + key + ":" + url.query[key] + "</li>" + "</ul>");

                storeStudent({name: "Max Mustermann", matrikel: 12345, studiengang: "OMB", semester: 1, beginn: 1});
            }
        }

        if (url.pathname == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            //console.log(url.query);
            _response.write(jsonString);

            
        }

        if (url.pathname == "/delete") {
            let id: Mongo.ObjectID = new Mongo.ObjectID();
            students.deleteOne(id);
        }
        _response.end();
    }


    function storeStudent(_student: Students): void {
        students.insertOne(_student);
    }

}


