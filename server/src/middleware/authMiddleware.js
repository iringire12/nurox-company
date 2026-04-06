const jwt = require('jsonwebtoken');

const User = require('../models/User');

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401);
    next(new Error('Not authorized, token missing'));
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      res.status(401);
      next(new Error('Not authorized, user not found'));
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    next(new Error('Not authorized, token invalid'));
  }
};

module.exports = { protect };
