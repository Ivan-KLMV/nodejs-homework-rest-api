const { contactEditDataValidator } = require('../../utils');

exports.checkContactEditData = (req, res, next) => {
  const { error, value } = contactEditDataValidator.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'invalid data' });
  }

  req.body = value;

  next();
};
