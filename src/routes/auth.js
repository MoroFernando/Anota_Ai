const Router = require('express').Router();
const userController = require('../controllers/usersController');

Router.get('/auth', (req, res) => {
  res.render('pages/login', {layout: 'auth.hbs'});
});

Router.post('/signup', userController.signup);

Router.post('/signin', userController.signin);

Router.get('/runAs/:id', userController.runAs);

Router.get('/deleteUser/:id', userController.deleteUser);

module.exports = Router;