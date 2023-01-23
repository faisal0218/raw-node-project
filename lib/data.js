const fs = require('fs');
const path = require('path');

const lib = {};

lib.basedir = path.join(__dirname, '/../.data/');

lib.create = (dir, file, data, callback) => {
    fs.open(
        `${lib.basedir + dir}/${file}.json`,
        'wx',
        (err, fileDescriptor) => {
            if (!err && fileDescriptor) {
                const stringData = JSON.stringify(data);

                fs.writeFile(fileDescriptor, stringData, (err2) => {
                    if (!err2) {
                        fs.close(fileDescriptor, (err3) => {
                            if (!err3) {
                                callback(false);
                            } else {
                                callback('Error file closing.');
                            }
                        });
                    } else {
                        callback('Error writing to a new file.');
                    }
                });
            } else {
                callback(err);
            }
        }
    );
};

lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

module.exports = lib;
