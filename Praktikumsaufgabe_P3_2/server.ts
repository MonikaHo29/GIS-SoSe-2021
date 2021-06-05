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


    // Funktion, wenn die Funktion aufgerufen wird (Zeile 11), wird "Listening" in der Konsole ausgegeben 

    function handleListen(): void {                              
        console.log("Listening");
    }


    //Funktion um Anfrage über die Eingabeleiste im Browser zu verschicken + Rückantwort bzw Nachricht in der Konsole (in VS) 
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");                                                                
        _response.setHeader("content-type", "text/html; charset=utf-8");    
        _response.setHeader("Access-Control-Allow-Origin", "*");        
        _response.write(_request.url);  
        
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        if (url.pathname == "/html") {
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] +  ";");
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
