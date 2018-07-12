var express = require('express');
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/value', function(req, res) {
    res.send('1234567890');
});
app.listen(6060, function() {
    console.log('Webservice published on port 6060...');
});