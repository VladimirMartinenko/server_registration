const createHttpError = require("http-errors");
const RefreshToken = require("../db/models/refreshTokens");
const User = require("../db/models/user");
const AuthService = require("../services/auth.service");
// const jwt = require("jsonwebtoken");
// const utils = require("util");
// const {JWT_SECRET, JWT_EXPIRATION_TIME} = require('../constants');

// const jwtSign = utils.promisify(jwt.sign);

module.exports.register = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    const sessionData = await AuthService.createSession(user);

    res.status(201).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email });

    if (!user) {
      return next(createHttpError(401, "invalid data"));
    }

    if (user.password !== password) {
      return next(createHttpError(401, "invalid data"));
    }
    const sessionData = await AuthService.createSession(user);

    res.status(200).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  const {
    refreshTokenInstance
  } = req;
  const sessionData = await AuthService.refreshSession(refreshTokenInstance);
  res.status(200).send({ data: sessionData });
};
