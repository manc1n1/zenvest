const { Investment } = require('../models');

module.exports = {
	async createInvestment({ body }, res) {
		const investment = await Investment.create({
			name: body.name,
			quantity: body.quantity,
		});
	},

	async getInvestmentName() {},

	async getAllInvestments() {},

	async deleteInvestment() {},

	async deleteAllInvestment() {},
};
