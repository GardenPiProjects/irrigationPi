"use strict";
const gpio = require('gpio');

module.exports={
    startIrrigation(){
        let gpio2 = gpio.export(26,{
            direction:'out',
            interval:200,
            ready:function(){
                    gpio2.set();
                    setTimeout(function() {
                        gpio2.reset(); }, 1800000);
            }});
    }
}