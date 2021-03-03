module.exports = (req, res, next) => {
  if (req.user && req.user.id) {
    res.locals.username = req.user.username;
    res.locals.userid = req.user.id;
    res.locals.userRole = req.user.role;
  }
  next();
};
