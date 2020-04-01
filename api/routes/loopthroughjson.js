const express = require('express');
const router = express.Router();

var brpObject = { _links: 
    { self: 
       { href: 'https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999994669' },
      ouders: [ [Object], [Object] ],
      kinderen: [ [Object], [Object] ],
      partnerhistorie: 
       { href: 'https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999994669/partnerhistorie' },
      partners: [ [Object] ],
      verblijfplaatshistorie: 
       { href: 'https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999994669/verblijfplaatshistorie' },
      verblijfstitelhistorie: 
       { href: 'https://www.haalcentraal.nl/haalcentraal/api/brp/ingeschrevenpersonen/999994669/verblijfstitelhistorie' },
      verblijfplaatsNummeraanduiding: 
       { href: 'https://api.test.kadaster.nl/lvbag/api/huidigebevragingen/vhc/nummeraanduidingen/0599200000316239' } },
   geslachtsaanduiding: 'vrouw',
   naam: 
    { aanhef: 'Geachte mevrouw \'S Streeveld-te Schaars',
      aanschrijfwijze: 'jonkvrouw Ż.Å.Đ. \'S Streeveld-te Schaars',
      gebruikInLopendeTekst: 'jonkvrouw \'S Streeveld-te Schaars',
      aanduidingNaamgebruik: 'eigen_partner',
      voornamen: 'Żáïŀëñøŕ Åłéèç Đëļŧå',
      voorletters: 'Ż.Å.Đ.',
      geslachtsnaam: 'Streeveld',
      voorvoegsel: '\'S' },
   leeftijd: 58,
   nationaliteit: [ { nationaliteit: [Object] } ],
   verblijfplaats: 
    { functieAdres: 'woonadres',
      identificatiecodeNummeraanduiding: '0599200000316239',
      identificatiecodeAdresseerbaarObject: '0599010000287986',
      huisnummer: 4,
      woonplaatsnaam: 'Rotterdam',
      naamOpenbareRuimte: 'Johan in \'t Veltstraat',
      postcode: '3078JG',
      straatnaam: 'Johan in \'t Veltstraat',
      indicatieVestigingVanuitBuitenland: true,
      gemeenteVanInschrijving: { code: '0599', omschrijving: 'Rotterdam' },
      datumVestigingInNederland: { datum: '1993-09-10', jaar: 1993, maand: 9, dag: 10 },
      datumAanvangAdreshouding: { datum: '1994-05-08', jaar: 1994, maand: 5, dag: 8 },
      datumInschrijvingInGemeente: { datum: '1992-05-08', jaar: 1992, maand: 5, dag: 8 } },
   burgerservicenummer: '999994669',
   geboorte: 
    { datum: { datum: '1961-12-30', jaar: 1961, maand: 12, dag: 30 },
      plaats: { code: '0402', omschrijving: 'Hilversum' },
      land: { code: '6030', omschrijving: 'Nederland' } }
};

/*
console.log('FIRST:');
var result = [];
for (let [key, value] of Object.entries(brpObject)) {
    result.push(key,value);
};

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
console.log('THIRD:');
let SOURCE_DATA_SELECTION = ['burgerservicenummer', 'naam', 'nationaliteit', 'verblijfplaats'];
/*
let result = []
if (brpObject) {
  for (let keyValue of Object.entries(brpObject)) {
    let key = Object.keys(keyValue)[0]
    let value = keyValue[key]

    if (typeof value !==  'string') {
      value = JSON.stringify(value)
    }


    result.push(key, value)
  }

}
*/
const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

    console.log('key: '+ key + ', value: '+obj[key]);

    if (typeof obj[key] === 'object') {
            iterate(obj[key])
        }
    })
}

iterate(brpObject);

module.exports = router;