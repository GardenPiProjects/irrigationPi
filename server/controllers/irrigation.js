"use strict";
const gpio = require('gpio');

module.exports={
    startIrrigation(){
        console.log('irrigating');
	let gpio14 = gpio.export(18,{
            direction:'out',
            interval:200,
            ready:function(){
                    gpio14.set();
                    setTimeout(function() {
                        gpio14.reset(); }, 1000);
            }});
    }
}
