"use strict";
const http = require('http');
const fs = require('fs');

module.exports = {
  init() {
    let server = http.createServer((req, res) => {
      switch (req.url) {
        case'/':
          fs.readFile('./index.html', (err, data) => {
            if (!err) {
              console.log('[200] ' + req.method + ' to ' + req.url);
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(data);
              res.end();
            }
            else {
              console.log(err);
              res.writeHead(500, 'Internal server error', { 'Content-Type': 'text/html' });
              res.end('<html><head><title>500 - Internal server error </title></head><body><h1>Internal server error</h1></body></html>');
            }
          });
          break;
      }
    }).listen(process.env.PORT || 8080);
    console.log('server started');
    return server;
  }
}
