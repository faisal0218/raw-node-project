const { StringDecoder } = require('string_decoder');
const url = require('url');
const { notFoundHandler } = require('../handlers/notFoundHandler');
const routes = require('../routes');

const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parsedURL.query;
    const header = req.headers;

    const requestProperties = {
        parsedURL,
        path,
        method,
        queryString,
        header,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[path] ? routes[path] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            res.writeHead(statusCode);
            res.end(payloadString);
        });
        res.end('Hello, Programmers!');
    });
};

module.exports = handler;
