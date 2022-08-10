require('dotenv').config();

const https = require('https');
const path = require('path');
const fs = require('fs');
const express = require('express');
const LiqPay = require('liqpayjs-sdk');
const { v4: uuidv4 } = require('uuid');

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

const privateKey = fs.readFileSync(path.join(__dirname, 'key.pem' ));
const certificate = fs.readFileSync(path.join(__dirname, 'cert.pem' ));

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);


const private_key = process.env.LIQ_PRIVATE_KEY;
const public_key = process.env.LIQ_PUBLICK_KEY;
const liqpay = new LiqPay(public_key, private_key);

app.get('/getPayment', function (req, res) {
    const uniqId = uuidv4();
    const data = liqpay.cnb_object({
        'action'         : 'paydonate',
        'amount'         : '1',
        'currency'       : 'USD',
        'description'    : 'donation for ukrainians',
        'order_id'       : uniqId,
        'version'        : '3',
        'language'       : 'en',
        'result_url'     : '/',
        });
    res.json(data);
  });
