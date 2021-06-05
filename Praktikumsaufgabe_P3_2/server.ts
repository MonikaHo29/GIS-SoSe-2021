import * as Http from "http";
import * as URL from "url";

export namespace Praktikumsaufgabe_P3_2 {                              
    console.log("Starting server");                     
    let port: number = Number(process.env.PORT);                        // Port erstellen, um Anfrage zu versenden und zu erhalten -> "Hafen"                            
    if (!port)                                                          // If-Bedingung, wenn port nicht existiert, wird es auf 8100 gestellt    
        port = 8100;

    let server: Http.Server = Http.createServer();                      // HTTP Server erstellen
    server.addListener("request", handleRequest);                       // Listener, bei einer Anfrage wird die Funktion handleRequest aufgerufen
    server.addListener("listening", handleListen);                      // Listener, Bei Listen(zuhören) wird die FUnktion hnadleListen aufgerufen   
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
        if (_request.url) {
            let url: URL.UrlWithParsedQuery = URL.parse(_request.url, true);
            for (let key in url.query) {
                _response.write (key + ":" + url.query[key]);
            }
        }
        _response.write("This is my Response");                                      
        _response.end();                                                

        console.log(_request.url);                                      

    }

}
