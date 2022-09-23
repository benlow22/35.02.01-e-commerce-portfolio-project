const express = require('express')      // import express module
const app = express()                   // create instance of express application = can use methods (get, listen, put, ...) from express
const port = 3000                       // store port number = endpoint communication

app.get('/', (req, res) => {            // create get method at endpoint localhost:port3000/
    res.send('Hello World!')            // respond with 'Hello World!'
})

app.listen(port, () => {                // starts server, listening on port (3000), success = log
    console.log(`Example app listening on port ${port}`)
})

