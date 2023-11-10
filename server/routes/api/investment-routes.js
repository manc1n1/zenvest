const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
	createInvestment, // if exists, find one and update
	getInvestmentId, // get investment by stock name
	getAllInvestments,
	deleteInvestmentId, // if exists, find one and update, if 0 delete record
	deleteAllInvestment,
} = require('../../controllers/login-controller');

router.route('/', authMiddleware).post(createInvestment);
router.route('/get/:id', authMiddleware).post(getInvestmentId);
router.route('/get_all', authMiddleware).post(getAllInvestments);
router.route('/delete/:id', authMiddleware).post(deleteInvestmentId);
router.route('/delete_all', authMiddleware).post(deleteAllInvestment);
