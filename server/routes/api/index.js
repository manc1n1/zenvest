const router = require('express').Router();
const loginRoutes = require('./login-routes.js');
const investmentRoutes = require('./investment-routes.js');

router.use('/user', loginRoutes);
router.use('/investment', investmentRoutes);

module.exports = router;
