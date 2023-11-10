const router = require('express').Router();
const { login, signUp } = require('../../controllers/login-controller');

router.route('/login').post(login);
router.route('/signup').post(signUp);

module.exports = router;
