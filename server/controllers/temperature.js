"use strict";
const ds18b20 = require('ds18b20');

module.exports = {
    measureTemperature()
    {return new Promise((resolve, reject)=> {
        ds18b20.sensors(function (err, ids) {
            console.log(err);
            console.log(ids);
        });

        ds18b20.temperature('28-0115907b5dff', function(err, value) {
            console.log('Current temperature is', value);
            resolve(value);
    });


        //https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware
        //https://www.adafruit.com/products/381
        //https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing
// // ... or sync call
//     console.log('Current temperature is' + ds18b20.temperatureSync('10-00080283a977'));
//
// // default parser is the decimal one. You can use the hex one by setting an option
//     ds18b20.temperature('10-00080283a977', {parser: 'hex'}, function(err, value) {
//         console.log('Current temperature is', value);
//     });
//
//     console.log('Current temperature is' + ds18b20.temperatureSync('10-00080283a977', {parser: 'hex'}));
//
    }
}
//sudo modprobe wire
// sudo modprobe w1-gpio
// sudo modprobe w1-therm