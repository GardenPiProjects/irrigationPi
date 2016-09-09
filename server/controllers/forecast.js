"use strict";
const settings = require('../../settings');
const request = require('request');

module.exports = {
  getForecastInfo() {
    return new Promise((resolve, reject) => {
      request(settings.forcastio, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          try {
            resolve(JSON.parse(body).currently.precipProbability);
          }
          catch (e) {
            resolve('precipitation probability could not be found');
          }
        }
        resolve('precipitation probability could not be found');
      });
    });
  }
}
