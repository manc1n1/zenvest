const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const investmentRoutes = require('./investment-routes.js');
const portfolioRoutes = require('./portfolio-routes.js');

router.use('/user', userRoutes);
router.use('/investment', investmentRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;
