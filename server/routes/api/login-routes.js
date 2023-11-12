const router = require('express').Router();
const { login, signUp, logout } = require('../../controllers/login-controller');

router.route('/login').post(login);
router.route('/signup').post(signUp);
// router.route('/logout').post(logout);

module.exports = router;
