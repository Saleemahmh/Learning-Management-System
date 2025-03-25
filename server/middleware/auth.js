const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = (role = "student") => {
  return (req, res, next) => {
    const token =
      req.header("Authorization") && req.header("Authorization").split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (role && req.user.role !== role) {
        return res
          .status(403)
          .json({ message: "Access denied. Not an admin." });
      }

      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
    }
  };
};

module.exports = authMiddleware;
