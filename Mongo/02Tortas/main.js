const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        let dbo = await client.db("restaurante");

        //await dbo.createCollection("tortas");

        // await dbo.collection("tortas").insertOne({nombre: "Torta de Lomo"});
        // await dbo.collection("tortas").insertOne({nombre: "Torta de Jamón"});
        // await dbo.collection("tortas").insertOne({nombre: "Torta de Jamón"});
        // await dbo.collection("tortas").insertOne({nombre: "Torta de Huevo"});

        // tortas = [
        //     {nombre: "Torta Cubana"},
        //     {nombre: "Torta Cubana"},
        //     {nombre: "Torta Cubana"},
        //     {nombre: "Torta Especial"},
        //     {nombre: "Torta Especial"},
        //     {nombre: "Torta de la Barda"},
        //     {nombre: "Torta de la Barda"},
        //     {nombre: "Torta de la Barda"},
        //     {nombre: "Torta de la Barda"},
        //     {nombre: "Torta de Queso"}
        // ];

        //await dbo.collection("tortas").insertMany(tortas);

        const res1 = await dbo.collection("tortas").findOne({nombre: "Torta de Jamón"});
        console.log("*****************************************************");
        console.log("******* Consulta: 1 torta de jamón");
        console.log("*****************************************************");
        console.log(res1.nombre);

        const res2 = await dbo.collection("tortas").find();
        console.log("*****************************************************");
        console.log("******* Consulta: todas las tortas");
        console.log("*****************************************************");
        await res2.forEach(doc => console.log(doc));

        const res3 = await dbo.collection("tortas").find({$or: [{nombre: "Torta Especial"}, {nombre: "Torta de Queso"}]});
        console.log("*****************************************************");
        console.log("******* Consulta: tortas especiales y de queso");
        console.log("*****************************************************");
        await res3.forEach(doc => console.log(doc));

        const res4 = await dbo.collection("tortas").deleteMany({nombre: "Torta de Huevo"});
        console.log("*****************************************************");
        console.log("******* Consulta: elminiación de las tortas de huevo");
        console.log("*****************************************************");
        console.log("Borrados: " + res4.deletedCount + " documentos");

        const res5 = await dbo.collection("tortas").updateMany({nombre: "Torta de la Barda"}, {$set: {nombre: "Torta del Chavo"}});
        console.log("*****************************************************");
        console.log("******* Consulta: actualización tortas barda - del chavo");
        console.log("*****************************************************");
        console.log("Actualizados: " + res5.modifiedCount + " documentos");
    } finally {
        await client.close();
    }
}

main().catch(console.dir);