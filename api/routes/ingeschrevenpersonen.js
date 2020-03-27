const express = require('express');
const router = express.Router();
const axios = require('axios');

// Constant URL & API key value for Haal Centraal BRP
const haalCentraalAPI ='https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen';
const haalCentraalAPIKey = 'drsgPGjarGGRl2pKQTnLqfj3NfsTPBhR';

/*
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
    console.log('Displaying stored data:', data._embedded.verblijfplaatshistorie[0].woonplaatsnaam);
  }
};
// Sent the request out
request.send();
*/

// GET ingeschreven Natuurlijke Personen
let config = {'x-api-key': haalCentraalAPIKey};
axios.get(`${haalCentraalAPI}/999994669`, {headers: config})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
});

/*
// GET verblijfplaatshistorie
axios.get(`${haalCentraalAPI}/999994669/verblijfplaatshistorie`, {headers: config})
  .then(response => {
    console.log(response.data._embedded.verblijfplaatshistorie[1]);
  })
  .catch(error => {
    console.log(error);
});
*/

// Code for tutorial
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