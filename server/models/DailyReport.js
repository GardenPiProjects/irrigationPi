"use strict";
class DailyReport {
  constructor(temperature, url, probabilityOfRain, irrigated) {
    this.temperature = temperature;
    this.url = url;
    this.probabilityOfRain = probabilityOfRain;
    this.irrigated = irrigated;
    this.timestamp = Date.now();
  }
}

module.exports = DailyReport;
