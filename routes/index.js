const express = require('express');

const router = express.Router();

/* @desc GET / page. */
router.get('/', (req, res) => {
  res.render('index.ejs', {title : 'Rendering Index'});
});

module.exports = router;
