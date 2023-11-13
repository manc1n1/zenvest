const jwt = require("jsonwebtoken");

const secret = "zecret";
const expiration = "2h";

module.exports = {
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ authenticatedPerson: payload }, secret, {
            expiresIn: expiration,
        });
    },

    authMiddleware: function (req, res, next) {
        let token = req.headers.authorization;
        console.log(token);

        if (token) {
            token = token.split(" ").pop().trim();
        }

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        try {
            const { authenticatedPerson } = jwt.verify(token, secret);
            req.user = authenticatedPerson;
            next();
        } catch {
            console.log("Invalid token");
            res.status(401).json({ message: "Invalid token" });
        }

        return req;
    },
};
