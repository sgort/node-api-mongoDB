const express = require('express');
const router = express.Router();

var brpObject = {
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
                    },
                    "datumInschrijvingInGemeente": {
                        "datum": "1992-05-08",
                        "jaar": 1992,
                        "maand": 5,
                        "dag": 8
                    }
                },
                "burgerservicenummer": "999994669",
            };


console.log('FIRST:');
for (let [key, value] of Object.entries(brpObject)) {
    console.log(`${key}: ${value}`);
};

console.log('');
console.log('SECOND:');
  
// Define recursive function to have nested values of responseObject being pushed into resultArray
function getValues(responseObject, resultArray) {
    for(var key in responseObject) {
        if(responseObject[key] instanceof Object) {
            console.log(`${key}`);
            getValues(responseObject[key], resultArray);
        } else {
            console.log(`${key}: ` + responseObject[key]);
            resultArray.push(key, responseObject[key]);
        };
    };
};

// Loop through JSON body object to gather resultArray
var result = [];
for(let [key, value] of Object.entries(brpObject)) {
    if (!(brpObject[key] instanceof Object)) {
        console.log(`${key}: ${value}`);
        result.push(key, value);
    } else {
        console.log(`${key} `);
        getValues(brpObject[key], result);
    }
};
//return result;

/*
console.log('');
console.log('THIRD:');

result.forEach(function(item, index) {
    console.log(item,index);
});
*/
module.exports = router;