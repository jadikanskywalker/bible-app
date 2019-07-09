var express = require('express'),
    session = require('express-session'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
	  passport = require('passport'),
	  LocalStrategy = require('passport-local'),
    User = require("./models/user"),
	  methodOverride = require('method-override'),
    //cookieParser = require("cookie-parser"),
    gulpfile = require('./gulpfile').execFile;

var indexRoutes = require('./routes'),
    dashboardRoutes = require('./routes/dashboard'),
    dashboardContentRoutes = require('./routes/dashboard/content');

mongoose.connect('mongodb://localhost:27017/bible-app', {
	useNewUrlParser: true,
	useCreateIndex: true
})
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.use(cookieParser());
//app.use(flash());

app.use(session({
	secret: 'this is an awesome bible app',
	resave: false,
	saveUninitialized: false,
  cookie: { httpOnly: false }
}));

app.locals.moment = require('moment');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.user = req.user;
	//res.locals.error = req.flash("error");
	//res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/dashboard/content', dashboardContentRoutes);

app.listen(8080, function() {
    console.log('Bible App Operational');
});
