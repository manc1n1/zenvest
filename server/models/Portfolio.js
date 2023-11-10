const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	type: {
		type: String,
		required: true,
		trim: true,
	},
	investment: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Investment',
		},
	],
});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;
