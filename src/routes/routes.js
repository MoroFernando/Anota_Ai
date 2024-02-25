const Router = require('express').Router();
const authOnly = require('../middlewares/authenticate');

Router.get('/', authOnly, (req, res) => {
  res.render('pages/home');
})

Router.use(
  require('./auth'),
  require('./users'),
  require('./notes'),
  
  // 404 ----------------
  require('./notFound')
);

module.exports = Router;