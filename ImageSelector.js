const fs = require('fs');

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// '                                                                           '
// '  This module fetches the list of files (note they are all files, not just '
// '  jpg, png, jpeg) from a given path, as a list of strings                  '
// '                                                                           '
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function getImagesList (path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                return reject(err);
            }
            console.log(`ImageSelector found images at "${path}"`, files);
            files.forEach((file, idx) => {
                files[idx] = (path[path.length - 1] === '/') ? (path + files[idx]) : (path + '/' + files[idx]);
            });
            return resolve(files);
        });
    })
}

module.exports = {
    getImagesList: getImagesList
}