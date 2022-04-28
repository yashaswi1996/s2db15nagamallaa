var express = require('express');
const Olives_controlers= require('../controllers/Olives'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => {
    console.log(req) 
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', Olives_controlers.Olives_view_all_Page);

router.get('/detail', Olives_controlers.Olives_view_one_Page); 

router.get('/create',secured, Olives_controlers.Olives_create_Page); 

router.get('/update',secured,Olives_controlers.Olives_update_Page);

router.get('/delete',secured, Olives_controlers.Olives_delete_Page);

module.exports = router;