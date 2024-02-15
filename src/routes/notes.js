const Router = require('express').Router();
const authOnly = require('../middlewares/authenticate');

Router.get('/notas', authOnly, (req, res) => {
  res.render('notes');
});

Router.post('/notas', (req, res) => {
  res.sendStatus(200);
});

module.exports = Router;