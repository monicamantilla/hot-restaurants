// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
// const connection =  require("/connections/mysql.js")
const mysql = require("mysql");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

connection.connect(function (error) {
    if (error) throw error
    
})
var connection = mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: "Rcc083178",
        database: "reservations"
});
require("/routes/html.js")(app, connection)








app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
