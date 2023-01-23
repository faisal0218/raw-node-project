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

module.exports = utilities;
