const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect("mongodb://Marblehead:8712594630Marble@ds034198.mlab.com:34198/examenexpress", { useNewUrlParser: true },(err, client) =>{

    if (err) return console.log(err)
    db = client.db('examenexpress') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000')
})
})

app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine','ejs');


app.get('/', (req, res) => {
    db.collection('overtredingen').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('index.ejs', {inhaal: result})
    })
  })





