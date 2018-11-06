module.exports = (sequelize, Sequelize) => {
	const Recipe = sequelize.define('recipe', {
                name: {
                        type: Sequelize.STRING
                },
                description: {
                        type: Sequelize.STRING
                },
                imagelink: {
                        type: Sequelize.STRING
                },
                recipeid: {
                        type: Sequelize.STRING
                },
	});
	return Recipe;
}