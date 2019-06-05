
module.exports = function (app, connection) {
    
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/view", function (req, res) {
         res.sendFile(path.join(__dirname, "view.html"));
        res.json(fn)
    });

    app.get("/make", function (req, res) {
        res.sendFile(path.join(__dirname, "make.html"));
    });

    app.get("/api/tables", function (req, res) {
        getAllTables(connection, res)
        
    });
    app.get("/api/waitlist", function (req, res) {
        getWaitList(connection, res)

    });
    app.post("/api/add", function (req, res) {
         var reservation = req.body;
        insertReservation(reservation, res)

    });
    var reservations = []
    var waitList = []

    function getAllTables(connection, res) {
        reservations = []
    
        var getTableReservationsSQL = "SELECT * FROM reservation WHERE id<6"
        connection.query(getTableReservationsSQL, function (error, results) {
            
            if (error) throw error;
            console.log(results)
            reservations.push(results)
            res.json(reservations)
         
        });
    }

    function getWaitList(connection, res) {
        waitList = []
      
        var getWaitListSQL = "SELECT * FROM reservation WHERE id>5"
        connection.query(getWaitListSQL, function (error, results) {
            if (error) throw error
            console.log(results)
            waitList.push(results)
            res.json(results)
        });
        
    }

    function insertReservation(reservation,  res) {
        
        var insertReservationsSQL = `INSERT INTO reservation (phoneNumber, customerEmail, tableId, isWaitList) VALUES (${reservation.name}${reservation.phoneNumber},${reservation.customerEmail},0,0)`
        connection.query(insertReservationsSQL, [], function (error, results) {
            if (error) throw error
            res.json({"status": 200, "message": "Success"});
        })

    }
}