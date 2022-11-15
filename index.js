const express = require('express');
const app = express();


app.use(express.static('public'));

app.get("/", (req, res) => { res.render("./index.pug") });

app.get("/faq", (req, res) => { res.render("./faq.pug") });

app.get("/blog", (req, res) => { res.render("./blog.pug") });

app.get("/more", (req, res) => { res.render("./more.pug") });

app.get("*", (req, res) => {res.render("./notFound.pug")})

app.set('view-engine', 'pug');

app.listen(80);

console.log("app listening at port %s", 80)