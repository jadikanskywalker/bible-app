var express = require('express'),
    router = express.Router();

router.get('/home', (req, res) => {
  res.render('dashboard/content/home.ejs');
});
router.get('/saved', (req, res) => {
  res.render('dashboard/content/saved.ejs');
});
router.get('/notes', (req, res) => {
  res.render('dashboard/content/notes.ejs');
});
router.get('/journal', (req, res) => {
  res.render('dashboard/content/journal.ejs');
});
router.get('/bible', (req, res) => {
  res.render('dashboard/content/bible.ejs');
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