"use strict";
class DailyReport {
  constructor(probabilityOfRain, irrigated) {
    this.probabilityOfRain = probabilityOfRain;
    this.irrigated = irrigated;
    this.timestamp = Date.now();
  }
}

module.exports = DailyReport;
