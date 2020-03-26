const express = require('express');
const router = express.Router();
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Constant URL & API key value for Haal Centraal BRP
const haalCentraalAPI ='https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen';
const haalCentraalAPIKey = 'drsgPGjarGGRl2pKQTnLqfj3NfsTPBhR';

// Initialize our XMLHttpRequest object
var request = new XMLHttpRequest();


// Specify the request with arguments GET, endpoint, and make sure it's running asynchronously
request.open('GET',`${haalCentraalAPI}/999994669/verblijfplaatshistorie`,true);
request.setRequestHeader('x-api-key', haalCentraalAPIKey);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    var data = JSON.parse(this.responseText);
    console.log('Displaying stored data:', data.burgerservicenummer);
  }
};
// Sent the request out
request.send();


// Now do the same with app.get
var app = express();

app.get(`${haalCentraalAPI}9999994669/verblijfplaatshistorie`, (req,res) => {
    if (error) return console.error(error);
        res.writeHead(200, {
        'x-api-key': haalCentraalAPIKey,
        'Content-Type': 'application/json'
    });
    res.write();
    res.end();
});


// Handle incoming GET requests to /personen 
router.get('/', (req, res) => {
    res.header('x-api-key', haalCentraalAPIKey);
    res.status(200).json({
        message: 'Personen were fetched'
    });
});

router.get('/:BSN', (req, res, next) => {
    const id = req.params.BSN;
    if (id === '999994669') {
        res.status(200).json({
            message: 'You discovered the special BSN',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed a BSN'
        });
    }
});

module.exports = router;