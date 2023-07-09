const Image = require('./Image.js');
const ImageSelector = require('./ImageSelector.js');
const FileDumper = require('./FileDumper.js');

// get run time stamp for writing log results
const date = new Date(Date.now());
const dateFormatted = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
const timeFormatted = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
const timeStampFormatted = dateFormatted + "-" + timeFormatted;
console.log(`[Main] Process task begin @ ${timeStampFormatted}`);

(async () => {
    console.time('Process Took');
    let imagesList = [];
    const fileUploadPromises = [];

    try {
        // get all images from user defined folder
        const imagesPath = process.env.WA_PWD;
        imagesList = await ImageSelector.getImagesList(imagesPath);
    } catch (err) {
        console.log(`Error fetching files. Reason: ${err.message}`);
        console.timeEnd('Process Took');
        process.exit(0);
    }

    // upload each image from the list of images in directory
    for(let i = 0; i < imagesList.length; i++) {
        fileUploadPromises.push(Image.uploadFile(imagesList[i]));
    }
    try {
        result = await Promise.allSettled(fileUploadPromises);
    } catch (err) {
        console.log(`Error uploading files. Reason: ${err.message}`);
        console.timeEnd('Process Took');
        process.exit(0);
    }

    // log result of upload to local disk
    FileDumper.dump(timeStampFormatted, result);
    console.timeEnd('Process Took');
})()
.catch(err => { console.log(err); process.exit(0); });
