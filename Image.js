const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// '                                                                           '
// '  curl -i -X POST https://graph.facebook.com/v17.0/$PHONE_NUMBER/media \   '
// '  -H "Authorization: Bearer $WA_TOKEN" \                                   '
// '  -F 'file=@"/Users/sp03/Pictures/Wallpapers/TODD.jpg"' \                  '
// '  -F 'type="image/jpeg"' \                                                 '
// '  -F 'messaging_product="whatsapp"'                                        '
// '                                                                           '
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

const url = `https://graph.facebook.com/v17.0/${process.env.WA_PHONE_NUMBER}/media`;

async function uploadFile(file) {
    console.log(`Attempting upload of file: ${file}`);
    try {
        const stream = fs.createReadStream(file);
        const bodyFormData = new FormData();
        bodyFormData.append('file', stream)
        bodyFormData.append('type', 'image/jpeg')
        bodyFormData.append('messaging_product', 'whatsapp')
        const response = await axios.post(url, bodyFormData, {
            headers: {
                Authorization: `Bearer ${process.env.WA_TOKEN}`
            }
        });
        console.log(`File: ${file} ---> ${response.data.id}`);
        return { name: file, id: response.data.id };
    } catch (err) {
        console.log(`File: ${file} ---X ${err.message}`);
        return { name: file, id: -1 };
    }
}

module.exports = {
    uploadFile: uploadFile
}