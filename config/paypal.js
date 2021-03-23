const paypal = require('paypal-rest-sdk');

//Configure Paypal
module.exports = () => {
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': `${process.env.CLIENT_ID}`,
        'client_secret': `${process.env.API_KEY}`
    });
}