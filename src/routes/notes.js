const Router = require('express').Router();
const authOnly = require('../middlewares/authenticate');
const notesController = require('../controllers/notesController');

Router.get('/notas', authOnly, notesController.getAllNotes);

Router.post('/notas', (req, res) => {
  res.sendStatus(200);
});

module.exports = Router;