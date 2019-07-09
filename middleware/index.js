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
    let streakDate = req.app.locals.moment(req.user.streak.date);
    let streakDays = req.user.streak.days++;
    let todayMoment = req.app.locals.moment();
    let userID = req.user.id;
    let data = {
      days: req.user.streak.days++,
      date: todayMoment.toDate()
    };
    if (streakDate.isSame(todayMoment.subtract(1, 'days'), 'day')) {
      User.findByIdAndUpdate(userID, { $set: { streak: data } });
    } else if (streakDate.isBefore(todayMoment.subtract(1, 'days'), 'day')) {
      data.days = 1;
      User.findByIdAndUpdate(userID, { $set: { streak: data } });
    }
    next();
  },
  content: {
    home: function(req, res, next) {
      User.findOne({ _id: req.user.id }, (err, user) => {
        if (err) console.log(err);
        else {
          req.user.streak = user.streak;
          req.user.topThree = user.topThree;
        }
      });
      next();
    }
  }
};