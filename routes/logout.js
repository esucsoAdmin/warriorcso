const express = require('express');
const router = express.Router();

/* @desc GET / page. */
router.get('/', (req, res) => {
  if(req.session.user!=null){
      req.session.destroy(function(err){
          console.log(err);
      });
      res.redirect('/');
  } else{
      res.redirect('/');
  }
});

module.exports = router;
