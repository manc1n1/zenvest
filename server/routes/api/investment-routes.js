const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
	createInvestment, // if exists, find one and update
	getInvestmentById, // get investment by stock name
	getAllInvestments,
	deleteInvestmentId, // if exists, find one and update, if 0 delete record
	deleteAllInvestment,
} = require('../../controllers/investment-controller');

router.route('/create', authMiddleware).post(createInvestment);
router.route('/:id', authMiddleware).get(getInvestmentById);
router.route('/get_all', authMiddleware).get(getAllInvestments);
router.route('/delete/:id', authMiddleware).delete(deleteInvestmentId);
router.route('/delete_all', authMiddleware).delete(deleteAllInvestment);

module.exports = router;
