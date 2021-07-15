const express = require('express');
const mysql = require('mysql');
const app = express();

app.set('view engine','ejs');

const connection = mysql.connection({
    host     : 'localhost',
    port : 8888, 
    user     : 'root',
    password : '',
    database: 'groceries'
})

app.get('/', function(req,res){
    res.render('index');
});


app.listen(3000);