var express = require('express');
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/page.html', function(req, res) {
    res.send(`
<!DOCTYPE html>
<html>
    <head>
        <title>Webservice & CORS</title>
    </head>
    <body>
        <h1>Value from webservice with different origin with CORS protocol:</h1>
        <p id='pid'></p>
        <script>
            fetch('http://localhost:6060/value', {
                method: 'GET',
                mode: 'cors',
            }).then(response => {
                return response.text();
            }).then(result => {
                document.getElementById('pid').innerHTML = result;
            });
        </script>
    </body>
</html>`);
});
app.listen(5050, function() {
    console.log('HTTP server listening on port 5050...');
});