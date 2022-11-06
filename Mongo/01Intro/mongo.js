var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("mydb");
    dbo.createCollection("usuarios", function(err, res) {
        if (err) throw err;
        console.log("Collection and database created!");
    });

    var myobj = [
        { name: 'John', clave: 'a123'},
        { name: 'Peter', clave: 'b123'},
        { name: 'Amy', clave: 'c123'},
        { name: 'Hannah', clave: 'd123'},
        { name: 'Michael', clave: 'e123'},
    ];

    dbo.collection("usuarios").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});