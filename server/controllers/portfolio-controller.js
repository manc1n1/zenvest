const { User, Portfolio } = require('../models');

module.exports = {
	async createPortfolio(req, res) {
		console.log(req.body.userId);
		console.log(req.body);

		if (!req.body.userId || !req.body) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		try {
			// console.log("User:", req.user);
			console.log('Body:', req.body);

			const portfolioData = await Portfolio.create({
				name: req.body.portfolioName,
				type: req.body.portfolioType,
			});

			await User.findByIdAndUpdate(
				req.body.userId, // Use _id from req.user
				{ $push: { portfolio: portfolioData._id } },
				{ new: true },
			);

			res.status(200).json(portfolioData);
		} catch (error) {
			console.error('Error in create Portfolio:', error);
			res.status(500).send('Error creating portfolio');
		}
	},

	async getPortfolioById({ params }, res) {
		try {
			const portfolioData = await Portfolio.findById(params.id);
			res.status(200).json(portfolioData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async getAllPortfolios(req, res) {
		const { userId } = req.params;

		try {
			// Assuming Portfolio model has a field named user_id to filter by
			const portfolioData = await Portfolio.find({ userId });
			res.status(200).json(portfolioData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async deletePortfolioById({ params }, res) {
		const user = await User.findOneAndUpdate(
			{ name: params.username },
			{ $pull: { portfolio: params.portfolioId } },
			{ new: true },
		);

		res.status(200).json(user);
	},

	async deleteAllPortfolios({ params }, res) {
		const user = await User.findOneAndDelete(
			{ name: params.username },
			{ $pull: { portfolio: params.portfolioId } },
			{ new: true },
		);

		res.status(200).json(user);
	},
};
