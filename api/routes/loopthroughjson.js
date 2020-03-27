const express = require('express');
const router = express.Router();

var brpObject = {
        "_links": {
            "self": {
                "href": "https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999994669/verblijfplaatshistorie"
            }
        },
        "_embedded": {
            "verblijfplaatshistorie": [
                {
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
                {
                    "functieAdres": "woonadres",
                    "locatiebeschrijving": "Woonboot \"'t Lelijk Eentje\"",
                    "woonplaatsnaam": "Rotterdam",
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
                        "datum": "1993-09-10",
                        "jaar": 1993,
                        "maand": 9,
                        "dag": 10
                    },
                    "datumInschrijvingInGemeente": {
                        "datum": "1992-05-08",
                        "jaar": 1992,
                        "maand": 5,
                        "dag": 8
                    },
                    "datumTot": {
                        "datum": "1994-05-08",
                        "jaar": 1994,
                        "maand": 5,
                        "dag": 8
                    }
                },
                {
                    "gemeenteVanInschrijving": {
                        "code": "0402",
                        "omschrijving": "Hilversum"
                    },
                    "datumAanvangAdreshouding": {
                        "datum": "1993-02-15",
                        "jaar": 1993,
                        "maand": 2,
                        "dag": 15
                    },
                    "datumInschrijvingInGemeente": {
                        "datum": "1961-12-30",
                        "jaar": 1961,
                        "maand": 12,
                        "dag": 30
                    },
                    "verblijfBuitenland": {
                        "land": {
                            "code": "8027",
                            "omschrijving": "Kiribati"
                        }
                    },
                    "datumTot": {
                        "datum": "1993-09-10",
                        "jaar": 1993,
                        "maand": 9,
                        "dag": 10
                    }
                },
                {
                    "functieAdres": "woonadres",
                    "huisnummer": 2,
                    "woonplaatsnaam": "Hilversum",
                    "postcode": "1213VK",
                    "straatnaam": "Curaçaolaan",
                    "gemeenteVanInschrijving": {
                        "code": "0402",
                        "omschrijving": "Hilversum"
                    },
                    "datumAanvangAdreshouding": {
                        "datum": "1961-12-30",
                        "jaar": 1961,
                        "maand": 12,
                        "dag": 30
                    },
                    "datumInschrijvingInGemeente": {
                        "datum": "1961-12-30",
                        "jaar": 1961,
                        "maand": 12,
                        "dag": 30
                    },
                    "datumTot": {
                        "datum": "1993-02-15",
                        "jaar": 1993,
                        "maand": 2,
                        "dag": 15
                    }
                }
            ]
        }
    };

console.log('FIRST:');
for (let [key, value] of Object.entries(brpObject)) {
    console.log(`${key}: ${value}`);
};

console.log('');
console.log('SECOND:');
  
// Define recursive function to retrieve nested values
function getValues(brpObject) {
    for(var key in brpObject) {
        if(brpObject[key] instanceof Object) {
            console.log(`${key}`);
            getValues(brpObject[key]);
        } else {
            console.log(`${key}: ` + brpObject[key]);
        };
    };
};

// Loop through JSON body object to gather resultArray
for(let [key, value] of Object.entries(brpObject)) {
    if (!(brpObject[key] instanceof Object)) {
        console.log(`${key}: ${value}`);
    } else {
        console.log(`${key}`);
        getValues(brpObject[key]);
    }
};


module.exports = router;