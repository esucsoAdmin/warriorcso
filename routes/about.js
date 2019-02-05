const express = require('express');

const router = express.Router();

/* get home page. */
router.get('/', (req, res) => {
  res.render('about.ejs', {title : 'something to be said'});
});

module.exports = router;
