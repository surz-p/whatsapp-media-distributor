const fs = require('fs');

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// '                                                                           '
// '  This module writes the results of the media upload POST requests to a    '
// '  local file on the disk in the format "out_d-m-year-h-m-s.log" in the     '
// '  subdirectory "./logs" from the current working directory where index.js  '
// '  is called.                                                               '
// '                                                                           '
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function dump (fileName, obj) {
    console.log(`[FileDumper] Attempting to write fetched results to local disk at ./logs/out_${fileName}.log`);
    fs.writeFileSync(`./logs/out_${fileName}.log`, JSON.stringify(obj));
    return;
}

module.exports = {
    dump: dump
}
