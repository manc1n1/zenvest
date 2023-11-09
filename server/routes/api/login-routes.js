const router = require('express').Router();
const { login, signUp } = require('../../controllers/login-controller');

router.route('/').post(login);
router.route('/').post(signUp);

module.exports = router;
