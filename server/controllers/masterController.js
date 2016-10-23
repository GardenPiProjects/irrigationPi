"use strict";
const forecast = require('./forecast');
const DailyReport = require('../models/DailyReport');
const camera = require('./camera');
const temperature = require('./temperature');
const irrigation = require('./irrigation');
const saveData = require('../models/DAL/save');
const CronJob = require('cron').CronJob;

module.exports = {
  init() {
    let photourl;
    let precipProbability;
    let irrigated = false;
    let currentTemp;
    // new CronJob('20 * * * * *', function() {    
      new CronJob('00 14 * * * *', () => {
      Promise.all([camera.takePhoto(), forecast.getForecastInfo(), temperature.measureTemperature()]).then((data) => {
        console.log(data);
        photourl = data[0];
        precipProbability = data[1];
        currentTemp = data[2];

        // if(precipProbability<0.6){
        //     irrigation.startIrrigation();
        //     irrigated = true;
        // }

        const report = new DailyReport(currentTemp, photourl, precipProbability, irrigated);
        saveData(report);
      });
    }, null, true, 'Europe/Stockholm');
//alert!! Is cronJob really doing all checks each time?
    //1.scedule event->take photo OK
    //2. collect temperature OK
    //3. check rainprobability OK
    //4. irrigate if neccesary On hold
    //5. save all to database OK
    //6. take another photo to check irrigation has stopped On hold
  }
}

