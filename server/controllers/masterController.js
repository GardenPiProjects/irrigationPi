"use strict";
const forecast = require('./forecast'),
        temperature =require('./temperature'),
        DailyReport = require('../models/DailyReport'),
        CronJob = require('cron').CronJob;
module.exports = {
    init(){
        let temperature,
            photourl;
        new CronJob('* * * * * *', function() {
            let today = new DailyReport(25,"www.c.se",0.5,true);
            console.log(today);
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