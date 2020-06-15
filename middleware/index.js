var User = require('../models/user');

module.exports = {
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    //req.flash('error', 'You must be signed in to do that!');
    res.redirect('/login');
  },
  updateStreak: function(req, res, next) {
    let moment = req.app.locals.moment;
    let todayMoment = moment();
    let streakDate = moment(req.user.streak.date) || todayMoment.subtract(2, 'days');
    let userID = req.user.id;
    let data = {
      days: req.user.streak.days + 1 || 1,
      date: todayMoment.toDate()
    };
    if (streakDate.isSame(todayMoment.subtract(1, 'days'), 'day')) {
      User.findByIdAndUpdate(userID, { $set: { streak: data } }, function(err, user) {
        if (err) console.log(err);
        req.session.passport.user.streak = data;
        next();
      });
    } else if (streakDate.isBefore(todayMoment.subtract(1, 'days'), 'day')) {
      data.days = 1;
      User.findByIdAndUpdate(userID, { $set: { streak: data } }, function(err, user) {
        if (err) console.log(err);
        req.session.passport.user.streak = data;
        next();
      });
    } else {
      next();
    }
  }
};