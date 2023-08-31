const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.listen(3000, () => {console.log("node up")});

