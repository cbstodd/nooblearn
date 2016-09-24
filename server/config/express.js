var express    = require('express'),
    bodyParser = require('body-parser');

module.exports = function( app, config ) {

    app.set('views', config.rootPath + '/public/views');
    app.set('view engine', 'ejs');

//Sets file paths to start from public
    app.use(express.static(config.rootPath + '/public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


};