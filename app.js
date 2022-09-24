const express = require('express')      // import express module
const { Client } = require('pg');
var connectionString = "postgres://postgres:postgres@localhost:5432/E-Commercer_marketplace-project";
const client = new Client({
    connectionString: connectionString
});

client.connect();

const app = express()                   // create instance of express application = can use methods (get, listen, put, ...) from express
const port = 5432                       // store port number = endpoint communication

app.set('port', process.env.PORT || 4000);

app.get('/users', function (req, res, next) {
    client.query('SELECT * FROM users', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

app.get('/', (req, res) => {            // create get method at endpoint localhost:port3000/
    res.send('Hello World!')            // respond with 'Hello World!'
})

app.listen(port, () => {                // starts server, listening on port (3000), success = log
    console.log(`Example app listening on port ${port}`)
})

