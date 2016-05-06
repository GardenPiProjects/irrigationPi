"use strict";
const forecast = require('./forecast'),
        DailyReport = require('../models/DailyReport'),
        camera = require('./camera'),
        temperature =require('./temperature'),
        irrigation = require('./irrigation'),
        CronJob = require('cron').CronJob;

module.exports = {
    init(){
        let photourl,
            precipProbability,
            irrigated = false,
            checksToDo = [camera.takePhoto(),forecast.getForecastInfo(),temperature.measureTemperature()];
        new CronJob('20 * * * * *', function() {
            Promise.all(checksToDo).then((data)=>{
                console.log(data);
                photourl = data[0];
                precipProbability = data[1];
                // if(precipProbability<0.6){
                //     irrigation.startIrrigation();
                //     irrigated = true;
                // }
            });
        }, null, true, 'America/Los_Angeles');

        //1.scedule event->take photo OK
        //2. collect temperature
        //3. check rainprobability OK
        //4. irrigate if neccesary
        //5. save all to database
        //6. take another photo to check irrigation has stopped
        //TODO: Error handling
    }
}