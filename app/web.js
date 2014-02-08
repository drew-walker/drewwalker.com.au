/**
 * Created by drew on 7/02/2014.
 */
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/views'));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});