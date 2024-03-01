const Router = require('express').Router();
const authController = require('../controllers/authController');

Router.get('/auth', (req, res) => {
  res.render('pages/login', {layout: 'auth.hbs'});
});

Router.post('/signup', authController.signup);

Router.post('/signin', authController.signin);

Router.post('/signout', authController.signout);

Router.get('/deleteUser/:id', authController.deleteUser);

module.exports = Router;