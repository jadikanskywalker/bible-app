var express = require('express'),
    router = express.Router(),
    isLoggedIn = require('../../middleware').isLoggedIn,
    User = require('../../models/user');

router.get('/', isLoggedIn, (req, res) => {
  
  res.render('dashboard/index', {
    page: 'home'
  });
});
router.get('/:page', isLoggedIn, (req, res) => {
  res.render('dashboard/index', {
    page: req.params.page
  });
});

module.exports = router;