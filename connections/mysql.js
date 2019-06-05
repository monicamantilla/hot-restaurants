const mysql = require("mysql");
module.exports = function(callback) {
    
  var connection =   mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: "Rcc083178",
        database: "reservations"
    });
return connection.connect(callback)
}