"use strict";
const forecast = require('./forecast');
module.exports = {
    init(){
        forecast.getForecastInfo().then(precipitationProbability =>{
            //TODO:add scheduled event for collecting data
            //TODO:add to database together with timestamp
            console.log(precipitationProbability);
        });
    }
}