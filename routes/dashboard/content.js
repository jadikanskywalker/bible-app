var express = require('express'),
    app = express(),
    router = express.Router();

router.get('/home', (req, res) => {
  res.render('content/home.ejs');
});
router.get('/saved', (req, res) => {
  res.render('content/saved.ejs');
});
router.get('/notes', (req, res) => {
  res.render('content/notes.ejs');
});
router.get('/journal', (req, res) => {
  res.render('content/journal.ejs');
});
router.get('/bible', (req, res) => {
  res.render('content/bible.ejs');
});
router.get('/icons', (req, res) => {
  res.render('content/icons.ejs');
});
router.get('/map', (req, res) => {
  res.render('content/map.ejs');
});
router.get('/notifications', (req, res) => {
  res.render('content/notifications.ejs');
});
router.get('/tables', (req, res) => {
  res.render('content/tables.ejs');
});
router.get('/typography', (req, res) => {
  res.render('content/typography.ejs');
});
router.get('/upgrade', (req, res) => {
  res.render('content/upgrade.ejs');
});
router.get('/user', (req, res) => {
  res.render('content/user.ejs');
});

module.exports = router;