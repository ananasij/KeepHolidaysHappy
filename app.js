/* eslint global-require: off */
/* eslint no-param-reassign: off */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var consolidate = require('consolidate');

function initTemplatingEngine(app, partials) {
    var handlebars = require('handlebars');
    var layouts = require('handlebars-layouts');
    var fs = require('fs');

    var viewsPath = path.join(__dirname, 'views');

    partials.forEach(function(partial) {
        var fileName = path.join(viewsPath, partial + '.hbs');
        var layoutTemplate = fs.readFileSync(fileName, 'utf8');
        handlebars.registerPartial('layout', layoutTemplate);
    });

    handlebars.registerHelper(layouts(handlebars));

    app.engine('hbs', consolidate.handlebars);
    app.set('views', viewsPath);
    app.set('view engine', 'hbs');
}

function initRoutes(app) {
    var routes = require('./routes/routes');
    app.use('/', routes);
}

function initErrorHandlers(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
}

var app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

initTemplatingEngine(app, ['layout']);
initRoutes(app);
initErrorHandlers(app);

module.exports = app;