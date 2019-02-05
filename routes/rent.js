const express = require('express');

const router = express.Router();

/* @desc GET /rent page. */
router.get('/', (req, res) => {
  res.render('rent.ejs', {title : 'something to be said'});
});

module.exports = router;
