var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/noobsee',
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://cbstodd:Damntone8@ds019976.mlab.com:19976/noobsee',
        port: process.env.PORT || 80
    }
};