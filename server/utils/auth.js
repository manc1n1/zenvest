const jwt = require('jsonwebtoken');

const secret = 'zecret';
const expiration = '2h';

module.exports = {
	signToken: function ({ username, email, _id }) {
		const payload = { username, email, _id };
		return jwt.sign({ authenticatedPerson: payload }, secret, {
			expiresIn: expiration,
		});
	},

	authMiddleware: function ({ req }) {
		let token =
			req.body.token || req.query.token || req.headers.authorization;

		if (req.headers.authorization) {
			token = token.split(' ').pop().trim();
		}

		if (!token) {
			return req;
		}

		try {
			const { authenticatedPerson } = jwt.verify(token, secret, {
				maxAge: expiration,
			});
			req.user = authenticatedPerson;
		} catch {
			console.log('Invalid token');
		}

		return req;
	},
};
