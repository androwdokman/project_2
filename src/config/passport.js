const db = require('../config/sequelize.js');
const User = db.users;

var configAuth = require('./google');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; 
// expose this function to our app using module.exports
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleauth.clientID,
        clientSecret: configAuth.googleauth.clientsecret,
        callbackURL: configAuth.googleauth.callbackURL,
        profileFields: ['id', 'displayName', 'link','email']
      },
      function(accesstoken, refreshToken, profile, done) {
        process.nextTick(function(){
            
            User.findAll({where: {userid: profile.id}}).then(user =>{
            //console.log(user);
            if(user.length != 0)
                return done(null,user);
            else
                {
                    User.create({  
                        userid: profile.id,
                        token: accesstoken,
                        name: profile.displayName,
                        email: profile.emails[0].value
                    }).then(user => {
                        console.log(user);
                        return done(null,user);	
                        
                    }).catch(function(err){
                        console.log(err);
                    });  
                }
            });    
        });                 
    }
    ));
};