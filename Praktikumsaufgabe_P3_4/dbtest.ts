import * as Mongo from "mongodb";

export namespace Praktikumsaufgabe_3_4 {

    async function connectToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
        let cursor: Mongo.Cursor = students.find();
        let result: Data[] = await cursor.toArray();
        console.log(result);
    }
    connectToDB("mongodb://localhost27017");

    interface Data {
        name: string;
        betreff: string;
        email: string;
        textfeld: string;

    }
}