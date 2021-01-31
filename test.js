const request = require('request');

const options = {
    url: 'http://localhost:3030/flights?date=2020-08-01',
    method: 'Get',


};

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    
    console.log(json);
});