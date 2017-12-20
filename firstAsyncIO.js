const fs = require('fs');
const path = process.argv[2] || process.argv[1];
fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if(err){
        console.error('There was an error reading the file!\n', err);
        return;
    }
    console.log(data.match(/\n/gm).length);
});