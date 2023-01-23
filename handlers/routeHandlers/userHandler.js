const handler = {};

handler.userHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a user url',
    });
};

module.exports = handler;
