const crypto = require('crypto');

const utilities = {};

utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

utilities.hash = (str) => {
    if (typeof str === 'string' && str.trim > 1) {
        let hash = crypto
            .createHmac('sha256', 'a4ghac')
            .update(str)
            .digest('hex');

        return hash;
    } else {
        return false;
    }
};

utilities.createRandomString = (strlen) => {
    let length = strlen;
    length = typeof strlen === 'number' && strlen > 0 ? strlen : false;

    if (length) {
        let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let output = '';
        for (let i = 1; i < length; i += 1) {
            const randomChar = possibleCharacters.charAt(
                Math.floor(Math.random() * possibleCharacters.length)
            );
            output += randomChar;
        }
        return output;
    }

    return false;
};

module.exports = utilities;
