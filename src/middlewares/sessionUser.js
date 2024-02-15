function sessionUser() {
  return (req, res, next) => {
    if(req.session && req.session.User){
      res.locals.USER = req.session.User;
    }
    next();
  }
}

module.exports = sessionUser;