"use strict";
const dotenv = require('dotenv').config();
const controller = require('./server/controllers/masterController');
const server = require('./server/httpServer');

server.init();
controller.init();
