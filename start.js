"use strict";
const dotenv = require('dotenv').config();
const controller = require('./server/controllers/masterController');

controller.init();
