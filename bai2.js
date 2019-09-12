var express = require('express');
var fs = require("fs");
var app = express();
app.set('view engine', 'ejs');
app.get('/login', function (req, res) {
    fs.readFile('account.json', 'utf8', function (err, data) {
        var jsondata = JSON.parse(data);
        var username = req.query.username;
        var password = req.query.password;
        for (var i = 0; i < jsondata.length; i++) {

            if (username == jsondata[i].username && password == jsondata[i].password) {
                respone = {
                    status: true
                };
                res.end(JSON.stringify(respone));
            } else
                respone = {
                    status: false
                };
            res.end(JSON.stringify(respone));
        }
    });
})
app.get('/product', function (req, res) {
    var jsonPro = readData();
    res.render('index', products = {jsonPro});
    res.end();
})

function readData() {
    return JSON.parse(fs.readFileSync('./product.json', 'utf8'));
}

app.get('/', function (req, res) {
    var products = readData();
    console.log(products);
    res.end();
});
app.get('/tinhTien', function (req, res) {
    var qua = req.query.quantity;
    var price = req.query.price;
    var total = parseFloat(price) * parseFloat(qua);
    res.send(total + '');
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server is running!", host, port)
})