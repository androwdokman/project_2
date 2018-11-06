const db = require('../config/sequelize.js');
const Recipes = db.recipe;
module.exports = function(app, passport) {

    app.get('/myrecipes', isLoggedIn, function(req, res) {
        Recipes.findAll({ where: { recipeid: req.user[0].userid } }).then(results => {
            res.render('myrecipes', { recipe: results });
        });
    });
    app.get('/user-recipes', isLoggedIn, function(req, res) {
        Recipes.findAll({ where: { recipeid: req.user[0].userid } }).then(results => {
            res.render('user-recipes', { recipe: results });
        });

    });
    app.post('/user-recipe-addrecipe', isLoggedIn, function(req, res) {
        Recipes.create({
            name: req.body.name,
            description: req.body.description,
            imagelink: req.body.imagelink,
            recipeid: req.user[0].userid
        }).then(user => {
            console.log('///////////////////////////////////////////////////////////////////////')
            console.log(user);
            res.redirect('/user-recipes');

        }).catch(function(err) {
            console.log(err);
        });
    });
    app.delete('/deleterecipe', isLoggedIn, function(req, res) {
        var id = parseInt(req.body.id);
        Recipes.destroy({
            where: { id: id }
        }).then(() => {
            res.redirect('/user-recipes');
        });

    });
    app.put('/edit-userrecipe/:id', isLoggedIn, function(req, res) {

        var id = parseInt(req.params.id);
        console.log(id);
        var data = {
            name: req.body.name,
            description: req.body.description,
            imagelink: req.body.link,
            recipeid: req.user[0].userid
        };
        Recipes.update(data, { where: { id: id } }).then(() => {
            res.redirect('/user-recipes');
        });
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else
        res.redirect('/');
}