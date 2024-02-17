const Router = require('express').Router();
const userController = require('../controllers/usersController');

Router.get('/auth', (req, res) => {
  res.render('auth');
});

Router.post('/signup', userController.signup);

Router.get('/runAs/:id', userController.runAs);

Router.get('/deleteUser/:id', userController.deleteUser);

module.exports = Router;