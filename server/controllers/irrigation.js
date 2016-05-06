"use strict";
const gpio = require('gpio');

module.exports={
    startIrrigation(){
        let gpio17 = gpio.export(17,{
            direction:'out',
            interval:200,
            ready:function(){
                    gpio17.set();
                    setTimeout(function() {
                        gpio17.reset(); }, 1800000);
            }});
    }
}