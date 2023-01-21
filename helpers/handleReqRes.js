const { StringDecoder } = require('string_decoder');
const url = require('url');

const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryString = parsedURL.query;
    const header = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        res.end('Hello, Programmers!');
    });
    console.log(path, method, queryString, header);
};

module.exports = handler;
