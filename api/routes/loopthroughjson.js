const express = require('express');
const router = express.Router();

var brpObject = {
    "geslachtsaanduiding": "vrouw",
"naam": {
    "aanhef": "Geachte mevrouw 'S Streeveld-te Schaars",
    "aanschrijfwijze": "jonkvrouw Ż.Å.Đ. 'S Streeveld-te Schaars",
    "gebruikInLopendeTekst": "jonkvrouw 'S Streeveld-te Schaars",
    "aanduidingNaamgebruik": "eigen_partner",
    "voornamen": "Żáïŀëñøŕ Åłéèç Đëļŧå",
    "voorletters": "Ż.Å.Đ.",
    "geslachtsnaam": "Streeveld",
    "voorvoegsel": "'S"
},
"leeftijd": 58,
"nationaliteit": [
    {
        "nationaliteit": {
            "code": "0001",
            "omschrijving": "Nederlandse"
        }
    }
],
"verblijfplaats": {
    "functieAdres": "woonadres",
    "identificatiecodeNummeraanduiding": "0599200000316239",
    "identificatiecodeAdresseerbaarObject": "0599010000287986",
    "huisnummer": 4,
    "woonplaatsnaam": "Rotterdam",
    "naamOpenbareRuimte": "Johan in 't Veltstraat",
    "postcode": "3078JG",
    "straatnaam": "Johan in 't Veltstraat",
    "indicatieVestigingVanuitBuitenland": true,
    "gemeenteVanInschrijving": {
        "code": "0599",
        "omschrijving": "Rotterdam"
    },
    "datumVestigingInNederland": {
        "datum": "1993-09-10",
        "jaar": 1993,
        "maand": 9,
        "dag": 10
    },
    "datumAanvangAdreshouding": {
        "datum": "1994-05-08",
        "jaar": 1994,
        "maand": 5,
        "dag": 8
    }
},
"burgerservicenummer": "999994669",
"geboorte": {
    "datum": {
        "datum": "1961-12-30",
        "jaar": 1961,
        "maand": 12,
        "dag": 30
    },
    "plaats": {
        "code": "0402",
        "omschrijving": "Hilversum"
    },
    "land": {
        "code": "6030",
        "omschrijving": "Nederland"
    }
}
};

/*
console.log('FIRST:');
let result = [];
for (let [key, value] of Object.entries(brpObject)) {
    console.log('key: '+ key + ', value: '+ value);
    result.push(key,value);
};
/*
console.log('');
console.log('SECOND:');
 
// Define recursive function to have nested values of responseObject being pushed into resultArray
function getValues(responseObject, resultArray) {
    for(var key in responseObject) {
        if(responseObject[key] instanceof Object) {
            getValues(responseObject[key], resultArray);
        } else {
            resultArray.push(key, responseObject[key]);
        };
    };
};


// Loop through JSON body object to gather resultArray
var result = [];
for(let [key, value] of Object.entries(brpObject)) {
    if (!(brpObject[key] instanceof Object)) {
        result.push(key, value);
    } else {
        getValues(brpObject[key], result);
    }
};
//return result;
*/

console.log('');
console.log('SECOND:');

let result = []
function eachRecursive(obj)
{
    for (var k in obj)
    {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            console.log('KEY: '+ k.toUpperCase());
            result.push(k.toUpperCase())
            eachRecursive(obj[k]);
        }
        else
            console.log('key: '+ k, 'value: '+ obj[k]);
            result.push(k, obj[k]);
    }
}

eachRecursive(brpObject);
/*
console.log('');
console.log('THIRD:');

function iterate(obj) {
    Object.keys(obj).forEach(key => {

    console.log('key: '+ key + ', value: '+ obj[key]);

    if (typeof obj[key] === 'object') {
            iterate(obj[key])
        }
    })
}

iterate(brpObject);
*/

module.exports = router;