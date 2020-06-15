const express = require('express'),
    router = express.Router(),
    User = require('../../../models/user'),
    middleware = require('../../../middleware'),
    { isLoggedIn } = middleware,
    { body, validationResult, matchedData } = require('express-validator');

router.post('/user/profile', isLoggedIn, [
  body('name').isLength({ min: 3 }).withMessage("Name is too short.").trim().escape(),
  body('username').isLength({ min: 5 }).withMessage("Username is too short.").trim().escape(),
  body('email').isEmail().normalizeEmail({gmail_remove_dots: false}),
  body('gender').isIn(["male", "female", ""]),
  body('birthday').optional().isNumeric().trim().escape(),
  /*body('oldPassword').not().isEmpty().withMessage("Old password was not given.").trim(),
  body('newPassword').trim().escape().custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      throw new Error('Password confirmation does not match new password.');
    }
    return true;
  }).isLength({ min: 8 }).withMessage('Password must be 8 or more characters.')*/
], (req, res) => {
  let errors = validationResult(req).array();
  let good = matchedData(req, { locations: ['body'] });
  if (good.gender==='male') good.gender = true;
  else if (good.gender==='female') good.gender = false;
  if (Object.keys(good).length > 0) {
    User.findByIdAndUpdate(req.user.id, {$set: good}, (err, user) => {
      if (err) console.log(err);
      res.redirect('/dashboard/profile');
    }); 
  } else {
    res.redirect('/dashboard/profile');
  }
});
router.post('/user/password', isLoggedIn, [
  body('oldPassword').not().isEmpty().withMessage("Old password feild is empty.").trim().escape(),
  body('newPassword').trim().escape().custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      throw new Error('New password feilds do not match.');
    }
    return true;
  }).isLength({ min: 8 }).withMessage('New Password must be 8 or more characters.')
], (req, res) => {
  let errors = validationResult(req).array();
  let good = matchedData(req, { locations: ['body'] });
  if (errors.length > 0) {
    res.json(errors);
  }
  if (good.oldPassword && good.newPassword) {
    User.findById(req.user.id, (err, user) => {
      if (err) res.json({msg: 'Something went wrong. Re-login and try again.'});
      if (!user) res.json({msg: 'Something went wrong. Re-login and try again.'});
      user.changePassword(good.oldPassword, good.newPassword).then(() => { res.redirect('/dashboard/profile');; }).catch((error) => {
        console.log(error);
        res.json({msg: 'Something went wrong. Please try again later.'});
      });
    });
  }
});
router.get("*", function(req, res) {
  res.json('No route here buddy');
});
router.post("*", function(req, res) {
  res.json('No route here buddy');
});

module.exports = router;