// Les paquest de bases pour un serveur web
const express = require("express");
//Paquets pour prendre des fichers dans le html
const bodyParser = require("body-parser");
//Protocol https Paquets
const https = require("https");

//Mise en place de l'app expresspour démarer le serveur
const app = express();

const port = 3000;
//Inclusion de bodyParser dans l'app
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
});


app.listen(port, function () {
    console.log("Server started at port : " + port + " with success");
});
