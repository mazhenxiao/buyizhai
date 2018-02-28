var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var buyizhai = require('./routes/buyizhai');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.ejs',require('ejs').__express)
//app.set('view engine', 'jade');
//app.set('view engine', 'ejs');
app.set('view engine','ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//处理静态文件
app.use(express.static(path.join(__dirname, 'public')));
//路由
app.use('/', index);
app.use('/users', users);
app.use('/buyizhai',buyizhai);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
