var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('dashboard/index', {
    page: 'home'
  });
});
router.get('/:page', (req, res) => {
  res.render('dashboard/index', {
    page: req.params.page
  });
});


module.exports = router;