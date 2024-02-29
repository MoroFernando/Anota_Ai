const Nota = require('../models/notesModel');

exports.getAllNotes = async (req, res) => {
  try{
    const notes = await Nota.find().lean();
    res.render('pages/notes', { 
        notes: notes,
        tittle: 'Minhas Notas'
    });
  }catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('/');
  }
};

exports.getMyNotes = async (req, res) => {
    try{
        const myNotes = await Nota.find({user_id: req.session.user._id}).sort({data_criacao: 'desc'}).lean();
        return res.render('pages/notes', {
            notes: myNotes,
            title: 'Minhas Notas'
        });
    }catch (err){
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};

exports.createNote = async (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const user = req.session.user._id;

    try {
        const newNote = await Nota.create({ titulo: titulo, conteudo: descricao, user_id: user });
        return res.redirect('/notas');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};
