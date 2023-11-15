const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
	async login({ body }, res) {
		try {
			const user = await User.findOne({
				email: body.email,
			});

			if (!user) {
				return res
					.status(404)
					.json({ message: '404: User not found.' });
			}

			const correctPw = await user.isCorrectPassword(body.password);

			if (!correctPw) {
				return res.status(401).json({ message: '401: Unauthorized.' });
			}

			const token = signToken(user);

			res.status(200).json({ token, user });
		} catch (err) {
			console.error('Error during user lookup:', err);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},

	async signUp({ body }, res) {
		try {
			const emailExists = await User.findOne({ email: body.email });
			const userExists = await User.findOne({ username: body.username });
			if (userExists && emailExists) {
				return res
					.status(400)
					.json({ message: 'Username & Email already exists.' });
			} else if (userExists) {
				return res
					.status(400)
					.json({ message: 'Username already exists.' });
			} else if (emailExists) {
				return res
					.status(400)
					.json({ message: 'Email already exists.' });
			} else {
				const user = await User.create({
					username: body.username,
					email: body.email,
					password: body.password,
				});

				const userInfo = {
					id: user._id,
					username: user.username,
					email: user.email,
				};

				const token = signToken(user);

				res.status(200).json({ token, userInfo });
			}
		} catch (err) {
			console.error('Error during user signup:', err);
			return res.status(500).json({ message: `${err}` });
		}
	},
};
