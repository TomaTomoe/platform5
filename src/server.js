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


app.get('/getPaymentNPO', function (req, res) {
    const private_key_NPO = process.env.LIQ_PRIVATE_KEY_NPO;
    const public_key_NPO = process.env.LIQ_PUBLICK_KEY_NPO;
    const liqpay = new LiqPay(public_key_NPO, private_key_NPO);
    const uniqId = uuidv4();
    const data = liqpay.cnb_object({
        "action"         : "paydonate",
        "amount"         : "1",
        "currency"       : "USD",
        "description"    : "charitable donation for social projects",
        "order_id"       : uniqId,
        "version"        : "3",
        "language"       : "en",
        "result_url"     : "https://5peron.org/thank_you",
        });
    res.json(data);
  });

  app.get('/getPaymentCF', function (req, res) {
    const private_key_CF = process.env.LIQ_PRIVATE_KEY_CF;
    const public_key_CF = process.env.LIQ_PUBLICK_KEY_CF;
    const liqpay = new LiqPay(public_key_CF, private_key_CF);
    const uniqId = uuidv4();
    const data = liqpay.cnb_object({
        "action"         : "paydonate",
        "amount"         : "1",
        "currency"       : "USD",
        "description"    : "charitable donation for provision of Armed Forces of Ukraine",
        "order_id"       : uniqId,
        "version"        : "3",
        "language"       : "en",
        "result_url"     : "https://5peron.org/thank_you",
        });
    res.json(data);
  });
