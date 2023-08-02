const jwt = require('jsonwebtoken');

const { SECRET } = require('../../constants/SECRET');
const User = require('../../models/userModel');

exports.authProtect = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    res.status(401).json({
      message: 'Not authorized',
    });
  }

  try {
    const { id } = jwt.verify(token, SECRET);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      return res.status(401).json({
        message: 'Not authorized',
      });
    }

    req.user = user;
    next();
  } catch {
    res.status(401).json({
      message: 'Not authorized',
    });
  }
};
