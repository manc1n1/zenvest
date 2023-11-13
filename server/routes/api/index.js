const router = require('express').Router();
const loginRoutes = require('./login-routes.js');
const investmentRoutes = require('./investment-routes.js');
const portfolioRoutes = require('./portfolio-routes.js');
const Portfolio = require('../../models/Portfolio.js');

router.use('/user', loginRoutes);
router.use('/investment', investmentRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;
