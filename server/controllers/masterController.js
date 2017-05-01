"use strict";
const forecast = require('./forecast');
const DailyReport = require('../models/DailyReport');
const irrigation = require('./irrigation');
const saveData = require('../models/DAL/save');
const CronJob = require('cron').CronJob;

module.exports = {
  init() {
    let precipProbability;
    let irrigated = false;
    new CronJob('20 * * * * *', function() {    
	Promise(forecast.getForecastInfo()).then((data) => {      
  	console.log(data);
    precipProbability = data[1];
        if(precipProbability<0.6){
             irrigation.startIrrigation();
            irrigated = true;
        }

       const report = new DailyReport(precipProbability, irrigated);
       saveData(report);
       irrigated = false;
     });
    }, null, true, 'Europe/Stockholm');
  }
}

