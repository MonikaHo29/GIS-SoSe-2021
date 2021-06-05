import * as Http from "http";
import * as Url from "url";


export namespace Praktikumsaufgabe_3_2 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100; 

    let server: Http.Server = Http.createServer();                                      
    server.addListener("request", handleRequest);      
    server.addListener("listening", handleListen);
    server.listen(port); 


    function handleListen(): void {
        console.log("Listening"); 
    }


    // Funktion, die Daten aus der URL ausliest und auf zwei verschiedene Weise zurückgibt (/html oder /json)
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); 
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
       

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + ",");
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
