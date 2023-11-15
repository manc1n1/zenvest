const { Portfolio, Investment } = require('../models');

module.exports = {
	async createInvestment(req, res) {
		if (!req.body.portfolioId || !req.body) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		try {
			const filter = { name: req.body.investmentName };
			const update = {
				$inc: { quantity: req.body.investmentQuantity }, // Increment the quantity
			};
			const options = {
				new: true, // Return the updated document
				upsert: true, // Create if no match is found
			};

			// Find an investment with the same name and update its quantity or create a new one if it doesn't exist
			const investmentData = await Investment.findOneAndUpdate(
				filter,
				update,
				options,
			);

			// Update the portfolio using the investment _id
			const portfolioUpdate = {
				$addToSet: { investment: investmentData._id },
			};

			const portfolio = await Portfolio.findByIdAndUpdate(
				req.body.portfolioId,
				portfolioUpdate,
				{ new: true },
			);

			res.status(200).json(investmentData);
		} catch (error) {
			console.error('Error in createInvestment:', error);
			res.status(500).send('Error creating/updating investment');
		}
	},

	async getInvestmentById({ params }, res) {
		try {
			const investmentData = await Investment.findById(params.id);
			res.status(200).json(investmentData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async getAllInvestments(req, res) {
		try {
			const investmentData = await Portfolio.find({});
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
