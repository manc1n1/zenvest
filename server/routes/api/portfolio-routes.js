const router = require("express").Router();

const { createPortfolio } = require("../../controllers/portfolio-controller");
const { authMiddleware } = require("../../utils/auth");

router.route("/create", authMiddleware).post(createPortfolio);

module.exports = router;
