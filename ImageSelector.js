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
                reject(err);
            }
            console.log('ImageSelector: ', files);
            resolve(files);
        });
    })
}

module.exports = {
    getImagesList: getImagesList
}