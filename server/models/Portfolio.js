const { Schema, model } = require('mongoose');
const Investment = require('./Investment');

const portfolioSchema = new Schema({
	investment: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Investment',
		},
	],
});

const Portfolio = model('Portfolio', userSchema);

module.exports = Portfolio;
