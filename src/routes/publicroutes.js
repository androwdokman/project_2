const db = require('../config/sequelize.js');
const Recipes = db.recipe;
module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        check = 0;
        if (req.user)
            check = 1;
        res.render('index', { check: check });
    });
    app.get('/home', function(req, res) {
        check = 0;
        if (req.user)
            check = 1;
        res.render('index', { check: check });
    });
    app.get('/recipe', function(req, res) {
        check = 0;
        if (req.user)
            check = 1;
        Recipes.findAll().then(results => {
            res.render('recipe', { check: check, recipe: results });
        });
    });
};