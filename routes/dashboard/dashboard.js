var express = require('express'),
    app = express(),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', {
    page: 'home'
  });
});
router.get('/:page', (req, res) => {
  res.render('index.ejs', {
    page: req.params.page
  });
});


module.exports = router;