var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var app = express();
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(session({ secret: 'hauthlogggg' }));
app.use(passport.initialize());
app.use(passport.session());


//app.set('view-engine', '.ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'src/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


require('./src/config/passport')(passport);

require('./src/config/auth')(app, passport);
require('./src/routes/userroutes')(app, passport);
require('./src/routes/publicroutes')(app, passport);

app.listen(port, function() {
    console.log("Listening on port " + port);
});