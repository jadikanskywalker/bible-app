var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
	  passport = require('passport'),
	  LocalStrategy = require('passport-local'),
	  methodOverride = require('method-override'),
    gulpfile = require('./gulpfile').execFile;

var indexRoutes = require('./routes/'),
    dashboardRoutes = require('./routes/dashboard/dashboard'),
    dashboardContentRoutes = require('./routes/dashboard/content');

mongoose.connect('mongodb+srv://yelpcamp:TpAn8PCBwgkYTYC7@yelpcamp-rzbzf.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());

app.use(require('express-session')({
	secret: 'this is an awesome bible app',
	resave: false,
	saveUninitialized: false
}));
/*
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
app.use(function(req, res, next) {
	res.locals.user = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/dashboard/content', dashboardContentRoutes);

app.listen(8080, function() {
    console.log('Bible App Operational');
});
