const express = require('express');
const mysql = require('mysql');
const app = express();

app.use( express.static('static') );
app.use( express.urlencoded({ extended: true }));
app.set('view engine','ejs');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'groceries',
    port : 8889
});
connection.connect;

app.get('/', function(req, res){

    connection.query('SELECT id, item, quantity FROM grocerylist', function(err,results){
        console.log('current results')
        console.log(results);

        res.render('index', {
            groceryList: results
        }); 
    });
});

app.post('/', function(req,res){
    let grocery = req.body.grocery;
    connection.query('INSERT INTO grocerylist (item) VALUES (?)', grocery, function(err,results){
        res.redirect('/');
    });
});


app.listen(3000);