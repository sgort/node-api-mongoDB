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
    }};

console.log('FIRST:');
for (let [key, value] of Object.entries(brpObject)) {
    console.log(`${key}: ${value}`);
};

console.log('');
console.log('SECOND:');
  
// Define recursive function to have nested values of brpObject being pushed into resultArray
// Usage:
// getValues(var brpObject = Object, var ResultArray = Array)
function getValues(brpObject, resultArray) {
    for(var key in brpObject) {
        if(brpObject[key] instanceof Object) {
            //console.log(`${key}`);
            getValues(brpObject[key], resultArray);
        } else {
            //console.log(`${key}: ` + brpObject[key]);
            resultArray.push(key, brpObject[key]);
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
        //console.log(`${key} `);
        getValues(brpObject[key], result);
    }
};


console.log('');
console.log('THIRD:');

result.forEach(function(item, index) {
    console.log(item,index);
});

module.exports = router;