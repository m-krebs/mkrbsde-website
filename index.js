const express = require('express');
const app = express();


app.use(express.static('public'));

app.get("/", (req, res)=>{res.render("./index.pug")});

app.set('view-engine', 'pug');

app.listen(3000);