const fs = require('fs');

function dump (fileName, obj) {
    console.log(`[FileDumper] Attempting to write fetched results to local disk at ./logs/out_${fileName}.log`);
    fs.writeFileSync(`./logs/out_${fileName}.log`, JSON.stringify(obj));
    return;
}

module.exports = {
    dump: dump
}
