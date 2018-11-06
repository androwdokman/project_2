module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
                email: {
                        type: Sequelize.STRING
                },
                name: {
                        type: Sequelize.STRING
                },
                token: {
                        type: Sequelize.STRING
                },
                userid: {
                        type: Sequelize.STRING
                },
	});
	return User;
}