"use strict";
const dotenv = require('dotenv').config(),
    controller = require('./server/controllers/masterController'),
    server = require('./server/httpServer');

server.init();
controller.init();
