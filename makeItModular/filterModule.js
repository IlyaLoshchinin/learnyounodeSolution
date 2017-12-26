const fs = require('fs');

/**
 * Get a list of files in a given directory,
 * filtered by the extension of the files
 *
 * @param {String} directoryPath
 * @param {String} extension
 * @param {(err: NodeJS.ErrnoException, data: (string)[])} callback
 *
 */
module.exports = function(directoryPath, extension, callback) {
  if (!directoryPath || !extension) {
    return callback(new Error('No arguments!'));
  }

  // PASS
  fs.readdir(directoryPath, 'utf-8', (err, files) => {
    if (err) return callback(err);
    callback(null, files.filter(el => el.endsWith(`.${extension}`)));
  });

  //NOT PASS - BUT CORRECT TOO
  // fs.stat(directoryPath, (err, stats) => {
  //   if (err) return callback(err);
  //   if (stats.isDirectory()) {
  //     fs.readdir(directoryPath, 'utf-8', (err, files) => {
  //       if (err) return callback(err);
  //       callback(null, files.filter(el => el.endsWith(`.${extension}`)));
  //     });
  //   }
  // });
};
