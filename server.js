console.log('Node is working just fine!')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect('mongodb-connection-string', (err,client){
    
})

app.listen(3000, function() {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    // console.log('Trying this new quote hehe.')
    console.log(req.body)
})

