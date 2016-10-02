var express          = require('express'),
    mongoose         = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

//pulls and envokes config route function in express.js
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

// Start the server
app.listen(config.port);
console.log('## Express listening on port ' + config.port + ' ##');