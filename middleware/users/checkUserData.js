const { userValidator } = require('../../utils');

exports.checkUserData = (req, res, next) => {
  const { error, value } = userValidator.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  req.body = value;

  next();
};