const Router = require('express').Router();
const authOnly = require('../middlewares/authenticate');
const notesController = require('../controllers/notesController');

Router.get('/notas', authOnly, notesController.getMyNotes);

Router.post('/notas', (req, res) => {
    res.sendStatus(200);
});

Router.get('/novaNota', authOnly, (req, res) => {
  res.render('pages/addNote');
});

Router.post('/novaNota', authOnly, notesController.createNote);

module.exports = Router;