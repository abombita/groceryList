const express = require('express');
const mysql = require('mysql');
const app = express();

app.use( express.static('static') );
app.use( express.urlencoded({ extended: true }));
app.set('view engine','ejs');

const connection = mysql.createConnection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'groceries'
});

connection.connect();

app.get('/', function(req,res){

    connection.query('SELECT id,item,quantity FROM grocerylist', function(err,results){
        console.log(results);
        
        res.render('index', {
            groceryList: results
        });
    });
});




app.listen(8000);