const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
	signToken: function ({ email, username, _id }) {
		const payload = { email, username, _id };
		return jwt.sign({ authenticatedPerson: payload }, secret, {
			expiresIn: expiration,
		});
	},
};
