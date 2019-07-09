var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');

router.get('/', (req, res) => {
  res.redirect('index');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post("/signup", function(req, res) {
    var newUser = new User({username: req.body.username, name: req.body.name});
    //if(req.body.adminCode === process.env.ADMIN_CODE) {
    //  newUser.isAdmin = true;
    //}
    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function() {
           //req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/dashboard"); 
        });
    });
});

//show login form
router.get("/login", function(req, res) {
   res.render("login", {page: 'login'}); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        //failureFlash: true,
        //successFlash: 'Welcome to YelpCamp!'
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   //req.flash("success", "See you later!");
   res.redirect("/login");
});

module.exports = router;