const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
	createPortfolio,
	getPortfolioById,
	getAllPortfoliosByUserId,
} = require('../../controllers/portfolio-controller');

router.route('/create', authMiddleware).post(createPortfolio);
router.route('/:id', authMiddleware).get(getPortfolioById);
router.route('/getAll/:id', authMiddleware).get(getAllPortfoliosByUserId);

module.exports = router;
