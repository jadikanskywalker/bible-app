var express = require('express'),
  router = express.Router(),
  { isLoggedIn, updateStreak } = require('../../middleware'),
  User = require('../../models/user');

router.get('/', isLoggedIn, updateStreak, (req, res) => {
  res.render('dashboard/index', {
    page: 'home'
  });
});
router.get('/:page', isLoggedIn, updateStreak, (req, res) => {
  res.render('dashboard/index', {
    page: req.params.page
  });
});

module.exports = router;