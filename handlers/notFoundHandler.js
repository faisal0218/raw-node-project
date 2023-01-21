const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(400, {
        message: 'Not found',
    });
    console.log('sample handler');
};

module.exports = handler;
