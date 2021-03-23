const port = require('./config/port')
const express = require('express');
require('ejs');
require('dotenv').config()

const app = express();

//Initialize Paypal
const initializePaypal = require('./config/paypal')
initializePaypal()

//Template Engines
app.set('view engine', 'ejs');

//Routes
const homepage = require('./routes/homepage')
const transaction = require('./routes/paypal')
const success = require('./routes/success')
const failure = require('./routes/cancel')


//Middleware
app.use('/', homepage)
app.use('/pay', transaction)
app.use('/success', success)
app.use('/cancel', failure)

//PORT
app.listen(port, () => {
    console.log(`My app is listening on http://localhost:${port}...`)
})