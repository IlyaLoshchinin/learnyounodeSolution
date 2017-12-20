const fs = require('fs');
const path = process.argv[2] || process.argv[1];
const data = fs.readFileSync(path , {encoding: 'utf-8'});
console.log(data.match(/\n/gm).length);