const express = require('express'),
    session = require('express-session'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MongoStore = require('connect-mongo')(session),
    flash = require('connect-flash'),
	  passport = require('passport'),
	  LocalStrategy = require('passport-local'),
    User = require("./models/user"),
	  methodOverride = require('method-override'),
    //cookieParser = require("cookie-parser"),
    gulpfile = require('./gulpfile').execFile;

const indexRoutes = require('./routes'),
    dashboardRoutes = require('./routes/dashboard'),
    dashboardGetRoutes = require('./routes/dashboard/get'),
    dashboardPostRoutes = require('./routes/dashboard/post');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://jadikan:JW68MU4yiyRDurp@bible-app.rzbzf.mongodb.net/bible-app?retryWrites=true&w=majority', {
	useNewUrlParser: true,
  createIndexes: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

mongoose.Promise = global.Promise;

//app.use(cookieParser());
//app.use(flash());

app.locals.moment = require('moment');

app.use(session({
	secret: 'this is an awesome bible app',
	resave: false,
	saveUninitialized: false,
  cookie: { httpOnly: false },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: 12 * 3600,
    ttl: 4 * 24 * 3600
  })
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  var sessionUser = { id: user._id, username: user.username, name: user.name, streak: user.streak, topTwo: user.topTwo };
  cb(null, sessionUser);
});
passport.deserializeUser((sessionUser, cb) => {
  cb(null, sessionUser);
});

app.use(function(req, res, next) {
  res.locals.user = req.user;
	//res.locals.error = req.flash("error");
	//res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/dashboard/get', dashboardGetRoutes);
app.use('/dashboard/post', dashboardPostRoutes);

app.listen(8080, function() {
    console.log('Bible App Operational at http://localhost:8080');
});
