"use strict";
const forecast = require('./forecast'),
        DailyReport = require('../models/DailyReport'),
        camera = require('./camera'),
        temperature =require('./temperature'),
        irrigation = require('./irrigation'),
        saveData = require('../models/DAL/save'),
        CronJob = require('cron').CronJob;

module.exports = {
    init(){
        let photourl,
            precipProbability,
            irrigated = false,
            currentTemp;
        new CronJob('20 * * * * *', function() {
            Promise.all([camera.takePhoto(),forecast.getForecastInfo(),temperature.measureTemperature()]).then((data)=>{
                console.log(data);
                photourl = data[0];
                precipProbability = data[1];
                currentTemp = data[2];

                // if(precipProbability<0.6){
                //     irrigation.startIrrigation();
                //     irrigated = true;
                // }
                const report = new DailyReport(currentTemp, photourl, precipProbability, false);
                saveData(report);
            });
        }, null, true, 'America/Los_Angeles');
//alert!! Is cronJob really doing all checks each time?
        //1.scedule event->take photo OK
        //2. collect temperature OK
        //3. check rainprobability OK
        //4. irrigate if neccesary
        //5. save all to database
        //6. take another photo to check irrigation has stopped
        //TODO: Error handling
    }
}