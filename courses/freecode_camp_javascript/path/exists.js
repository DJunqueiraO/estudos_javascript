const fs = require('fs');

module.exports = path => {
    let exists = false
    fs.access(path, fs.constants.F_OK, (err) => {
        exists = !err;
    })
    return exists;
};