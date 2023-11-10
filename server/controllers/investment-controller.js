const { Portfolio, Investment } = require('../models');

module.exports = {
	async createInvestment({ body }, res) {
		// https://stackoverflow.com/questions/16002659/how-to-query-nested-objects
		const investmentData = await Investment.create({
			name: body.name,
			quantity: body.quantity,
		});

		const portfolio = await Portfolio.findOneAndUpdate(
			{
				name: body.name,
			},
			{
				$addToSet: {
					investment: investmentData._id,
				},
			},
		);

		res.status(200).json(portfolio);
	},

	async getInvestmentId({ params }, res) {
		const investmentData = await Investment.findById(params.id);

		res.status(200).json(investmentData);
	},

	async getAllInvestments() {},

	async deleteInvestment() {},

	async deleteAllInvestment() {},
};
