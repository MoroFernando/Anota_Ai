const Nota = require('../models/notesModel');

exports.getAllNotes = async (req, res) => {
  try{
    const notes = await Nota.find().lean();
    res.render('pages/notes', { 
        notes: notes,
        page: 'Minhas notas'
    });
  }catch(err){
    console.error(err);
    req.flash('error_msg', 'Erro inesperado');
    return res.redirect('/');
  }
};

exports.getMyNotes = async (req, res) => {
    try{
        const todasMinhasNotas = await Nota.find({user_id: req.session.user._id}).sort({data_criacao: 'desc'}).lean();

        const notasFinalizadas = todasMinhasNotas.filter(nota => nota.finalizada);
        const notasNaoFinalizadas = todasMinhasNotas.filter(nota => !nota.finalizada);

        const notas = notasNaoFinalizadas.concat(notasFinalizadas);

        return res.render('pages/notes', {
            notes: notas,
            page: 'Minhas notas'
        });
    }catch (err){
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};

exports.createNote = async (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao.replace(/"/g, '\'');
    const user = req.session.user._id;

    try {
        await Nota.create({ titulo: titulo, conteudo: descricao, user_id: user });
        req.flash('success_msg', 'Nota criada');
        return res.redirect('/notas');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};

exports.deleteNote = async (req, res) => {
    
    const notaID = req.body._id;

    try {
        await Nota.findByIdAndDelete(notaID);
        req.flash('success_msg', 'Nota excluída com sucesso');
        return res.redirect('/notas');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};

exports.editNote = async (req, res) => {

    const notaID = req.body._id;
    const notaTitulo = req.body.titulo;
    const notaConteudo = req.body.conteudo;

    try {
        await Nota.findByIdAndUpdate(notaID, {
            titulo: notaTitulo,
            conteudo: notaConteudo
        })
        req.flash('success_msg', 'Nota editada com sucesso');
        return res.redirect('/notas');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
};

exports.endNote = async (req, res) => {
    const notaID = req.body.notaId;

    try {
        const nota = await Nota.findById(notaID);

        if (!nota.finalizada){
            nota.finalizada = true;
            nota.data_finalizacao = Date.now();
        } else {
            nota.finalizada = false;
            nota.data_finalizacao = undefined;
            delete nota.data_finalizacao;
        }
        
        await nota.save();
        
        req.flash('success_msg', 'Nota finalizada');
        return res.redirect('/notas');
    } catch (err) {
        console.error(err);
        req.flash('error_msg', 'Erro inesperado');
        return res.redirect('/');
    }
;}
