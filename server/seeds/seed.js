const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { Tech } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
	await cleanDB('Tech', 'teches');

	await Tech.insertMany(techData);

	console.log('Technologies seeded!');
	process.exit(0);
});
