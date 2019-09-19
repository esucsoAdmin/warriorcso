const express = require('express');
const router = express.Router();

/*
LOGOUT ROUTING
In this route, the code will destroy the
cookie and sign the use out of the profile.
*/
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
