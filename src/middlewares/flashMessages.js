const flash = require('connect-flash');

function flashMessages() {

  const connectFlash = flash();

  return (req, res, next) => { 
    connectFlash(req, res, () => {});
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
  };
}

module.exports = flashMessages;