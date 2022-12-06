const express = require("express");
const router  = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local',{
    successRedirect : '/kelolab',
    failureRedirect : '/masuk'
}));

router.get ('/masuk', (req, res)=>{
    res.render('login');
});

router.get('/logout', function(req,res, next){
    if (req.session){
        req.session.destroy(err => {
            if (err){
                res.status(400).send('Unable to logout');
            } else {
                res.redirect('/')
            }
        });
    } else {
        res.end();
    }
});



module.exports = router;