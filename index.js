const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const data = require('./lib/data');

const app = {};

app.config = {
    port: 3000,
};

data.update('test', 'newFile', { name: 'England', lang: 'English' }, (err) => {
    console.log(err);
});

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`application running mode: ${process.env.NODE_ENV}`);
        console.log(`listening to port ${app.config.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
