const Router = require('express').Router();
const userController = require('../controllers/usersController');

Router.get('/auth', (req, res) => {
  res.render('auth');
});

Router.post('/signup', userController.cadastro);

module.exports = Router;