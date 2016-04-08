"use strict";
const forecast = require('./forecast'),
        DailyReport = require('../models/DailyReport'),
        camera = require('./camera'),
        temperature =require('./temperature'),
        CronJob = require('cron').CronJob;

module.exports = {
    init(){

        let temperature,
            photourl;
        new CronJob('* * * * * *', function() {
            camera.takePhoto().then(url=>{
                console.log(url);
            })
            forecast.getForecastInfo().then(precipitationProbability =>{
                //TODO:add scheduled event for collecting data
                //TODO:add to database together with timestamp
                console.log(precipitationProbability);
            });

        }, null, true, 'America/Los_Angeles');

        //1.scedule event->take photo
        //2. collect temperature
        //3. check rainprobability
        //4. irrigate if neccesary
        //5. save all to database

    }
}