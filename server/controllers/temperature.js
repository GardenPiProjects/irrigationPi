"use strict";
const ds18b20 = require('ds18b20');

module.exports = {
 measureTemperature ()
  {
    return new Promise((resolve, reject) => {
      ds18b20.temperature('28-0115907b5dff', (err, value) => {
        if (err) {
          console.log(err);
          resolve('no temp measured');
        }
//        console.log('Current temperature is', value);
        resolve(value);
      });
    });
  }
}
