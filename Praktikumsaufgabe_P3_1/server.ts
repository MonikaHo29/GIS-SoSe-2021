import * as Http from "http";

export namespace P_3_1Server {                              
    console.log("Starting server");                     
    let port: number = Number(process.env.PORT);                                             
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();               // Server erstellen
    server.addListener("request", handleRequest);                // wie ein Eventlistener, die Funktion handleRequest soll aufgerrufen werden wenn eine Anfrage gestellt wird  
    server.addListener("listening", handleListen);               // wie ein Eventlistener, die FUnktion handleListen soll aufgberufen werden wenn was gehört wird 
    server.listen(port);

    function handleListen(): void {                              // Funktion, KOnsoleausgabe wird gemacht 
        console.log("Listening");
    }

    //Funktion um mit dem Server zu kommunizieren mit den Parmeter für ANfrage schicken und Rückantwort vom Server erhalten
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");                                                                  //
        _response.setHeader("content-type", "text/html; charset=utf-8");                                // damit kann man in der .... eine ANfrage an dem Server schicken 
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();

        console.log(_request.url);                                                                      //Antwort des Server wird in der KOnsole ausgegeben
    }

}
