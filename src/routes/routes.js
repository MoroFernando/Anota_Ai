const Router = require('express').Router();
const authOnly = require('../middlewares/authenticate');

Router.get('/home', authOnly, (req, res) => {
    res.render('pages/home', { page: 'Home'});
  })

Router.use(
  require('./auth'),
  require('./users'),
  require('./notes'),
  
  // 404 ---------------- TEM QUE SER A ÚLTIMA ROTA
  require('./notFound')
);

module.exports = Router;