var express = require('express');
var ejs = require('ejs');
var configure = require('./configure/configure');
var strings = require('./configure/strings');

var log4js = require('log4js');
log4js.configure('configure/log_config.json');
var logger = log4js.getLogger('default');

var app = express();
app.set('port', 3000);
app.engine('ejs', ejs.renderFile);

app.use(log4js.connectLogger(logger));
app.use('/static', express.static('static'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function (req, res) {
    res.render('index.ejs', strings);
});

app.get('/proxy/*', function(req, res, next) {
    console.log("proxy");
});

app.listen(app.get('port'));