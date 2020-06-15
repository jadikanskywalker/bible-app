const express = require('express'),
    router = express.Router(),
    User = require('../../../models/user'),
    middleware = require('../../../middleware'),
    { isLoggedIn } = middleware;

router.get('/home', isLoggedIn, (req, res) => {
  res.render('dashboard/content/home.ejs');
});
router.get('/saved', isLoggedIn, (req, res) => {
  res.render('dashboard/content/saved.ejs');
});
router.get('/notes', isLoggedIn, (req, res) => {
  res.render('dashboard/content/notes.ejs');
});
router.get('/journal', isLoggedIn, (req, res) => {
  res.render('dashboard/content/journal.ejs');
});
router.get('/bible', isLoggedIn, (req, res) => {
  res.render('dashboard/content/bible.ejs');
});
router.get('/profile', isLoggedIn, (req, res) => {
  User.findById(req.user.id, function(err, user) {
    if (err) console.log(err);
    else res.locals.user = user;
    res.render('dashboard/content/profile.ejs');
  });
});
router.get('/icons', (req, res) => {
  res.render('dashboard/content/icons.ejs');
});
router.get('/map', (req, res) => {
  res.render('dashboard/content/map.ejs');
});
router.get('/notifications', (req, res) => {
  res.render('dashboard/content/notifications.ejs');
});
router.get('/tables', (req, res) => {
  res.render('dashboard/content/tables.ejs');
});
router.get('/typography', (req, res) => {
  res.render('dashboard/content/typography.ejs');
});
router.get('/upgrade', (req, res) => {
  res.render('dashboard/content/upgrade.ejs');
});
router.get('/user', (req, res) => {
  res.render('dashboard/content/user.ejs');
});

module.exports = router;