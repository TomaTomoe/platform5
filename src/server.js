const https = require('https');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.port || '443';

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
});

app.use(express.static('./build'));

app.get('index.html', function (req, res) {
    res.sendFile('index.html', { root: './build/'});
  });

var privateKey = fs.readFileSync(path.join(__dirname, 'key.pem' ));
var certificate = fs.readFileSync(path.join(__dirname, 'cert.pem' ));

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
