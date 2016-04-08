"use strict";
const forecast = require('./forecast'),
        DailyReport = require('../models/DailyReport'),
        camera = require('./camera'),
        temperature =require('./temperature'),
        CronJob = require('cron').CronJob;

module.exports = {
    init(){

        let photourl,
            precipProbability;
        new CronJob('20 * * * * *', function() {
            camera.takePhoto().then(url=>{
                photourl = url;
                forecast.getForecastInfo().then(precipitationProbability =>{
                    precipProbability = precipitationProbability;

                }).then(()=>{
                    console.log(photourl + ' ' + precipProbability);
                });;
            })
        }, null, true, 'America/Los_Angeles');

        //1.scedule event->take photo OK
        //2. collect temperature
        //3. check rainprobability OK
        //4. irrigate if neccesary
        //5. save all to database
        //6. take another photo to check irrigation has stopped
    //TODO: Add promises to array
        //TODO: Error handling
    }
}