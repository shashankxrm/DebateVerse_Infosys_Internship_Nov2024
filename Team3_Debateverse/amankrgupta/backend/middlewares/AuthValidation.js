const { body, validationResult } = require("express-validator");

const RegisterValidate = [
  body("email").isEmail().withMessage("Invalid email format !"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long !"),
  body("role")
    .isIn(["user", "admin"])
    .withMessage("Role must be either user or admin !"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ inputerrors: errors.array()});
    }
    next();
  },
];

const LoginValidate = [
  body("email").isEmail().withMessage("Invalid email format !"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long !"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ inputerrors: errors.array()});
    }
    next();
  },
];

const ResetPasswordValidate = [
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long !"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ inputerrors: errors.array()});
    }
    next();
  },
];

module.exports = { RegisterValidate, LoginValidate, ResetPasswordValidate };
