const filter = require('./filterModule');
const [, , pathFolder, extension] = process.argv;
 filter(pathFolder, extension, (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    data.forEach(el => console.log(el));
 });
