const router = require('express').Router();
const loginRoutes = require('./login-routes.js');

router.use('/user', loginRoutes);

module.exports = router;
