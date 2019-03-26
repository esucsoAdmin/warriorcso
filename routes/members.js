const express = require('express');

const router = express.Router();

/* @desc GET / page. */
router.get('/', (req, res) => {
  res.render('members.ejs', {title : 'Who goes there!?'});
});

router.post('/', (req,res) => {

  console.log(req.body.firstName);

  res.render('members.ejs', {title : "Who goes there!? esq."});
});
module.exports = router;
