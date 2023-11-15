const { Portfolio, Investment } = require('../models');

module.exports = {
	async createInvestment(req, res) {
		console.log(req.body.portfolioId);
		console.log(req.body);
		// https://stackoverflow.com/questions/16002659/how-to-query-nested-objects

		if (!req.body.portfolioId || !req.body) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		try {
			console.log('Body:', req.body);

			const filter = { name: req.body.investmentName };
			const update = {
				name: req.body.investmentName,
				quantity: req.body.investmentQuantity,
			};
			const options = {
				new: true, // Return the updated document
				upsert: true, // Create if no match is found
			};

			// Find an investment with the same name and update it, or create a new one if it doesn't exist
			const investmentData = await Investment.findOneAndUpdate(
				filter,
				update,
				options,
			);

			const portfolioUpdate = {
				$addToSet: { investment: investmentData._id },
			};

			const portfolio = await Portfolio.findOneAndUpdate(
				{ name: req.body.investmentName },
				portfolioUpdate,
				{ new: true },
			);

			await Portfolio.findByIdAndUpdate(
				req.body.portfolioId, // Use _id from req.user
				{ $push: { investment: investmentData._id } },
				{ new: true },
			);

			res.status(200).json(investmentData);
		} catch (error) {
			console.error('Error in createInvestment:', error);
			res.status(500).send('Error creating/updating investment');
		}
	},

	async getInvestmentId({ params }, res) {
		const investmentData = await Investment.findById(params.id);

		res.status(200).json(investmentData);
	},

	async getAllInvestments(req, res) {
		try {
			const investmentData = await Investment.find();
			res.status(200).json(investmentData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async deleteInvestmentId({ params }, res) {
		const portfolio = await Portfolio.findOneAndUpdate(
			{ name: params.portfolioName },
			{ $pull: { investment: params.investmentId } },
			{ new: true },
		);

		res.status(200).json(portfolio);
	},

	async deleteAllInvestment({ params }, res) {
		const portfolio = await Portfolio.findOneAndDelete(
			{ name: params.portfolioName },
			{ $pull: { investment: params.investmentId } },
			{ new: true },
		);

		res.status(200).json(portfolio);
	},
};
