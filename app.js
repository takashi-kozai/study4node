const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'testtest',
    database: 'blog'
});

app.get('/', (req, res) => {
    console.log("app.get() in");
    connection.query(
        'SELECT * FROM articles',
        (error, results) =>{
            if(error){
                console.log(`error: ${error}`);
            }
            console.log("database access succeed.");
            console.dir(results);
        }
    );

    res.render('hello.ejs');
});

app.listen(3000, () => {console.log("node up")});

