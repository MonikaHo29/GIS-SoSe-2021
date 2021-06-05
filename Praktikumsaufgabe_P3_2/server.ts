import * as Http from "http";

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
        _response.setHeader("Access-Control-Allow-Origin", "*");        // Wer darf auf dem Server zugreifen
        _response.write(_request.url);                                      
        _response.end();                                                // Ende, Anfrage wurde erhalten, Antwort wird versendet 

        console.log(_request.url);                                      // Antwort (query/path string) wird in der Konsole ausgegeben

    }

}

