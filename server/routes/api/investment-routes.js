const router = require('express').Router();
const {
	createInvestment, // if exists, find one and update
	getInvestmentName, // get investment by stock name
	getAllInvestments,
	deleteInvestment, // if exists, find one and update, if 0 delete record
	deleteAllInvestment,
} = require('../../controllers/login-controller');

router.route('/create').post(createInvestment);
router.route('/get').post(getInvestmentName);
router.route('/get_all').post(getAllInvestments);
router.route('/delete').post(deleteInvestment);
router.route('/delete_all').post(deleteAllInvestment);
