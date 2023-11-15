const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const { createPortfolio } = require('../../controllers/portfolio-controller');

router.route('/create', authMiddleware).post(createPortfolio);

module.exports = router;
