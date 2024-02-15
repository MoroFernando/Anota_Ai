const Router = require('express').Router();

Router.get('/', (req, res) => {
  res.render('home');
})

Router.use(
  require('./auth'),
  require('./users'),
  require('./notes'),
  
  // 404 ----------------
  require('./notFound')
);

module.exports = Router;