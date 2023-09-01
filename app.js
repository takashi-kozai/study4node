const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: 'testtest',
    database: 'blog'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('DB access succeed!');
  });

app.get('/', (req, res) => {
    console.log("app.get() in");
    connection.query(
        'SELECT * FROM users',
        (error, results) =>{
            if(error){
                console.log(`error: ${error}`);
            }
            console.dir(results, {depth: null});
        }
    );

    res.render('hello.ejs');
});

app.listen(3000, () => {console.log("node up")});

