"use strict";
const forecast = require('./forecast'),
        DailyReport = require('../models/DailyReport'),
        camera = require('./camera'),
        temperature =require('./temperature'),
        CronJob = require('cron').CronJob;

module.exports = {
    init(){

        let photourl,
            precipProbability,
            checksToDo = [camera.takePhoto(),forecast.getForecastInfo()];
        new CronJob('20 * * * * *', function() {
            Promise.all(checksToDo).then((data)=>{
                console.log(data);
                photourl = data[0];
                precipProbability = data[1];
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