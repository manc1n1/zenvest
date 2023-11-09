const { Schema, model } = require('mongoose');

const investmentSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	quantity: {
		type: Number,
		required: true,
		trim: true,
	},
});

const Investment = model('Investment', investmentSchema);

module.exports = Investment;
