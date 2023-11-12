const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
	async login({ body }, res) {
		const user = await User.findOne({
			email: body.email,
		});

		if (!user) {
			res.status(404).json({ message: '404: User not found.' });
		}

		const correctPw = await user.isCorrectPassword(body.password);

		if (!correctPw) {
			res.status(401).json({ message: '401: Unauthorized.' });
		}

		const token = signToken(user);

		res.status(200).json({ token, user });
	},

	async signUp({ body }, res) {
		const user = await User.create({
			username: body.username,
			email: body.email,
			password: body.password,
		});

		const userInfo = {
			username: user.username,
			email: user.email,
		};

		const token = signToken(user);

		res.status(200).json({ token, userInfo });
	},

	//logout
};
