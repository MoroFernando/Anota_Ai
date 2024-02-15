const Router = require('express').Router();
const userController = require('../controllers/usersController');

Router.get('/usuarios', userController.listAllUsers);

module.exports = Router;