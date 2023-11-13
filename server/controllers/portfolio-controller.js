const { User, Portfolio } = require("../models");

module.exports = {
    async createPortfolio(req, res) {
        // Assuming the authMiddleware has already run and set req.user
        console.log(req.body.userId);
        console.log(req.body);

        if (!req.body.userId || !req.body.userId) {
            return res.status(401).json({ message: "Not authorized" });
        }

        try {
            // console.log("User:", req.user);
            console.log("Body:", req.body);

            const portfolioData = await Portfolio.create({
                name: req.body.portfolioName,
                type: req.body.portfolioType,
            });

            await User.findByIdAndUpdate(
                req.body.userId, // Use _id from req.user
                { $push: { portfolio: portfolioData._id } },
                { new: true }
            );

            res.status(200).json(portfolioData);
        } catch (error) {
            console.error("Error in create Portfolio:", error);
            res.status(500).send("Error creating portfolio");
        }
    },

    async getPortfolioId({ params }, res) {
        const PortfolioData = await Portfolio.findById(params.id);

        res.status(200).json(PortfolioData._id);
    },

    async getAllPortfolios({}, res) {
        const portfolios = await Portfolio.find({});

        res.status(200).json(portfolios);
    },

    async deletePortfolioById({ params }, res) {
        const user = await User.findOneAndUpdate(
            { name: params.username },
            { $pull: { portfolio: params.portfolioId } },
            { new: true }
        );

        res.status(200).json(user);
    },

    async deleteAllPortfolios({ params }, res) {
        const user = await User.findOneAndDelete(
            { name: params.username },
            { $pull: { portfolio: params.portfolioId } },
            { new: true }
        );

        res.status(200).json(user);
    },
};
