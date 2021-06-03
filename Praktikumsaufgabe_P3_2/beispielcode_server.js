"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praktikumsaufgabe_P3_2 = void 0;
const url = require("url");
var Praktikumsaufgabe_P3_2;
(function (Praktikumsaufgabe_P3_2) {
    let adresse = 'http://localhost:8080/default.htm?jahr=2017&monat=february';
    //Adresse parsen (umwandeln):
    let q = url.parse(adresse, true);
    /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
    var qdata = q.query;
    console.log(qdata.monat);
})(Praktikumsaufgabe_P3_2 = exports.Praktikumsaufgabe_P3_2 || (exports.Praktikumsaufgabe_P3_2 = {}));
//# sourceMappingURL=beispielcode_server.js.map