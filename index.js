const Image = require('./Image.js');
const ImageSelector = require('./ImageSelector.js')

// get all images from current folder
const pwd = __dirname;
const imagesPath = pwd + '/Wallpapers/';
let imagesList;
(async () => {
    try {
        imagesList = await ImageSelector.getImagesList(imagesPath);
    } catch (err) {
        console.log(`Error fetching files. Reason: ${err.message}`);
        process.exit(0);
    }
})();

// upload images

// get images ids

// function call
// (async () => {
//     const resp = await Image.uploadFile('./Wallpapers/bleach.jpg');
//     if (resp === 'NOK') {
//         console.log("Ended in upload error");
//     }
// })();