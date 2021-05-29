import * as Http from "http";

export namespace Praktikumsaufgabe_P3_1 {                              
    console.log("Starting server");                     
    let port: number = Number(process.env.PORT);            // Port erstellen, um eine Verbindung zum Server zu erstellen -> "Hafen"                            
    if (!port)                                              // If-Bedingung,    
        port = 8100;

    let server: Http.Server = Http.createServer();          // Server erstellen
    server.addListener("request", handleRequest);           // Listner für Abfrage und Listen + Funktionaufruf 
    server.addListener("listening", handleListen);               
    server.listen(port);


    // Funktion, Konsoleausgabe wird gemacht 

    function handleListen(): void {                              
        console.log("Listening");
    }


    //Funktion um Anfrage über die Eingabeleiste im Browser zu verschicken + Rückantwort bzw Nachricht in der Konsole (in VS) 
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");                                                                
        _response.setHeader("content-type", "text/html; charset=utf-8");    
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);                                      
        _response.end();

        console.log(_request.url);                          // Antwort (query/path string) wird in der Konsole ausgegeben
    }

}
