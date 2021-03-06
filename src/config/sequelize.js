const Sequelize = require('sequelize');
const sequelize = new Sequelize('recipes', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    define: { timestamps: false },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../schemas/user')(sequelize, Sequelize);
db.recipe = require('../schemas/recipe')(sequelize, Sequelize);

module.exports = db;