const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		uniqueCaseInsensitive: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		match: [/.+@.+\..+/, 'Must match an email address!'],
		uniqueCaseInsensitive: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 8,
	},
	portfolio: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Portfolio',
		},
	],
});

userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

userSchema.plugin(uniqueValidator, {
	message: 'Error, expected {PATH} to be unique.',
});

const User = model('User', userSchema);

module.exports = User;
