const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'Hello, from sample.',
    });
};

module.exports = handler;
