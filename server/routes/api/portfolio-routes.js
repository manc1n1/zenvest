const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
	createPortfolio,
	getPortfolioById,
} = require('../../controllers/portfolio-controller');

router.route('/create', authMiddleware).post(createPortfolio);
router.route('/:id', authMiddleware).get(getPortfolioById);

module.exports = router;
