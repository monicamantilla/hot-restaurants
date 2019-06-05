// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const connection =  require("/connections/mysql.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
require("/routes/html.js")(app)


var callback = function test(response) {
    
}

connection(callback)