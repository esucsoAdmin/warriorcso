const express = require('express');

const router = express.Router();

/* @desc GET / page. */
router.get('/', (req, res) => {
  res.render('login.ejs', {title : 'Who goes there!?'});
});

module.exports = router;
