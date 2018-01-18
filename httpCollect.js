'use strict';
/*   HTTP COLLECT
 Write a program that performs an HTTP GET request to a URL provided to you
 as the first command-line argument. Collect all data from the server
 (not just the first "data" event) and then write two lines to the console
 (stdout).

 The first line you write should just be an integer representing the number
 of characters received from the server. The second line should contain the
 complete String of characters sent by the server.*/

const http = require('http');
const bl = require('bl');

// v1
// http.get(process.argv[2], (res) => {
//   res.setEncoding('utf8');
//   let rawData = '';
//
//   res.on('data', (data) => {
//     rawData += data;
//   });
//
//   res.on('end', () => {
//     console.log(rawData.length);
//     console.log(rawData);
//   });
//
//   res.on('error', console.error);
// }).on('error', (err) => {
//   console.error('Error with request %s', err.message);
// });

// v2  - Better? Perhaps!
http.get(process.argv[2], (res) => {
  res.pipe(bl((err, data) => {
    if (err) return console.error(err);

    console.log(data.length);
    console.log(data.toString());
  }));
}).on('error', (err) => {
  console.error('Error with request %s', err.message);
});
