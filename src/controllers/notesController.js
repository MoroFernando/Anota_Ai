const Nota = require('../models/notesModel');

exports.getAllNotes = async (req, res) => {
  try{
    const notes = await Nota.find().lean();
    res.render('pages/notes', { notes: notes });
  }catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('/');
  }
};