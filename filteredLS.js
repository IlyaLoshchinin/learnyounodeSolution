const fs = require('fs');
const [, , pathFolder, extension] = process.argv;
if (!pathFolder || !extension) return;
fs.stat(pathFolder, (err, stats) => {
  if (err) {
    console.error('The folder path is invalid or access is denied!');
    return;
  }
  if (stats.isDirectory()) {
    fs.readdir(pathFolder, 'utf-8', (err, files) => {
      files
        .filter(el => el.endsWith(`.${extension}`))
        .forEach(el => console.log(el));
    });
  }
});
