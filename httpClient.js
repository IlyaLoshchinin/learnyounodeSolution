/* Write a program that performs an HTTP GET request to a URL provided to you
 as the first command-line argument. Write the String contents of each
 "data" event from the response to a new line on the console (stdout). */

const http = require('http');
// The International Space Station
// is moving at close to 28,000 km/h
// so its location changes really fast! Where is it right now?
const fetchUrl = 'http://api.open-notify.org/iss-now.json';

http
  .get(process.argv[2] || fetchUrl, (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.log);
  })
  .on('error', (err) => {
    console.error(`problem with request: ${err.message}`);
  });

// http.get() calls req.end() automatically.
// req.end();
