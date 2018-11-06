var User = require('../schemas/user');
module.exports = function(app, passport) {
        // =====================================
        app.get('/auth/google', passport.authenticate('google',{scope: ['email']}));


        app.get('/auth/google/callback',
        passport.authenticate('google', { successRedirect: '/home',
                                      failureRedirect: '/' }));
        // =====================================
        // LOGOUT ==============================
        // =====================================
        app.get('/logout', function(req, res) {
            req.logout();
            res.redirect('/');
        });
    };
    function isLoggedIn(req,res,next){
        if(req.isAuthenticated())
        {
                return next();
        }
        else
            res.redirect('/');
    }