var express = require("express");
var bodyParser = require("body-parser");
var gis = require('g-i-s');

// var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes(app);

app.get("/search/:name", function (req, res) {
    console.log(req.params.name);
    gis(req.params.name, (error, results) => {
        if (error) {
            res.status(400).json({
                error: "search failed"
            });
        }
        res.status(200).json(results);
    });


});


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});





function logResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(JSON.stringify(results, null, '  '));
    }
}