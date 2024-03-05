const Router = require('express').Router();

Router.get('*', (req, res) => {
  res.render('pages/404', { layout: '404' });
});

module.exports = Router;