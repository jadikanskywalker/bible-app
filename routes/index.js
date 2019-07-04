var express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path');

router.get('/', (req, res) => {
  res.redirect('/dashboard/');
});

module.exports = router;