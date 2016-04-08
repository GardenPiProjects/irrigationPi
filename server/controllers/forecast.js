"use strict";
const settings = require('../../settings'),
    request = require('request');

module.exports = {
    getForecastInfo(){
        return new Promise((resolve, reject)=> {
            request(settings.forcastio, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(JSON.parse(body).currently.precipProbability);
                    resolve(JSON.parse(body).currently.precipProbability);
                }
                    reject('an error occured');
            });
        });
    }
}



