function isAuthenticated (req, res, next) {
  if(req.session && req.session.User){
    return next();
  }else{
    return res.redirect('/auth');
  }
}

module.exports = isAuthenticated;