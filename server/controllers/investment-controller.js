const { Portfolio, Investment } = require('../models');

module.exports = {
	async createInvestment({ body }, res) {
		// https://stackoverflow.com/questions/16002659/how-to-query-nested-objects
		try {
			const filter = { name: body.name };
			const update = {
				name: body.name,
				quantity: body.quantity
			};
			const options = {
				new: true, // Return the updated document
				upsert: true // Create if no match is found
			};

			// Find an investment with the same name and update it, or create a new one if it doesn't exist
			const investmentData = await Investment.findOneAndUpdate(filter, update, options);

			const portfolioUpdate = {
				$addToSet: { investment: investmentData._id }
			};

			const portfolio = await Portfolio.findOneAndUpdate(
				{ name: params.portfolioName },

				portfolioUpdate,
				{ new: true }
			);

			res.status(200).json(portfolio);
		} catch (error) {
			console.error("Error in createInvestment:", error);
			res.status(500).send("Error creating/updating investment");
		}
	},


	async getInvestmentId({ params }, res) {
		const investmentData = await Investment.findById(params.id);

		res.status(200).json(investmentData);
	},

	async getAllInvestments({ params }, res) {
		const investments = await Investment.find(params.id);
		
		res.status(200).json(investments);
},

	async deleteInvestment({  params }, res) {
		const portfolio = await Portfolio.findOneAndUpdate(
			{ name: params.portfolioName },
			{ $pull: { investment: params.investmentId } },
			{ new: true }
		);

		res.status(200).json(portfolio);
	},

	async deleteAllInvestment({ params }, res) {
		const portfolio = await Portfolio.findOneAndDelete(
			{ name: params.portfolioName },
			{ $pull: { investment: params.investmentId } },
			{ new: true }
		);

		res.status(200).json(portfolio);
	},
};
