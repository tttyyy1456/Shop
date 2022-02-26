const mongodb = require('mongodb'); 
const MongoClient = mongodb.MongoClient;

MongoClient
    .connect('mongodb+srv://tim_admin:Q4nnpNwFFZdxkix1@cluster0.x0qza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(res => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });