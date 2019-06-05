
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, "view.html"));
    });

    app.get("/make", function (req, res) {
        res.sendFile(path.join(__dirname, "make.html"));
    });
}