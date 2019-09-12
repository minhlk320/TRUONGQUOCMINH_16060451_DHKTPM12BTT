var express = require('express');
var app = express();

app.get('/', function (req, res) {
   var d = req.query.dollar;
   var v = d*23500;
   respone = {
       dollars:d,
       vnd:v
   };
   res.end(JSON.stringify(respone));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server is running!", host, port)
})