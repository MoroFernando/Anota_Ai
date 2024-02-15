const Router = require('express').Router();

Router.get('*', (req, res) => {
  res.sendStatus(404).send('Página não encontrada');
});

module.exports = Router;